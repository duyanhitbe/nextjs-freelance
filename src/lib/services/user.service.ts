import { ApiResponse, CreateUserBody, ListUserParams, ServiceType, User } from '@lib/types';
import { BaseService } from '@lib/services';

class UserService extends BaseService {
	constructor(private readonly type: ServiceType) {
		super(type);
	}

	async find(params?: ListUserParams | string): Promise<ApiResponse<User[]>> {
		return this.axios.get<ApiResponse<User[]>>('/api/v1/users', params);
	}

	async findById(id: string): Promise<ApiResponse<User>> {
		return this.axios.get<ApiResponse<User>>(`/api/v1/users/${id}`);
	}

	async create(body: CreateUserBody): Promise<ApiResponse<User>> {
		return this.axios.post<ApiResponse<User>>('/api/v1/users', body);
	}

	async delete(id: string): Promise<ApiResponse<User>> {
		return this.axios.delete<ApiResponse<User>>(`/api/v1/users/${id}`);
	}
}

export const UserServerService = new UserService('SERVER');
export const UserClientService = new UserService('CLIENT');
