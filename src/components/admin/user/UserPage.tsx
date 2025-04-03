'use client';
import { Table } from '@app/components/shared/table/Table';
import { TableColumn } from '@app/types';
import { UserClientService } from '@app/services';

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
					<Table.Forms.Input
						name='username'
						placeholder='Tên tài khoản'
						label='Tên tài khoản'
					/>
					<Table.Forms.Input
						name='password'
						placeholder='Mật khẩu'
						label='Mật khẩu'
					/>
				</Table.Modals.Create>
				<Table.Modals.Update title='Cập nhật người dùng'>
					<Table.Forms.Input
						name='username'
						placeholder='Tên tài khoản'
						label='Tên tài khoản'
					/>
				</Table.Modals.Update>
				<Table.Modals.Delete title='Bạn có chắc muốn xoá dữ liệu này?' />
			</Table.Section>
		</Table>
	);
}
