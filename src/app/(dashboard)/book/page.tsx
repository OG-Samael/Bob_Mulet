"use client";

import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button
} from "@mui/material";
import * as XLSX from "xlsx";

import AddToQueueForm from "@/components/queue/AddToQueueForm";
import QueueTable from "@/components/queue/QueueTable";
import type { QueueEntry, Service, Stylist } from "@/types/queue";

export default function BookPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [stylists, setStylists] = useState<Stylist[]>([]);
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Export filters
  const [exportStylist, setExportStylist] = useState<number | "none">("none");
  const [exportDate, setExportDate] = useState("");

  const loadData = async () => {
    const res = await fetch("/api/queue", { cache: "no-store" });
    const json = await res.json();

    setServices(json.services ?? []);
    setStylists(json.stylists ?? []);
    setQueue(json.queue ?? []);

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addToQueue = async (entry: any) => {
    await fetch("/api/queue", {
      method: "POST",
      body: JSON.stringify(entry)
    });
    await loadData();
  };

  const updateStatus = async (queueId: number, status: string) => {
    await fetch("/api/queue", {
      method: "PUT",
      body: JSON.stringify({ queueId, status })
    });
    await loadData();
  };

  // -----------------------------
  // EXPORT LOGIC
  // -----------------------------
  const exportToExcel = () => {
    if (exportStylist === "none") {
    alert("Please select a stylist to export");
    
return;
  }

  const now = new Date();

  // Filter by stylist
  let filtered = queue.filter(q => q.stylistId === exportStylist);

  // Filter by date (optional)
  if (exportDate) {
    filtered = filtered.filter(q => q.appointmentDate === exportDate);
  }

  // If NO date filter → remove past appointments
  if (!exportDate) {
    filtered = filtered.filter(q => {
      const dt = new Date(`${q.appointmentDate}T${q.appointmentTime}`);

      
return dt >= now;
    });
  }

  // Sort by date + time
  filtered.sort((a, b) => {
    const da = new Date(`${a.appointmentDate}T${a.appointmentTime}`);
    const db = new Date(`${b.appointmentDate}T${b.appointmentTime}`);

    
return da.getTime() - db.getTime();
  });

  if (filtered.length === 0) {
    alert("No appointments found for this selection");
    
return;
  }

    // Build Excel rows
    const rows = filtered.map(q => {
      const stylist = stylists.find(s => s.id === q.stylistId)?.name || "Unknown";

      const serviceNames = q.serviceIds
        .map(id => services.find(s => s.id === id)?.name || "")
        .join(", ");

      const totalDuration = q.serviceIds
        .map(id => services.find(s => s.id === id)?.duration || 0)
        .reduce((a, b) => a + b, 0);

      const start = new Date(`${q.appointmentDate}T${q.appointmentTime}`);
      const end = new Date(start.getTime() + totalDuration * 60000);

      return {
        "Customer Name": q.customerName,
        "Services": serviceNames,
        "Total Duration (min)": totalDuration,
        "Stylist": stylist,
        "Appointment Date": q.appointmentDate,
        "Appointment Time": q.appointmentTime,
        "Ends At": end.toTimeString().slice(0, 5),
        "Status": q.status
      };
    });

    // Create workbook
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Appointments");

    // File name
    const stylistName = stylists.find(s => s.id === exportStylist)?.name || "Stylist";
    const datePart = exportDate ? `_${exportDate}` : "";
    const filename = `appointments_${stylistName}${datePart}.xlsx`;

    XLSX.writeFile(workbook, filename);
  };

  // -----------------------------

  if (loading) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography>Loading appointments...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Salon Booking Queue
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Booking Form */}
      <AddToQueueForm
        services={services}
        stylists={stylists}
        queue={queue}
        onAdd={addToQueue}
      />

      {/* Export Section */}
      <Box sx={{ mt: 4, mb: 4, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Export Appointments
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>

          {/* Stylist Filter */}
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="export-stylist-label">Select Stylist</InputLabel>
            <Select
              labelId="export-stylist-label"
              label="Select Stylist"
              value={exportStylist}
              onChange={(e) =>
                setExportStylist(
                  e.target.value === "none" ? "none" : Number(e.target.value)
                )
              }
            >
              <MenuItem value="none">Select Stylist</MenuItem>
              {stylists.map(st => (
                <MenuItem key={st.id} value={st.id}>
                  {st.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Optional Date Filter */}
          <TextField
            label="Specific Date (optional)"
            type="date"
            value={exportDate}
            onChange={(e) => setExportDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />

          <Button variant="contained" onClick={exportToExcel}>
            Export to Excel
          </Button>
        </Box>
      </Box>

      {/* Queue Table */}
      <QueueTable
        queue={queue}
        services={services}
        stylists={stylists}
        onStatusChange={updateStatus}
      />
    </Container>
  );
}
