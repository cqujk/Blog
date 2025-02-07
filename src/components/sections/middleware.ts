// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // 为 PDF 文件强制下载
    if (pathname.endsWith('.pdf')) {
        const response = NextResponse.next();
        response.headers.set('Content-Disposition', 'attachment');
        return response;
    }

    return NextResponse.next();
}