import { type NextRequest, NextResponse } from 'next/server';
import { UserServerService } from '@lib/services';

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.toString();
	const data = await UserServerService.find(query);
	return NextResponse.json(data);
}
