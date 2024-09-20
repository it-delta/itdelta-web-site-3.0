import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const workId:string | null = request?.nextUrl?.searchParams?.get('work');

  revalidateTag('getCases');
  revalidateTag('getMainCases');

  if(workId === 'all') {
    revalidateTag('getWork');
  }

  if(workId) {
    revalidateTag(`getWork-${workId}`);
  }

  return NextResponse.json({ message: 'Cache cleared!' });
}