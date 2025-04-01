'use client';
import { AdminTable, AdminTableFilter } from '@app/components';
import {
	AdminTableColumn,
	AdminTableColumnAction,
	AdminTableColumnCreatedAt,
	AdminTableColumnStatus,
	AdminTableColumnUpdatedAt
} from '@app/components/admin/table/AdminTableColumn';
import { TableColumn } from '@app/types';
import { UserClientService } from '@app/services';

const columns: TableColumn = [
	AdminTableColumn({
		title: 'Tên tài khoản',
		key: 'username'
	}),
	AdminTableColumnCreatedAt(),
	AdminTableColumnUpdatedAt(),
	AdminTableColumnStatus(),
	AdminTableColumnAction()
];

export function UserPage() {
	return (
		<AdminTable
			columns={columns}
			findAction={UserClientService.find.bind(UserClientService)}
			findDetailAction={UserClientService.detail.bind(UserClientService)}
			createAction={UserClientService.create.bind(UserClientService)}
			updateAction={UserClientService.update.bind(UserClientService)}
			deleteAction={UserClientService.delete.bind(UserClientService)}>
			<AdminTable.Section>
				<AdminTableFilter>
					<AdminTableFilter.SearchInput
						placeholder='Tìm kiếm theo tên tài khoản'
						tooltip='Tìm kiếm theo tên tài khoản'
					/>
					<AdminTableFilter.Select
						name='user'
						placeholder='Người dùng'
						label='Người dùng'
						promise={() => UserClientService.find({})}
						valueField='id'
						labelField='username'
					/>
					<AdminTableFilter.DateRange
						name='createdAt'
						label='Ngày tạo'
					/>
				</AdminTableFilter>
			</AdminTable.Section>
			<AdminTable.Section>
				<AdminTable.CreateButton />
				<AdminTable.Table />
				<AdminTable.ModalCreate title='Tạo mới người dùng' />
				<AdminTable.ModalUpdate title='Cập nhật người dùng' />
				<AdminTable.ModalDelete title='Bạn có chắc muốn xoá dữ liệu này?' />
			</AdminTable.Section>
		</AdminTable>
	);
}
