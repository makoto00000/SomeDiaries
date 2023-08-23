import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";

async function getArticles() {
  const articles = await prisma.article.findMany(); 
  return articles;
}

// export async function GET() {
//   const articles = await getArticles();
//   return NextResponse.json(articles);
// }
export async function GET(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get('id')!);
  const articles = await prisma.article.findMany({
    where: {
      diaryId: id,
    },
    include: {
      user:{
        select:{
          name:true,
          image:true,
        }
      }
    }
  });
  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  await prisma.article.create({data});

  const articles = await getArticles();
  return NextResponse.json(articles);
}