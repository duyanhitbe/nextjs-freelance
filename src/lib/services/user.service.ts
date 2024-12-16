import { ApiResponse, ListUserParams, ServiceType, User } from '@lib/types';
import { BaseService } from '@lib/services';

class UserService extends BaseService {
	constructor(private readonly type: ServiceType) {
		super(type);
	}

	async find(params?: ListUserParams | string): Promise<ApiResponse<User[]>> {
		return this.axios.get<ApiResponse<User[]>>('/api/v1/users', params);
	}
}

export const UserServerService = new UserService('SERVER');
export const UserClientService = new UserService('CLIENT');
