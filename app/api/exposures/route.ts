import { NextResponse } from 'next/server';

const exposure = { property: 'office' };

export async function GET() {
  return NextResponse.json(exposure);
}

export async function POST() {
  return NextResponse.json(
    {
      message: 'Not Implemented'
    },
    {
      status: 404
    }
  );
}
