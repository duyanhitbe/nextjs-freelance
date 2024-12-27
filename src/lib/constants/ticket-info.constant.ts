import { Filter, TableField, TicketInfo } from '@lib/types';

export const TICKET_INFO_FILTERS: Filter[] = [
	{
		name: 'search',
		type: 'TEXT',
		placeholder: 'Tên vé'
	}
];

export const TICKET_INFO_HEADERS: string[] = ['Tên vé', 'Mã vé', 'Số lượng vé'];

export const TICKET_INFO_FIELDS: TableField<TicketInfo>[] = [
	{
		key: 'name'
	},
	{
		key: 'code'
	},
	{
		key: 'quantity'
	}
];
