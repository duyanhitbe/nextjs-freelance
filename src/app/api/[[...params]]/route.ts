/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';

type Params = {
	params: Promise<{ params: string[] }>;
};

function getQuery(request: NextRequest): string {
	const url = request.nextUrl;
	return url.searchParams.toString();
}

async function getPathParams({ params }: Params): Promise<string[]> {
	return (await params).params;
}

async function getPath(request: NextRequest, params: Params): Promise<string> {
	const query = getQuery(request);
	const pathParams = await getPathParams(params);
	const prefix = process.env.API_URL || '';
	return prefix + '/api/' + pathParams.join('/') + '?' + query;
}

async function getBody(request: NextRequest): Promise<Record<string, any>> {
	return request.json();
}

function getHeaders(request: NextRequest): Record<string, string> {
	const headers = Object.fromEntries(request.headers);
	const result: any = {};

	if (headers.authorization) {
		result['Authorization'] = headers.authorization;
	}

	return result;
}

async function request(
	request: NextRequest,
	params: Params,
	method: 'get' | 'post' | 'patch' | 'put' | 'delete'
) {
	const path = await getPath(request, params);
	const headers = getHeaders(request);

	try {
		let data: any = null;

		if (method === 'get' || method === 'delete') {
			const response = await axios[method](path, {
				headers
			});
			data = response.data;
		} else {
			const body = await getBody(request);
			const response = await axios[method](path, body, {
				headers
			});
			data = response.data;
		}

		return NextResponse.json(data);
	} catch (error: any) {
		if (error instanceof AxiosError) {
			return NextResponse.json(error.response?.data, {
				status: error.response?.status || 500
			});
		}

		return NextResponse.json(
			{
				error: error.message || 'Unknown error'
			},
			{
				status: 500
			}
		);
	}
}

export async function GET(req: NextRequest, params: Params) {
	return request(req, params, 'get');
}

export async function POST(req: NextRequest, params: Params) {
	return request(req, params, 'post');
}

export async function PATCH(req: NextRequest, params: Params) {
	return request(req, params, 'patch');
}

export async function PUT(req: NextRequest, params: Params) {
	return request(req, params, 'put');
}

export async function DELETE(req: NextRequest, params: Params) {
	return request(req, params, 'delete');
}
