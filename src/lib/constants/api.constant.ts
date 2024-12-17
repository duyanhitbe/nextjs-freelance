import { ApiResponse } from '@lib/types';

export const INITIAL_API_RESPONSE: ApiResponse<any> = {
	statusCode: 200,
	duration: '100ms',
	message: 'success',
	path: '/',
	success: true,
	data: []
};
