'use client';

import { ApiResponse, Event } from '@lib/types';
import { EventClientService } from '@lib/services';
import { Table } from '@lib/components';
import { EVENT_FILTERS, EVENT_HEADERS, EVENT_KEYS } from '@lib/constants';
import { CreateEventDialog } from '@lib/components/admin/dashboard/event/CreateEventDialog';
import { DeleteEventDialog } from './DeleteEventDialog';
import { UpdateEventDialog } from './UpdateEventDialog';

type Props = {
	initialData: ApiResponse<Event[]>;
};

export function EventTable({ initialData }: Props) {
	const onUpdateStatus = (id: string, status: 'ACTIVE' | 'INACTIVE') => {
		return EventClientService.updateById(id, { status });
	};

	return (
		<Table<Event>
			initialData={initialData}
			fetchData={(params) => EventClientService.find(params)}
			fetchDetail={(id) => EventClientService.findById(id)}
		>
			<Table.Title>Sự kiện</Table.Title>
			<Table.Filter filters={EVENT_FILTERS} />
			<Table.List>
				<Table.ListHeader title='Danh sách sự kiện'>
					<CreateEventDialog />
				</Table.ListHeader>
				<Table.ListData
					headers={EVENT_HEADERS}
					keys={EVENT_KEYS}
					onUpdateStatus={onUpdateStatus}
				>
					<UpdateEventDialog />
					<DeleteEventDialog />
				</Table.ListData>
				<Table.Pagination />
			</Table.List>
		</Table>
	);
}
