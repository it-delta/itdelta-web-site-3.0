import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {

    revalidateTag('getBlogs');

    return NextResponse.json({ message: 'Cache cleared!' });
}