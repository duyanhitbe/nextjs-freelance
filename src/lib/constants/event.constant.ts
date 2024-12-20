import { ENUM_EVENT_TYPE, Event, EventType, Filter } from '@lib/types';
import { createListCollection } from '@chakra-ui/react';
import { LocationClientService } from '@lib/services';

export const EVENT_FILTERS: Filter[] = [
	{
		name: 'search',
		type: 'TEXT',
		placeholder: 'Tên sự kiện'
	},
	{
		name: 'eventType',
		type: 'SELECT',
		placeholder: 'Loại sự kiện',
		collection: createListCollection({
			items: Object.values(ENUM_EVENT_TYPE).map((eventType) => ({
				label: EventType[eventType],
				value: eventType
			}))
		}),
		defaultValue: ''
	},
	{
		name: 'location',
		type: 'SELECT',
		placeholder: 'Địa điểm',
		promise: () => LocationClientService.find().then((res) => res.data),
		fieldLabel: 'name',
		fieldValue: 'name',
		defaultValue: ''
	}
];

export const EVENT_HEADERS: string[] = [
	'Tên sự kiện',
	'Loại sự kiện',
	'Giá hiển thị',
	'Địa điểm',
	'Ngày tạo',
	'Ngày cập nhật gần nhất'
];

export const EVENT_KEYS: (keyof Event)[] = [
	'name',
	'eventTypeName',
	'displayPrice',
	'location',
	'createdAt',
	'updatedAt'
];
