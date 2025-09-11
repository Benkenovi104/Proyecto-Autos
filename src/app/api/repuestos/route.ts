import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const repuestos = await prisma.repuestos.findMany();
  return NextResponse.json(repuestos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const repuesto = await prisma.repuestos.create({ data });
  return NextResponse.json(repuesto);
}
