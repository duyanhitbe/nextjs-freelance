import {
	CreateTicketInfoBody,
	ListTicketInfoParams,
	ServiceType,
	TicketInfo,
	UpdateTicketInfoBody
} from '@lib/types';
import { BaseService } from '@lib/services';

class TicketInfoService extends BaseService<
	TicketInfo,
	ListTicketInfoParams,
	CreateTicketInfoBody,
	UpdateTicketInfoBody
> {
	path = '/api/v1/ticket-infos';

	constructor(private readonly type: ServiceType) {
		super(type);
	}
}

export const TicketInfoServerService = new TicketInfoService('SERVER');
export const TicketInfoClientService = new TicketInfoService('CLIENT');
