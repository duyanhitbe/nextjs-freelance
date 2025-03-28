import BaseService from './base.service';
import { BaseResponse, LoginUserRequest, LoginUserResponse } from '@app/types';

class AuthService extends BaseService {
	async loginUser(request: LoginUserRequest): Promise<LoginUserResponse> {
		const { data } = await this.axios().post<BaseResponse<LoginUserResponse>>(
			'/api/v1/auth/login',
			request
		);
		return data.data;
	}
}

export const AuthServerService = new AuthService('SERVER');
export const AuthClientService = new AuthService('CLIENT');
