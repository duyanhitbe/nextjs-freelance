export type Meta = {
	limit: number;
	page: number;
	totalItem: number;
	totalPage: number;
	prevPage?: any;
	nextPage?: any;
};

export type BaseResponse<T> = {
	statusCode: number;
	message: string;
	success: boolean;
	duration: string;
	path: string;
	data: T;
};

export type BasePaginatedResponse<T> = {
	statusCode: number;
	message: string;
	success: boolean;
	duration: string;
	path: string;
	data: T[];
	meta?: Meta;
};
