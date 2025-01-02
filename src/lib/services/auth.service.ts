import { ApiResponse, LoginUserResponse, ServiceType, User } from '../types';
import { AxiosClientService, AxiosServerService } from './axios.service';

class AuthService {
	constructor(private readonly serviceType: ServiceType) {}

	private get axios() {
		return this.serviceType === 'SERVER' ? AxiosServerService : AxiosClientService;
	}

	async loginUser(username: string, password: string): Promise<ApiResponse<LoginUserResponse>> {
		return this.axios.post<ApiResponse<LoginUserResponse>>('/api/v1/auth/user/login', {
			username,
			password
		});
	}

	async logout(): Promise<ApiResponse<string>> {
		return this.axios.post<ApiResponse<string>>('/api/v1/auth/logout', {});
	}

	async getUserInfo(headers?: any): Promise<ApiResponse<User>> {
		return this.axios.get<ApiResponse<User>>('/api/v1/auth/user', {}, headers);
	}
}

export const AuthServerService = new AuthService('SERVER');
export const AuthClientService = new AuthService('CLIENT');
