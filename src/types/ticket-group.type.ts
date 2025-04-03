import { BaseFilter } from './base.type';

export type TicketGroup = {
	id: string;
	createdAt: string;
	updatedAt: string;
	status: string;
};

export type FilterTicketGroup = BaseFilter & {};
