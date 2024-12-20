import { BaseEntity, FetchDataParams, Status } from '@lib/types';

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
	eventTypeName?: string;
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
	status: Status;
};

export enum ENUM_EVENT_TYPE {
	EVENT = 'EVENT',
	PARK = 'PARK',
	VOUCHER = 'VOUCHER',
	OTHER = 'OTHER'
}

export const EventType: Record<ENUM_EVENT_TYPE, string> = {
	[ENUM_EVENT_TYPE.EVENT]: 'Sự kiện nổi bật',
	[ENUM_EVENT_TYPE.PARK]: 'Công viên',
	[ENUM_EVENT_TYPE.VOUCHER]: 'Voucher',
	[ENUM_EVENT_TYPE.OTHER]: 'Khác'
};
