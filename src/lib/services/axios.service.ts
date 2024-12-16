import axios from 'axios';
import { ServiceType } from '@lib/types';
import qs from 'qs';

class AxiosService {
	constructor(private readonly type: ServiceType) {}

	private get instance() {
		const baseURL = this.type === 'SERVER' ? process.env.BACKEND_URL : process.env.FRONTEND_URL;

		return axios.create({ baseURL });
	}

	async get<T>(path: string, params?: any): Promise<T> {
		if (params && typeof params !== 'string') {
			params = qs.stringify(params);
		}
		try {
			const { data } = await this.instance.get<T>(`${path}?${params}`);
			return data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export const AxiosClientService = new AxiosService('CLIENT');
export const AxiosServerService = new AxiosService('SERVER');
