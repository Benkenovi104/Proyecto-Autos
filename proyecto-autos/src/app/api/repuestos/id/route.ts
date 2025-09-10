import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const repuesto = await prisma.repuestos.findUnique({
    where: { id: parseInt(params.id) },
    include: { trabajos: true },
  });
  return NextResponse.json(repuesto);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const repuesto = await prisma.repuestos.update({
    where: { id: parseInt(params.id) },
    data,
  });
  return NextResponse.json(repuesto);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.repuestos.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: "Repuesto eliminado" });
}
