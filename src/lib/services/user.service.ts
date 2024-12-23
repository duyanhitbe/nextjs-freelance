import { CreateUserBody, ListUserParams, ServiceType, UpdateUserBody, User } from '@lib/types';
import { BaseService } from '@lib/services';

class UserService extends BaseService<User, ListUserParams, CreateUserBody, UpdateUserBody> {
	path = '/api/v1/users';

	constructor(private readonly type: ServiceType) {
		super(type);
	}
}

export const UserServerService = new UserService('SERVER');
export const UserClientService = new UserService('CLIENT');
