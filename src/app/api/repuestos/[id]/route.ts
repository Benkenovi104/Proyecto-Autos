import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const repuesto = await prisma.repuestos.findUnique({
    where: { id: parseInt(id) },
  });
  return NextResponse.json(repuesto);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();
  const repuesto = await prisma.repuestos.update({
    where: { id: parseInt(id) },
    data,
  });
  return NextResponse.json(repuesto);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.repuestos.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({ message: "Repuesto eliminado" });
}
