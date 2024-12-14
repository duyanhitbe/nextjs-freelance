export type ApiResponse<T> = {
	statusCode: number;
	message: string;
	success: boolean;
	duration: string;
	path: string;
	data: T;
	meta?: ApiResponseMeta;
};

export type ApiResponseMeta = {
	limit: number;
	page: number;
	totalItem: number;
	totalPage: number;
	prevPage?: number;
	nextPage?: number;
};
