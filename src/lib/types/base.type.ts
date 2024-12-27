import { ENUM_STATUS } from '@lib/enums';

export type BaseEntity = {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;
	status: ENUM_STATUS;
};

export type ServiceType = 'SERVER' | 'CLIENT';

export type FetchDataParams = {
	limit?: number;
	page?: number;
};

export type NextRequestParams<T = any> = {
	params: Promise<T>;
	searchParams: Promise<T>;
};

export type NextRequestIdParams = {
	params: Promise<{ id: string }>;
};

export type TableField<T> = {
	key: keyof T | '_';
	type?: 'text' | 'number' | 'boolean' | 'date' | 'link';
	link?: (item: T) => string;
	transform?: (value: any, obj: T) => any;
};
