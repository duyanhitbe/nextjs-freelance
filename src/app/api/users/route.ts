import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import axios from 'axios';
import { BACKEND_URL } from '@lib/constants';

export async function GET(req: NextApiRequest) {
	const data = await axios.get(BACKEND_URL + '/api/v1/users');
	return NextResponse.json(data.data);
}
