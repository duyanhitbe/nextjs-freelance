import { BaseEntity, FetchDataParams } from '@lib/types';

export type User = BaseEntity & {
	username: string;
};

export type ListUserParams = FetchDataParams & {
	username?: string;
};

export type CreateUserBody = {
	username: string;
	password: string;
};
