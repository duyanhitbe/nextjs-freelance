'use client';

import { ApiResponse, ListUserParams, User } from '@lib/types';
import { Table } from '@lib/components';
import { UserClientService } from '@lib/services';
import { USER_FILTERS, USER_HEADERS, USER_KEYS } from '@lib/constants';
import { CreateUserDialog } from '@lib/components/admin/dashboard/user/CreateUserDialog';

type Props = {
	data: ApiResponse<User[]>;
};

export function UserTable({ data }: Props) {
	const onFilter = async (values: ListUserParams) => {
		return UserClientService.find(values);
	};

	return (
		<Table<User> data={data}>
			<Table.Title>Tài khoản</Table.Title>
			<Table.Filter
				filters={USER_FILTERS}
				onFilterAction={onFilter}
			/>
			<Table.List>
				<Table.ListHeader title='Danh sách người dùng'>
					<CreateUserDialog />
				</Table.ListHeader>
				<Table.ListData
					headers={USER_HEADERS}
					keys={USER_KEYS}
				>
					<Table.DialogUpdate title='Cập nhật người dùng'></Table.DialogUpdate>
					<Table.DialogDelete></Table.DialogDelete>
				</Table.ListData>
				<Table.Pagination />
			</Table.List>
		</Table>
	);
}
