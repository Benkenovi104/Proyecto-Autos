import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const estados = await prisma.estados.findMany({
    include: { Trabajos: true },
  });
  return NextResponse.json(estados);
}

export async function POST(req: Request) {
  const data = await req.json();
  const estado = await prisma.estados.create({ data });
  return NextResponse.json(estado);
}
