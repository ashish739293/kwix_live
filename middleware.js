import { NextResponse } from 'next/server';

export function middleware(request) {
   const token = request.cookies.get('authToken');

   // If the user is not authenticated, redirect to the login page
   if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
   }
}

// Optional: Configure paths where middleware should run
export const config = {
   matcher: ['/protected-path/:path*'], // Replace with paths you want to protect
};
