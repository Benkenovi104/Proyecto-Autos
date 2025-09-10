import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const usuario = await prisma.usuarios.findUnique({
    where: { id: parseInt(id) },
    include: { Autos: true, Trabajos: true },
  });
  return NextResponse.json(usuario);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();
  const usuario = await prisma.usuarios.update({
    where: { id: parseInt(id) },
    data,
  });
  return NextResponse.json(usuario);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.usuarios.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({ message: "Usuario eliminado" });
}
