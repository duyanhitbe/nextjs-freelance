import { type NextRequest, NextResponse } from 'next/server';
import { TicketGroupServerService } from '@lib/services';

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.toString();
	const data = await TicketGroupServerService.find(query);
	return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
	const body = await req.json();
	try {
		const data = await TicketGroupServerService.create(body);
		return NextResponse.json(data);
	} catch (err: any) {
		return NextResponse.json(err.response?.data, {
			status: err.status
		});
	}
}