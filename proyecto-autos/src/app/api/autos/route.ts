import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const autos = await prisma.autos.findMany({
    include: { usuario: true, Trabajos: true },
  });
  return NextResponse.json(autos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const auto = await prisma.autos.create({ data });
  return NextResponse.json(auto);
}
