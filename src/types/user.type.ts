import { BaseFilter } from '@app/types/base.type';

export type User = {
	id: string;
	createdAt: string;
	updatedAt: string;
	status: string;
	username: string;
};

export type FilterUser = BaseFilter & {};
