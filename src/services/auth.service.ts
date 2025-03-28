import BaseService from './base.service';
import { BaseResponse, LoginUserRequest, LoginUserResponse } from '@app/types';
import { API_PATH } from '@app/constants';

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
