import {
	ApiResponse,
	CreateEventBody,
	Event,
	ListEventParams,
	ServiceType,
	UpdateEventBody
} from '@lib/types';
import { BaseService } from '@lib/services';

class EventService extends BaseService {
	constructor(private readonly type: ServiceType) {
		super(type);
	}

	async create(body: CreateEventBody): Promise<ApiResponse<Event>> {
		return this.axios.post<ApiResponse<Event>>('/api/v1/events', body);
	}

	async find(params?: ListEventParams | string): Promise<ApiResponse<Event[]>> {
		return this.axios.get<ApiResponse<Event[]>>('/api/v1/events', params);
	}

	async findById(id: string): Promise<ApiResponse<Event>> {
		return this.axios.get<ApiResponse<Event>>(`/api/v1/events/${id}`);
	}

	async updateById(id: string, body: UpdateEventBody): Promise<ApiResponse<Event>> {
		return this.axios.patch<ApiResponse<Event>>(`/api/v1/events/${id}`, body);
	}
}

export const EventServerService = new EventService('SERVER');
export const EventClientService = new EventService('CLIENT');
