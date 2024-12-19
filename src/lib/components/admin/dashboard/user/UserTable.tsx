'use client';

import { ApiResponse, User } from '@lib/types';
import { Table } from '@lib/components';
import { UserClientService } from '@lib/services';
import { USER_FILTERS, USER_HEADERS, USER_KEYS } from '@lib/constants';
import { CreateUserDialog } from '@lib/components/admin/dashboard/user/CreateUserDialog';
import { DeleteUserDialog } from '@lib/components/admin/dashboard/user/DeleteUserDialog';

type Props = {
	data: ApiResponse<User[]>;
};

export function UserTable({ data }: Props) {
	return (
		<Table<User>
			initialData={data}
			fetchData={(params) => UserClientService.find(params)}
		>
			<Table.Title>Tài khoản</Table.Title>
			<Table.Filter filters={USER_FILTERS} />
			<Table.List>
				<Table.ListHeader title='Danh sách người dùng'>
					<CreateUserDialog />
				</Table.ListHeader>
				<Table.ListData
					headers={USER_HEADERS}
					keys={USER_KEYS}
				>
					<Table.DialogUpdate title='Cập nhật người dùng'></Table.DialogUpdate>
					<DeleteUserDialog />
				</Table.ListData>
				<Table.Pagination />
			</Table.List>
		</Table>
	);
}
