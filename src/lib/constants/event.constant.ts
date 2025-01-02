import { Event, Filter, TableField } from '@lib/types';
import { createListCollection } from '@chakra-ui/react';
import { LocationClientService } from '@lib/services';
import { ENUM_EVENT_TYPE } from '../enums';

export const EventType: Record<ENUM_EVENT_TYPE, string> = {
	[ENUM_EVENT_TYPE.EVENT]: 'Sự kiện nổi bật',
	[ENUM_EVENT_TYPE.PARK]: 'Công viên',
	[ENUM_EVENT_TYPE.VOUCHER]: 'Voucher',
	[ENUM_EVENT_TYPE.OTHER]: 'Khác'
};

export const EVENT_FILTERS: Filter[] = [
	{
		name: 'search',
		type: 'TEXT',
		placeholder: 'Tên sự kiện | Địa điểm'
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

export const EVENT_FIELDS: TableField<Event>[] = [
	{
		key: 'name',
		type: 'link',
		link: (item) => `/admin/dashboard/events?eventId=${item.id}`
	},
	{
		key: 'eventType',
		transform: (value: ENUM_EVENT_TYPE) => EventType[value]
	},
	{
		key: 'displayPrice',
		type: 'number'
	},
	{
		key: 'location'
	},
	{
		key: 'createdAt',
		type: 'date'
	},
	{
		key: 'updatedAt',
		type: 'date'
	}
];
