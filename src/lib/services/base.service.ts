import { ServiceType } from '@lib/types';
import { AxiosClientService, AxiosServerService } from '@lib/services/axios.service';

export class BaseService {
	constructor(private readonly serviceType: ServiceType) {}

	protected get axios() {
		return this.serviceType === 'SERVER' ? AxiosServerService : AxiosClientService;
	}
}
