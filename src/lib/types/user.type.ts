import { BaseEntity } from '@lib/types/base.type';

export type User = BaseEntity & {
	username: string;
};

export type ListUserParams = {
	username?: string;
};
