'use client';

import { BackButton, Table } from '@lib/components';
import { TICKET_GROUP_FIELDS, TICKET_GROUP_FILTERS, TICKET_GROUP_HEADERS } from '@lib/constants';
import { ENUM_STATUS } from '@lib/enums';
import { TicketGroupClientService } from '@lib/services';
import { ApiResponse, TicketGroup } from '@lib/types';
import { CreateTicketGroupDialog } from './CreateTicketGroupDialog';

type Props = {
	initialData: ApiResponse<TicketGroup[]>;
	eventId: string;
};

export function TicketGroupTable({ initialData, eventId }: Props) {
	const onUpdateStatus = (id: string, status: ENUM_STATUS) => {
		return TicketGroupClientService.updateById(id, { status });
	};

	return (
		<>
			<Table<TicketGroup>
				initialData={initialData}
				fetchData={(params) => TicketGroupClientService.find({ ...params, eventId })}
				fetchDetail={(id) => TicketGroupClientService.findById(id)}
			>
				<BackButton />
				<Table.Title>Nhóm vé</Table.Title>
				<Table.Filter filters={TICKET_GROUP_FILTERS} />
				<Table.List>
					<Table.ListHeader title='Danh sách nhóm vé'>
						<CreateTicketGroupDialog eventId={eventId} />
					</Table.ListHeader>
					<Table.ListData
						headers={TICKET_GROUP_HEADERS}
						fields={TICKET_GROUP_FIELDS}
						onUpdateStatus={onUpdateStatus}
					></Table.ListData>
					<Table.Pagination />
				</Table.List>
			</Table>
		</>
	);
}
