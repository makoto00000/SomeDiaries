import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllDiarys() {
  const diaries = await prisma.diary.findMany();
  return diaries;
}

//GETメソッド
export async function GET() {
  const diaries = await getAllDiarys();
  return NextResponse.json(diaries);
}

//POSTメソッド
export async function POST(request: NextRequest) {
  const { title, design, people, rule, isExchange } = await request.json();

  await prisma.diary.create({
    data: {
      title: title,
      design: design,
      people: people,
      rule:rule,
      isExchange: isExchange,
      // diaryAuthor: diaryAuthor,
      // article: article,
    },
  });

  const diaries = await getAllDiarys();
  return NextResponse.json(diaries);
}