import { NextRequest, NextResponse } from 'next/server';
import { NextRequestIdParams } from '@lib/types';
import { UserServerService } from '@lib/services';

export async function GET(req: NextRequest, { params }: NextRequestIdParams) {
	const { id } = await params;
	const data = await UserServerService.findById(id);
	return NextResponse.json(data);
}

export async function DELETE(req: NextRequest, { params }: NextRequestIdParams) {
	const { id } = await params;
	const data = await UserServerService.delete(id);
	return NextResponse.json(data);
}

export async function PATCH(req: NextRequest, { params }: NextRequestIdParams) {
	const { id } = await params;
	const body = await req.json();
	const data = await UserServerService.updateById(id, body);
	return NextResponse.json(data);
}
