import axios, {
	AxiosHeaders,
	CreateAxiosDefaults,
	HeadersDefaults,
	RawAxiosRequestHeaders
} from 'axios';

type Headers = RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;

class BaseService {
	constructor(private readonly type: 'SERVER' | 'CLIENT') {}

	protected axios(headers?: Headers) {
		const config: CreateAxiosDefaults = {
			headers: headers || {}
		};
		if (this.type === 'SERVER') {
			config.baseURL = process.env.API_URL;
		}
		return axios.create(config);
	}
}

export default BaseService;
