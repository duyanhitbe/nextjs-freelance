import { Filter, TableField, TicketGroup } from '@lib/types';
import { ENUM_DATE_TYPE } from '../enums';
import moment from 'moment';

export const DateType: Record<ENUM_DATE_TYPE, string> = {
	[ENUM_DATE_TYPE.DURATION]: 'Khoảng thời gian',
	[ENUM_DATE_TYPE.FIXED]: 'Thời gian cố định'
};

export const TICKET_GROUP_FILTERS: Filter[] = [
	{
		name: 'search',
		type: 'TEXT',
		placeholder: 'Tên nhóm vé'
	}
];

export const TICKET_GROUP_HEADERS: string[] = [
	'Tên nhóm vé',
	'Tên sự kiện',
	'Loại ngày diễn ra sự kiện',
	'Ngày bắt đầu',
	'Ngày kết thúc',
	'Ngày tạo',
	'Ngày cập nhật gần nhất'
];

export const TICKET_GROUP_FIELDS: TableField<TicketGroup>[] = [
	{
		key: 'name',
		type: 'link',
		link: (item) => `/admin/dashboard/events?eventId=${item.eventId}&ticketGroupId=${item.id}`
	},
	{
		key: 'eventName'
	},
	{
		key: 'dateType',
		transform: (value: ENUM_DATE_TYPE) => DateType[value]
	},
	{
		key: 'fromDate',
		transform: (_, obj: TicketGroup) => {
			switch (obj.dateType) {
				case ENUM_DATE_TYPE.DURATION:
					return moment(obj.fromDate).format('DD-MM-YYYY');
				case ENUM_DATE_TYPE.FIXED:
					return moment(obj.dates?.[0]).format('DD-MM-YYYY');
			}
		}
	},
	{
		key: 'toDate',
		transform: (_, obj: TicketGroup) => {
			switch (obj.dateType) {
				case ENUM_DATE_TYPE.DURATION:
					return moment(obj.toDate).format('DD-MM-YYYY');
				case ENUM_DATE_TYPE.FIXED:
					return moment(obj.dates?.[obj.dates?.length - 1]).format('DD-MM-YYYY');
			}
		}
	},
	{ key: 'createdAt', type: 'date' },
	{ key: 'updatedAt', type: 'date' }
];
