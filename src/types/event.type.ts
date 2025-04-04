import { BaseFilter } from './base.type';

export type Event = {
	id: string;
	createdAt: string;
	updatedAt: string;
	status: string;
	name: string;
};

export type FilterEvent = BaseFilter & {};
