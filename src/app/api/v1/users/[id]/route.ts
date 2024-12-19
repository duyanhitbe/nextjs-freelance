import { NextRequest, NextResponse } from 'next/server';
import { NextRequestIdParams } from '@lib/types';
import { UserServerService } from '@lib/services';

export async function DELETE(req: NextRequest, { params }: NextRequestIdParams) {
	const { id } = await params;
	const { data } = await UserServerService.delete(id);
	return NextResponse.json(data);
}
