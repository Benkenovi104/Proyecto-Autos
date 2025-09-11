import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const estado = await prisma.estados.findUnique({
    where: { id: parseInt(id) },
    include: { Trabajos: true },
  });
  return NextResponse.json(estado);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();
  const estado = await prisma.estados.update({
    where: { id: parseInt(id) },
    data,
  });
  return NextResponse.json(estado);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.estados.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({ message: "Estado eliminado" });
}
