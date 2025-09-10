import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const trabajos = await prisma.trabajos.findMany({
    include: {
      usuario: true,
      auto: true,
      estado: true,
      repuestos: true,
    },
  });
  return NextResponse.json(trabajos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const trabajo = await prisma.trabajos.create({ data });
  return NextResponse.json(trabajo);
}
