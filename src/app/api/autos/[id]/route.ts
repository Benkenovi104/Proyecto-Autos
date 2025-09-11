import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const auto = await prisma.autos.findUnique({
    where: { id: parseInt(id) },
    include: { Usuarios: true, Trabajos: true },
  });
  return NextResponse.json(auto);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();
  const auto = await prisma.autos.update({
    where: { id: parseInt(id) },
    data,
  });
  return NextResponse.json(auto);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.autos.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({ message: "Auto eliminado" });
}
