import BaseService from './base.service';
import { BasePaginatedResponse } from 'types/base.type';
import { Location } from 'types/location.type';
import { API_PATH } from '@constants/api.constant';

class LocationService extends BaseService {
	async find(): Promise<BasePaginatedResponse<Location>> {
		const axios = this.axios({
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODYwOTM2NC0xYjliLTQzYWYtOTgwNy0yMDg4ODU0YWQ3MGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MzY2NzE5MiwiZXhwIjoxNzQzNzUzNTkyfQ.CK71f6K7KJvSGrkUG9YdQRVjv3yqxqO9BiudIjnKmzY'
		});
		const { data } = await axios.get<BasePaginatedResponse<Location>>(API_PATH.LOCATION.FIND);
		return data;
	}
}

export const LocationServerService = new LocationService('SERVER');
export const LocationClientService = new LocationService('CLIENT');
