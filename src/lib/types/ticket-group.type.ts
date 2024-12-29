import { BaseEntity, FetchDataParams } from '@lib/types';
import { ENUM_DATE_TYPE, ENUM_STATUS } from '../enums';

export type TicketGroup = BaseEntity & {
	eventId: string;
	name: string;
	description: string;
	dateType: ENUM_DATE_TYPE;
	fromDate?: string;
	toDate?: string;
	dates?: string[];
	eventName: string;
};

export type ListTicketGroupParams = FetchDataParams & {
	eventId?: string;
};

export type CreateTicketGroupBody = {};

export type UpdateTicketGroupBody = {
	status: ENUM_STATUS;
	dates?: string[];
};
