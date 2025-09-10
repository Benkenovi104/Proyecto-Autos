import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all
export async function GET() {
  const usuarios = await prisma.usuarios.findMany({
    include: { Autos: true, Trabajos: true },
  });
  return NextResponse.json(usuarios);
}

// POST
export async function POST(req: Request) {
  const data = await req.json();
  const nuevoUsuario = await prisma.usuarios.create({ data });
  return NextResponse.json(nuevoUsuario);
}
