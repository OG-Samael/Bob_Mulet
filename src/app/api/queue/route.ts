import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";

const dataPath = path.join(
  process.cwd(),
  "src/app/api/queue/data/queue.json"
);

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
}

function writeData(data: any) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readData());
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = readData();

  const nextId =
    data.queue.length > 0
      ? Math.max(...data.queue.map((q: any) => q.queueId)) + 1
      : 1;

  const newEntry = {
    queueId: nextId,
    customerName: body.customerName,
    serviceIds: body.serviceIds,
    stylistId: body.stylistId,
    appointmentDate: body.appointmentDate,
    appointmentTime: body.appointmentTime,
    checkInTime: new Date().toISOString(),
    status: "waiting",
    estimatedStart: null
  };

  data.queue.push(newEntry);
  writeData(data);

  return NextResponse.json(newEntry);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const data = readData();

  const entry = data.queue.find((q: any) => q.queueId === body.queueId);

  if (!entry)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  entry.status = body.status;
  writeData(data);

  return NextResponse.json(entry);
}
