import { ApiResponse } from '@lib/types';
import { Dispatch, SetStateAction } from 'react';

export const INITIAL_API_RESPONSE: ApiResponse<any> = {
	statusCode: 200,
	duration: '100ms',
	message: 'success',
	path: '/',
	success: true,
	data: []
};

export const INITIAL_SET_STATE_FUNCTION: Dispatch<SetStateAction<any>> = () => {};
