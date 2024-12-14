import axios from 'axios';
import { ApiResponse, User } from '@lib/types';

class UserService {
	async find(): Promise<ApiResponse<User[]>> {
		try {
			const response = await axios.get<ApiResponse<User[]>>(
				'http://localhost:3000/api/users'
			);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default new UserService();
