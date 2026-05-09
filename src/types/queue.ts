export type QueueStatus = "waiting" | "in_service" | "completed" | "cancelled";

export type Service = {
  id: number;
  name: string;
  duration: number;
};

export type Stylist = {
  id: number;
  name: string;
  skills: number[];
};

export type QueueEntry = {
  queueId: number;
  customerName: string;
  serviceIds: number[];
  stylistId: number | null;
  status: QueueStatus;
  checkInTime: string;
  appointmentDate: string;
  appointmentTime: string;
  estimatedStart?: string | null;
};
