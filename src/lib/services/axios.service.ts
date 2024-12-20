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
		if (!params) params = '';
		try {
			const { data } = await this.instance.get<T>(`${path}?${params}`);
			return data;
		} catch (error: any) {
			console.log(error.response?.data);
			throw error;
		}
	}

	async post<T>(path: string, body: any, headers?: any): Promise<T> {
		try {
			const { data } = await this.instance.post<T>(path, body, {
				headers
			});
			return data;
		} catch (error: any) {
			console.log(error.response?.data);
			throw error;
		}
	}

	async patch<T>(path: string, body: any): Promise<T> {
		try {
			const { data } = await this.instance.patch<T>(path, body);
			return data;
		} catch (error: any) {
			console.log(error.response?.data);
			throw error;
		}
	}

	async put<T>(path: string, body: any): Promise<T> {
		try {
			const { data } = await this.instance.put<T>(path, body);
			return data;
		} catch (error: any) {
			console.log(error.response?.data);
			throw error;
		}
	}

	async delete<T>(path: string): Promise<T> {
		try {
			const { data } = await this.instance.delete<T>(path);
			return data;
		} catch (error: any) {
			console.log(error.response?.data);
			throw error;
		}
	}
}

export const AxiosClientService = new AxiosService('CLIENT');
export const AxiosServerService = new AxiosService('SERVER');
