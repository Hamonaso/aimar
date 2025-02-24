// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const headers = Object.fromEntries(req.headers.entries());
  console.log('HTTP Headers:', headers); // Esto aparecerá en los logs de Vercel
  return NextResponse.next();
}
