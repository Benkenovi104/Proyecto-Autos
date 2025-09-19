import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: listar trabajos
export async function GET() {
  const trabajos = await prisma.trabajos.findMany({
    include: {
      Autos: {
        include: {
          Usuarios: true
        }
      },
      Estados: true,
    },
  });
  return NextResponse.json(trabajos);
}

// POST: crear trabajos
export async function POST(req: Request) {
  const data = await req.json();
  const nuevoTrabajo = await prisma.trabajos.create({ data });
  return NextResponse.json(nuevoTrabajo);
}
