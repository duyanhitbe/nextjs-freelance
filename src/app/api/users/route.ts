import { type NextRequest, NextResponse } from 'next/server';
import { AxiosServerService } from '@lib/services';
import { ApiResponse, User } from '@lib/types';

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.toString();
	const data = await AxiosServerService.get<ApiResponse<User>>(`/api/v1/users?${query}`);
	return NextResponse.json(data);
}
