import BaseService from './base.service';
import { BaseResponse } from 'types/base.type';
import { LoginUserRequest, LoginUserResponse } from 'types/auth.type';
import { API_PATH } from '@constants/api.constant';

class AuthService extends BaseService {
	async loginUser(request: LoginUserRequest): Promise<LoginUserResponse> {
		const { data } = await this.axios().post<BaseResponse<LoginUserResponse>>(
			API_PATH.AUTH.LOGIN_USER,
			request
		);
		return data.data;
	}
}

export const AuthServerService = new AuthService('SERVER');
export const AuthClientService = new AuthService('CLIENT');
