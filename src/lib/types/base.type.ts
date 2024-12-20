export type BaseEntity = {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;
	status: Status;
};

export type ServiceType = 'SERVER' | 'CLIENT';

export type FetchDataParams = {
	limit?: number;
	page?: number;
};

export type NextRequestParams<T = any> = {
	params: Promise<T>;
};

export type NextRequestIdParams = {
	params: Promise<{ id: string }>;
};

export type Status = 'ACTIVE' | 'INACTIVE';
