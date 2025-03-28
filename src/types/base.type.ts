export type BaseResponse<T> = {
	statusCode: number;
	message: string;
	success: boolean;
	duration: string;
	path: string;
	data: T;
};
