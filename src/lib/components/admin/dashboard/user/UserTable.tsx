'use client';

import { ApiResponse, Status, User } from '@lib/types';
import { Table } from '@lib/components';
import { UserClientService } from '@lib/services';
import { USER_FILTERS, USER_HEADERS, USER_KEYS } from '@lib/constants';
import { CreateUserDialog } from '@lib/components/admin/dashboard/user/CreateUserDialog';
import { DeleteUserDialog } from '@lib/components/admin/dashboard/user/DeleteUserDialog';
import { UpdateUserDialog } from '@lib/components/admin/dashboard/user/UpdateUserDialog';

type Props = {
	initialData: ApiResponse<User[]>;
};

export function UserTable({ initialData }: Props) {
	const onUpdateStatus = (id: string, status: Status) => {
		return UserClientService.updateById(id, { status });
	};

	return (
		<Table<User>
			initialData={initialData}
			fetchData={(params) => UserClientService.find(params)}
			fetchDetail={(id) => UserClientService.findById(id)}
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
					onUpdateStatus={onUpdateStatus}
				>
					<UpdateUserDialog />
					<DeleteUserDialog />
				</Table.ListData>
				<Table.Pagination />
			</Table.List>
		</Table>
	);
}
