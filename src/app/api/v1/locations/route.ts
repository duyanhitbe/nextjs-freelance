import { NextRequest, NextResponse } from 'next/server';
import { LocationServerService } from '@lib/services';

export async function GET(req: NextRequest) {
	const data = await LocationServerService.find();
	return NextResponse.json(data);
}
