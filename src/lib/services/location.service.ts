import { ApiResponse, Location, ServiceType } from '@lib/types';
import { BaseService } from '@lib/services';

class LocationService extends BaseService {
	constructor(private readonly type: ServiceType) {
		super(type);
	}

	async find(): Promise<ApiResponse<Location[]>> {
		return this.axios.get<ApiResponse<Location[]>>('/api/v1/locations');
	}
}

export const LocationServerService = new LocationService('SERVER');
export const LocationClientService = new LocationService('CLIENT');
