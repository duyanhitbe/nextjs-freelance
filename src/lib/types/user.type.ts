import { BaseEntity } from '@lib/types';

export type User = BaseEntity & {
	username: string;
};

export type ListUserParams = {
	username?: string;
};
