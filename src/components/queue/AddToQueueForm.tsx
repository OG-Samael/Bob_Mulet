"use client";

import { useState, useMemo } from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Alert
} from "@mui/material";

import type { Service, Stylist, QueueEntry } from "@/types/queue";

type Props = {
  services: Service[];
  stylists: Stylist[];
  queue: QueueEntry[];
  onAdd: (entry: any) => void;
};

export default function AddToQueueForm({ services, stylists, queue, onAdd }: Props) {
  const [customerName, setCustomerName] = useState("");
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [stylistId, setStylistId] = useState<number | "none">("none");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [error, setError] = useState("");

  const toggleService = (id: number) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Total duration of selected services
  const totalDuration = useMemo(() => {
    return selectedServices
      .map(id => services.find(s => s.id === id)?.duration || 0)
      .reduce((a, b) => a + b, 0);
  }, [selectedServices, services]);

  // Generate time slots (15 min increments)
  const generateTimeSlots = () => {
    if (!appointmentDate) return [];

    const slots: string[] = [];
    let start = new Date(`${appointmentDate}T09:00`);
    const end = new Date(`${appointmentDate}T18:00`);

    while (start < end) {
      slots.push(start.toTimeString().slice(0, 5));
      start = new Date(start.getTime() + 15 * 60000);
    }

    return slots;
  };

  // Prevent booking past times for today's date
  const isPastTime = (slot: string) => {
    const today = new Date();
    const selected = new Date(`${appointmentDate}T${slot}`);

    const isSameDay =
      selected.getFullYear() === today.getFullYear() &&
      selected.getMonth() === today.getMonth() &&
      selected.getDate() === today.getDate();

    return isSameDay && selected < today;
  };

  // Check if a slot is free (stylist availability)
  const isSlotAvailable = (slot: string) => {
    if (isPastTime(slot)) return false;
    if (stylistId === "none") return true;
    if (selectedServices.length === 0) return true;

    const slotStart = new Date(`${appointmentDate}T${slot}`);
    const slotEnd = new Date(slotStart.getTime() + totalDuration * 60000);

    return !queue.some(existing => {
      if (existing.stylistId !== stylistId) return false;
      if (existing.status === "cancelled") return false;
      if (existing.appointmentDate !== appointmentDate) return false;

      const existingStart = new Date(`${existing.appointmentDate}T${existing.appointmentTime}`);

      const existingDuration = existing.serviceIds
        .map(id => services.find(s => s.id === id)?.duration || 0)
        .reduce((a, b) => a + b, 0);

      const existingEnd = new Date(existingStart.getTime() + existingDuration * 60000);

      // Overlap check
      return slotStart < existingEnd && slotEnd > existingStart;
    });
  };


  // Filter available slots
  const availableSlots = useMemo(() => {
    if (!appointmentDate) return [];
    
return generateTimeSlots().filter(isSlotAvailable);
  }, [appointmentDate, stylistId, selectedServices, queue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) return setError("Customer name is required");
    if (selectedServices.length === 0) return setError("Select at least one service");
    if (!appointmentDate) return setError("Select appointment date");
    if (!appointmentTime) return setError("Select appointment time");

    if (!isSlotAvailable(appointmentTime)) {
      return setError("This time slot is unavailable");
    }

    setError("");

    onAdd({
      customerName: customerName.trim(),
      serviceIds: selectedServices,
      stylistId: stylistId === "none" ? null : stylistId,
      appointmentDate,
      appointmentTime,
      status: "waiting",
      checkInTime: new Date().toISOString(),
      estimatedStart: null
    });

    setCustomerName("");
    setSelectedServices([]);
    setStylistId("none");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add Customer to Queue
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

        <TextField
          label="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        {/* Multiple Services */}
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Select Services
          </Typography>
          <FormGroup>
            {services.map(service => (
              <FormControlLabel
                key={service.id}
                control={
                  <Checkbox
                    checked={selectedServices.includes(service.id)}
                    onChange={() => toggleService(service.id)}
                  />
                }
                label={`${service.name} (${service.duration} min)`}
              />
            ))}
          </FormGroup>
        </Box>

        {/* Stylist */}
        <FormControl fullWidth>
          <InputLabel id="stylist-label">Stylist (optional)</InputLabel>
          <Select
            labelId="stylist-label"
            label="Stylist (optional)"
            value={stylistId}
            onChange={(e) =>
              setStylistId(
                e.target.value === "none" ? "none" : Number(e.target.value)
              )
            }
          >
            <MenuItem value="none">Any Stylist</MenuItem>
            {stylists.map(st => (
              <MenuItem key={st.id} value={st.id}>
                {st.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Appointment Date */}
        <TextField
          label="Appointment Date"
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />

        {/* Appointment Time (Smart Picker) */}
        <FormControl fullWidth>
          <InputLabel id="time-label">Appointment Time</InputLabel>
          <Select
            labelId="time-label"
            label="Appointment Time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            disabled={!appointmentDate || selectedServices.length === 0}
          >
            {availableSlots.length === 0 && (
              <MenuItem disabled>No available slots</MenuItem>
            )}

            {availableSlots.map(slot => (
              <MenuItem key={slot} value={slot}>
                {slot}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" size="large">
          Add to Queue
        </Button>
      </Box>
    </Box>
  );
}
