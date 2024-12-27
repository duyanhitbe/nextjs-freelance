import { ENUM_STATUS } from '@lib/enums';
import { BaseEntity, FetchDataParams } from '@lib/types';

export type TicketInfo = BaseEntity & {
	name: string;
	quantity: number;
	code: string;
	order: number;
	eventName: string;
	ticketGroupName: string;
};

export type ListTicketInfoParams = FetchDataParams & {
	ticketGroupId?: string;
};

export type CreateTicketInfoBody = {};

export type UpdateTicketInfoBody = {
	status: ENUM_STATUS;
};
