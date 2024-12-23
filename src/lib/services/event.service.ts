import { CreateEventBody, Event, ListEventParams, ServiceType, UpdateEventBody } from '@lib/types';
import { BaseService } from '@lib/services';

class EventService extends BaseService<Event, ListEventParams, CreateEventBody, UpdateEventBody> {
	path = '/api/v1/events';

	constructor(private readonly type: ServiceType) {
		super(type);
	}
}

export const EventServerService = new EventService('SERVER');
export const EventClientService = new EventService('CLIENT');
