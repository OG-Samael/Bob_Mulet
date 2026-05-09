"use client";

import {
  Box,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

import type { QueueEntry, Service, Stylist } from "@/types/queue";

type Props = {
  queue: QueueEntry[];
  services: Service[];
  stylists: Stylist[];
  onStatusChange: (queueId: number, status: QueueEntry["status"]) => void;
};

export default function QueueTable({ queue, services, stylists, onStatusChange }: Props) {
  const getServiceNames = (ids: number[]) =>
    ids.map(id => services.find(s => s.id === id)?.name || "Unknown").join(", ");

  const getStylistName = (id: number | null) =>
    id == null ? "Any" : stylists.find(s => s.id === id)?.name || "Unknown";

  const statusColor = (status: QueueEntry["status"]) => {
    switch (status) {
      case "waiting": return "warning";
      case "in_service": return "info";
      case "completed": return "success";
      case "cancelled": return "default";
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Current Queue
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Services</TableCell>
              <TableCell>Stylist</TableCell>
              <TableCell>Appt Date</TableCell>
              <TableCell>Appt Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Est. Start</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {queue.map(entry => (
              <TableRow key={entry.queueId}>
                <TableCell>{entry.queueId}</TableCell>
                <TableCell>{entry.customerName}</TableCell>
                <TableCell>{getServiceNames(entry.serviceIds)}</TableCell>
                <TableCell>{getStylistName(entry.stylistId)}</TableCell>
                <TableCell>{entry.appointmentDate}</TableCell>
                <TableCell>{entry.appointmentTime}</TableCell>

                <TableCell>
                  <Chip
                    label={entry.status}
                    color={statusColor(entry.status)}
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  {entry.estimatedStart
                    ? new Date(entry.estimatedStart).toLocaleTimeString()
                    : "-"}
                </TableCell>

                <TableCell align="right">
                  <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => onStatusChange(entry.queueId, "in_service")}
                    >
                      Start
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      color="success"
                      onClick={() => onStatusChange(entry.queueId, "completed")}
                    >
                      Done
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => onStatusChange(entry.queueId, "cancelled")}
                    >
                      Cancel
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}

            {queue.length === 0 && (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  No customers in queue.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
