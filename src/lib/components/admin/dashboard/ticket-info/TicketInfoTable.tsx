'use client';

import { BackButton, Table } from '@lib/components';
import { TICKET_INFO_FIELDS, TICKET_INFO_FILTERS, TICKET_INFO_HEADERS } from '@lib/constants';
import { ENUM_STATUS } from '@lib/enums';
import { TicketInfoClientService } from '@lib/services';
import { ApiResponse, TicketInfo } from '@lib/types';

type Props = {
	initialData: ApiResponse<TicketInfo[]>;
	ticketGroupId: string;
};

export function TicketInfoTable({ initialData, ticketGroupId }: Props) {
	const onUpdateStatus = (id: string, status: ENUM_STATUS) => {
		return TicketInfoClientService.updateById(id, { status });
	};

	return (
		<Table<TicketInfo>
			initialData={initialData}
			fetchData={(params) => TicketInfoClientService.find({ ...params, ticketGroupId })}
			fetchDetail={(id) => TicketInfoClientService.findById(id)}
		>
			<BackButton />
			<Table.Title>Thông tin vé</Table.Title>
			<Table.Filter filters={TICKET_INFO_FILTERS} />
			<Table.List>
				<Table.ListHeader title='Danh sách vé'></Table.ListHeader>
				<Table.ListData
					headers={TICKET_INFO_HEADERS}
					fields={TICKET_INFO_FIELDS}
					onUpdateStatus={onUpdateStatus}
				></Table.ListData>
				<Table.Pagination />
			</Table.List>
		</Table>
	);
}
