// src/app/api/middleware.js

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET; // Your secret key for signing JWT tokens

// Middleware function
export async function middleware(req) {
    const { pathname } = req.nextUrl;

    // Log request information
    console.log(`Request made to: ${pathname}`);

    // Define protected routes
    const protectedRoutes = ['/api/protected', '/api/secure'];

    // Check for JWT token on protected routes
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        const authHeader = req.headers.get('Authorization');

        if (!authHeader) {
            return NextResponse.json({ message: 'No token provided' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1]; // Bearer <token>

        try {
            // Verify the token
            const decoded = jwt.verify(token, secretKey);
            req.user = decoded; // Attach user information to the request object
        } catch (error) {
            return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
        }
    }

    // Allow all requests to continue
    return NextResponse.next();
}
