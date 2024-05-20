import { PrismaClient } from '@repo/db/client';
import { NextResponse } from 'next/server';

const client = new PrismaClient();

export const GET = async () => {
    await client.merchant.create({
        data: {
            email: "asd",
            name: "adsads",
            auth_type: "Google" 
        }
    });
    return NextResponse.json({
        message: "hi there"
    });
};
