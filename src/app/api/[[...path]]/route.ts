import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

function getParams(req: NextRequest) {
	return req.nextUrl.searchParams.entries().reduce(
		(prev, [key, value]) => ({
			...prev,
			[key]: value
		}),
		{}
	);
}

function getHeaders(req: NextRequest) {
	return req.headers.entries().reduce(
		(prev, [key, value]) => ({
			...prev,
			[key]: value
		}),
		{}
	);
}

function getAxios(req: NextRequest) {
	const params = getParams(req);
	const headers = getHeaders(req);
	const baseURL = process.env.BACKEND_URL;
	return axios.create({ baseURL, params, headers });
}

export async function GET(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const axiosInstance = getAxios(req);
	const result = await axiosInstance.get(`${path}`);
	return NextResponse.json(result.data, { headers: result.headers as any });
}

export async function POST(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const body = await req.json();
	const axiosInstance = getAxios(req);
	const result = await axiosInstance.post(`${path}`, body || {});
	return NextResponse.json(result.data, { headers: result.headers as any });
}

export async function DELETE(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const axiosInstance = getAxios(req);
	const result = await axiosInstance.delete(`${path}`);
	return NextResponse.json(result.data, { headers: result.headers as any });
}

export async function PATCH(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const body = await req.json();
	const axiosInstance = getAxios(req);
	const result = await axiosInstance.patch(`${path}`, body);
	return NextResponse.json(result.data, { headers: result.headers as any });
}
