import { ENUM_EVENT_TYPE, ENUM_STATUS } from '@lib/enums';
import { BaseEntity, FetchDataParams } from '@lib/types';

export type Event = BaseEntity & {
	name: string;
	eventType: ENUM_EVENT_TYPE;
	image: string;
	thumbnail: string;
	description?: string;
	ratingStar: number;
	displayPrice: number;
	isBanner: boolean;
	order: number;
	location?: string;
};

export type ListEventParams = FetchDataParams & {};

export type CreateEventBody = {
	name: string;
	eventType: ENUM_EVENT_TYPE;
	image: string;
	thumbnail: string;
	description?: string;
	displayPrice: number;
	isBanner: boolean;
	order: number;
	location?: string;
};

export type UpdateEventBody = {
	status: ENUM_STATUS;
};
