import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const trabajo = await prisma.trabajos.findUnique({
    where: { id: parseInt(params.id) },
    include: {
      usuario: true,
      auto: true,
      estado: true,
      repuestos: true,
    },
  });
  return NextResponse.json(trabajo);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const trabajo = await prisma.trabajos.update({
    where: { id: parseInt(params.id) },
    data,
  });
  return NextResponse.json(trabajo);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.trabajos.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: "Trabajo eliminado" });
}
