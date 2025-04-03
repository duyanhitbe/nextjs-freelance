'use client';

import { TableColumn } from 'types/table.type';
import { TicketGroupClientService } from '@services/ticket-group.service';
import { Table } from '../../shared/table/Table';
import { TicketGroupForm } from './TicketGroupForm';
import { TICKET_GROUP_TYPES } from '@constants/ticket-group.constant';

const columns: TableColumn = [
	Table.Columns.Column({
		title: 'Tên nhóm vé',
		key: 'name'
	}),
	Table.Columns.Column({
		title: 'Tên sự kiện',
		key: 'eventName'
	}),
	Table.Columns.Enum({
		title: 'Thời gian diễn ra',
		key: 'dateType',
		data: TICKET_GROUP_TYPES
	}),
	Table.Columns.CreatedAt(),
	Table.Columns.UpdatedAt(),
	Table.Columns.Status(),
	Table.Columns.Action()
];

export function TicketGroupPage() {
	return (
		<Table
			columns={columns}
			findAction={TicketGroupClientService.find.bind(TicketGroupClientService)}
			findDetailAction={TicketGroupClientService.detail.bind(TicketGroupClientService)}
			createAction={TicketGroupClientService.create.bind(TicketGroupClientService)}
			updateAction={TicketGroupClientService.update.bind(TicketGroupClientService)}
			deleteAction={TicketGroupClientService.delete.bind(TicketGroupClientService)}>
			<Table.Section>
				<Table.Filters.Wrapper>
					<Table.Filters.Search
						placeholder='Tìm kiếm theo tên nhóm vé'
						tooltip='Tìm kiếm theo tên nhóm vé'
					/>
				</Table.Filters.Wrapper>
			</Table.Section>
			<Table.Section>
				<Table.Buttons.Create />
				<Table.List />
				<Table.Modals.Create title='Tạo mới nhóm vé'>
					<TicketGroupForm />
				</Table.Modals.Create>
				<Table.Modals.Update title='Cập nhật nhóm vé'>
					<TicketGroupForm />
				</Table.Modals.Update>
				<Table.Modals.Delete title='Bạn có chắc muốn xoá dữ liệu này?' />
			</Table.Section>
		</Table>
	);
}
