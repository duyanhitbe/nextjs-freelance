import { ApiResponse, ListUserParams, User } from '@lib/types';
import { AxiosClientService } from '@lib/services';

class UserService {
	async find(params: ListUserParams): Promise<ApiResponse<User[]>> {
		try {
			return AxiosClientService.get<ApiResponse<User[]>>('/api/users', params);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default new UserService();
