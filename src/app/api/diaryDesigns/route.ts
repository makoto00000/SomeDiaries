import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllDiaryDesigns() {
  const diaryDesigns = await prisma.diaryDesign.findMany();
  return diaryDesigns;
}

export async function GET() {
  const diaryDesigns = await getAllDiaryDesigns();
  return NextResponse.json(diaryDesigns);
}