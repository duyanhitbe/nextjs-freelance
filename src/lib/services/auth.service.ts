import { ApiResponse, LoginUserResponse, ServiceType } from '../types';
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
}

export const AuthServerService = new AuthService('SERVER');
export const AuthClientService = new AuthService('CLIENT');
