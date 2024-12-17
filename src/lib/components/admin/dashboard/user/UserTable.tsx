'use client';

import { ApiResponse, ListUserParams, User } from '@lib/types';
import { Table } from '@lib/components';
import { useState } from 'react';
import { UserClientService } from '@lib/services';
import { USER_FILTERS, USER_HEADERS, USER_KEYS } from '@lib/constants';

type Props = {
	data: ApiResponse<User[]>;
};

export function UserTable(props: Props) {
	const [data, setData] = useState(props.data);

	const onFilter = async (values: ListUserParams) => {
		const usersData = await UserClientService.find(values);
		setData(usersData);
	};

	return (
		<Table>
			<Table.Title>Tài khoản</Table.Title>
			<Table.Filter
				filters={USER_FILTERS}
				onFilterAction={onFilter}
			/>
			<Table.List>
				<Table.ListHeader title='Danh sách người dùng'>
					<Table.DialogCreate dialogTitle='Tạo mới người dùng'></Table.DialogCreate>
				</Table.ListHeader>
				<Table.Data<User>
					headers={USER_HEADERS}
					keys={USER_KEYS}
					data={data.data}
				>
					<Table.DialogUpdate title='Cập nhật người dùng'></Table.DialogUpdate>
					<Table.DialogDelete></Table.DialogDelete>
				</Table.Data>
				<Table.Pagination meta={data.meta} />
			</Table.List>
		</Table>
	);
}
