import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: listar trabajos
export async function GET() {
  const trabajos = await prisma.trabajos.findMany();
  return NextResponse.json(trabajos);
}

// POST: crear trabajos
export async function POST(req: Request) {
  const data4 = await req.json();
  const nuevoTrabajo = await prisma.trabajos.create({ data4 });
  return NextResponse.json(nuevoTrabajo);
}
