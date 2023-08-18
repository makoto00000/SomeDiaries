import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllDiaries() {
  const diaries = await prisma.diary.findMany();
  return diaries;
}

//GETメソッド
export async function GET() {
  const diaries = await getAllDiaries();
  return NextResponse.json(diaries);
}

//POSTメソッド
export async function POST(request: NextRequest) {
  const { title, designId, people, rule, userId } = await request.json();

  await prisma.diary.create({
    data: {
      title: title,
      designId: designId,
      people: people,
      rule:rule,
      diaryUser: {
        connect: {id: userId}
      }
    },
  });

  const diaries = await getAllDiaries();
  return NextResponse.json(diaries);
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