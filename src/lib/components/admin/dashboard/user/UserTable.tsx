'use client';

import { Table } from '@lib/components';
import { CreateUserDialog } from '@lib/components/admin/dashboard/user/CreateUserDialog';
import { DeleteUserDialog } from '@lib/components/admin/dashboard/user/DeleteUserDialog';
import { UpdateUserDialog } from '@lib/components/admin/dashboard/user/UpdateUserDialog';
import { USER_FIELDS, USER_FILTERS, USER_HEADERS } from '@lib/constants';
import { ENUM_STATUS } from '@lib/enums';
import { UserClientService } from '@lib/services';
import { ApiResponse, User } from '@lib/types';

type Props = {
	initialData: ApiResponse<User[]>;
};

export function UserTable({ initialData }: Props) {
	const onUpdateStatus = (id: string, status: ENUM_STATUS) => {
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
					fields={USER_FIELDS}
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
