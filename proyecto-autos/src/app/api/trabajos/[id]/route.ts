import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trabajo = await prisma.trabajos.findUnique({
    where: { id: parseInt(id) },
    include: {
      Usuarios: true,
      Autos: true,
      Estados: true,
    },
  });
  return NextResponse.json(trabajo);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();
  const trabajo = await prisma.trabajos.update({
    where: { id: parseInt(id) },
    data,
  });
  return NextResponse.json(trabajo);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.trabajos.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({ message: "Trabajo eliminado" });
}
