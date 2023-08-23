import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
import { prisma } from '@/app/lib/prisma';

// const prisma = new PrismaClient();

async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

//GETメソッド
export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}

//POSTメソッド
export async function POST(request: NextRequest) {
  const { name } = await request.json();

  await prisma.user.create({
    data: {
      name: name,
    },
  });

  const users = await getAllUsers();
  return NextResponse.json(users);
}

//DELETEメソッド
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')!;

  await prisma.user.delete({
    where: {
      id: id,
    },
  });

  const users = await getAllUsers();
  return NextResponse.json(users);
}

