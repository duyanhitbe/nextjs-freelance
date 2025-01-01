import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
	const body = await req.json();
	const baseURL = process.env.BACKEND_URL;
	const axiosInstance = axios.create({ baseURL });
	const data = await axiosInstance.post('/api/v1/auth/user/login', body);
	return NextResponse.json(data.data, {
		headers: data.headers as any
	});
}
