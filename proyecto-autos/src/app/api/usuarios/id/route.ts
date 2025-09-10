import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const usuario = await prisma.usuarios.findUnique({
    where: { id: parseInt(params.id) },
    include: { Autos: true, Trabajos: true },
  });
  return NextResponse.json(usuario);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const usuario = await prisma.usuarios.update({
    where: { id: parseInt(params.id) },
    data,
  });
  return NextResponse.json(usuario);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.usuarios.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: "Usuario eliminado" });
}
