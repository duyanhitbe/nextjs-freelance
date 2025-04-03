'use client';

import { TableColumn } from 'types/table.type';
import { EventClientService } from '@services/event.service';
import { Table } from '../../shared/table/Table';
import { EventForm } from './EventForm';
import { EVENT_TYPES } from '@constants/event.constant';

const columns: TableColumn = [
	Table.Columns.Column({
		title: 'Thứ tự hiển thị',
		key: 'order'
	}),
	Table.Columns.Preview({
		title: 'Thumbnail',
		key: 'thumbnail'
	}),
	Table.Columns.Column({
		title: 'Tên sự kiện',
		key: 'name'
	}),
	Table.Columns.Enum({
		title: 'Loại sự kiện',
		key: 'eventType',
		data: EVENT_TYPES
	}),
	Table.Columns.Column({
		title: 'Địa điểm',
		key: 'location'
	}),
	Table.Columns.Column({
		title: 'Giá hiển thị',
		key: 'displayPrice',
		currency: true
	}),

	Table.Columns.CreatedAt(),
	Table.Columns.UpdatedAt(),
	Table.Columns.Switch({
		title: 'Làm banner',
		key: 'isBanner'
	}),
	Table.Columns.Status(),
	Table.Columns.Action()
];

export function EventPage() {
	return (
		<Table
			columns={columns}
			findAction={EventClientService.find.bind(EventClientService)}
			findDetailAction={EventClientService.detail.bind(EventClientService)}
			createAction={EventClientService.create.bind(EventClientService)}
			updateAction={EventClientService.update.bind(EventClientService)}
			deleteAction={EventClientService.delete.bind(EventClientService)}>
			<Table.Section>
				<Table.Filters.Wrapper>
					<Table.Filters.Search
						placeholder='Tìm kiếm theo tên sự kiện'
						tooltip='Tìm kiếm theo tên sự kiện'
					/>
				</Table.Filters.Wrapper>
			</Table.Section>
			<Table.Section>
				<Table.Buttons.Create />
				<Table.List />
				<Table.Modals.Create title='Tạo mới sự kiện'>
					<EventForm />
				</Table.Modals.Create>
				<Table.Modals.Update title='Cập nhật sự kiện'>
					<EventForm />
				</Table.Modals.Update>
				<Table.Modals.Delete title='Bạn có chắc muốn xoá dữ liệu này?' />
			</Table.Section>
		</Table>
	);
}
