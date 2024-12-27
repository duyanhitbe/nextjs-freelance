import {
	CreateTicketGroupBody,
	ListTicketGroupParams,
	ServiceType,
	TicketGroup,
	UpdateTicketGroupBody
} from '@lib/types';
import { BaseService } from '@lib/services';

class TicketGroupService extends BaseService<
	TicketGroup,
	ListTicketGroupParams,
	CreateTicketGroupBody,
	UpdateTicketGroupBody
> {
	path = '/api/v1/ticket-groups';

	constructor(private readonly type: ServiceType) {
		super(type);
	}
}

export const TicketGroupServerService = new TicketGroupService('SERVER');
export const TicketGroupClientService = new TicketGroupService('CLIENT');
