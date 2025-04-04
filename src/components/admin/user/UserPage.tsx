'use client';
import { Table } from '@components/shared/table/Table';
import { TableColumn } from 'types/table.type';
import { UserClientService } from '@services/user.service';
import { UserForm } from './UserForm';

const columns: TableColumn = [
	Table.Columns.Column({
		title: 'Tên tài khoản',
		key: 'username'
	}),
	Table.Columns.CreatedAt(),
	Table.Columns.UpdatedAt(),
	Table.Columns.Status(),
	Table.Columns.Action()
];

export function UserPage() {
	return (
		<Table
			columns={columns}
			findAction={UserClientService.find.bind(UserClientService)}
			findDetailAction={UserClientService.detail.bind(UserClientService)}
			createAction={UserClientService.create.bind(UserClientService)}
			updateAction={UserClientService.update.bind(UserClientService)}
			deleteAction={UserClientService.delete.bind(UserClientService)}>
			<Table.Section>
				<Table.Filters.Wrapper>
					<Table.Filters.Search
						placeholder='Tìm kiếm theo tên tài khoản'
						tooltip='Tìm kiếm theo tên tài khoản'
					/>
				</Table.Filters.Wrapper>
			</Table.Section>
			<Table.Section>
				<Table.Buttons.Create />
				<Table.List />
				<Table.Modals.Create title='Tạo mới người dùng'>
					<UserForm />
				</Table.Modals.Create>
				<Table.Modals.Update title='Cập nhật người dùng'>
					<UserForm update />
				</Table.Modals.Update>
				<Table.Modals.Delete title='Bạn có chắc muốn xoá dữ liệu này?' />
			</Table.Section>
		</Table>
	);
}
