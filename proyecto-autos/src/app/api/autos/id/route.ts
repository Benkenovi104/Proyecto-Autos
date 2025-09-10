import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const auto = await prisma.autos.findUnique({
    where: { id: parseInt(params.id) },
    include: { usuario: true, Trabajos: true },
  });
  return NextResponse.json(auto);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const auto = await prisma.autos.update({
    where: { id: parseInt(params.id) },
    data,
  });
  return NextResponse.json(auto);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.autos.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: "Auto eliminado" });
}
