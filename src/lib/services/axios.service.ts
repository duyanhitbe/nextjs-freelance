import axios from 'axios';

class AxiosService {
	constructor(private readonly type: 'SERVER' | 'CLIENT') {}

	private get instance() {
		const baseURL = this.type === 'SERVER' ? process.env.BACKEND_URL : process.env.FRONTEND_URL;

		return axios.create({ baseURL });
	}

	async get<T>(path: string, params?: any): Promise<T> {
		try {
			const { data } = await this.instance.get<T>(path, {
				params
			});
			return data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export const AxiosClientService = new AxiosService('CLIENT');
export const AxiosServerService = new AxiosService('SERVER');
