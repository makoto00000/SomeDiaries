import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
import { prisma } from '@/app/lib/prisma';

// const prisma = new PrismaClient();


async function getAllDiaries() {
  const diaries = await prisma.diary.findMany();
  return diaries;
}
async function getLatestDiary() {
  const diary = await prisma.diary.findFirst({
    orderBy: {
      id: "desc",
    }
  })
  return diary;
}

//GETメソッド
export async function GET(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get('id')!);
  const diaries = await prisma.diary.findMany({
    where: {
      id: id,
    }
  });
  return NextResponse.json(diaries);
}

//POSTメソッド
export async function POST(request: NextRequest) {
  const data = await request.json();

  await prisma.diary.create({data});

  const diary = await getLatestDiary();
  return NextResponse.json(diary);
}

//DELETEメソッド
export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get('id')!);

  await prisma.diary.delete({
    where: {
      id: id,
    },
  });

  const diaries = await getAllDiaries();
  return NextResponse.json(diaries);
}