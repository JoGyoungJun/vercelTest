import { NextResponse } from 'next/server';

let count: number = 0;

export async function GET() {
    count++;
    return NextResponse.json({ count: count });
}