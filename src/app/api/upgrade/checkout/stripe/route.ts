import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  return NextResponse.json({ test: 'stripe' }, { status: 200 });
}
