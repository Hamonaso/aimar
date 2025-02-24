// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const headers = Object.fromEntries(req.headers.entries());
  console.log('📦 HTTP Headers:', headers);
  return NextResponse.next();
}
