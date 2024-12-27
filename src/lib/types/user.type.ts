import { BaseEntity, FetchDataParams } from '@lib/types';
import { ENUM_STATUS } from '../enums';

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

export type UpdateUserBody = Partial<{
	username: string;
	status: ENUM_STATUS;
}>;
