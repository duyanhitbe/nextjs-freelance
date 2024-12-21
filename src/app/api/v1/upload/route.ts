import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
	const body = await req.formData();

	const { data } = await axios.post<any>('https://api.imgur.com/3/upload', body, {
		headers: {
			Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`
		}
	});
	const link = data.data?.link || null;

	return NextResponse.json({ link });
}
