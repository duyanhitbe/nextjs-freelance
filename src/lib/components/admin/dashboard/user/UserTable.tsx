'use client';

import { ApiResponse, ListUserParams, User } from '@lib/types';
import { Table } from '@lib/components';
import { useState } from 'react';
import { UserClientService } from '@lib/services';
import { USER_FILTERS } from '@lib/constants';

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
			<Table.Title>Home</Table.Title>
			<Table.Filter
				filters={USER_FILTERS}
				onFilterAction={onFilter}
			/>
			<Table.List title='Danh sách người dùng'>
				<Table.Data<User>
					headers={['Tên tài khoản', 'Ngày tạo', 'Ngày cập nhật gần nhất']}
					keys={['username', 'createdAt', 'updatedAt']}
					data={data.data}
				/>
				<Table.Pagination meta={data.meta} />
			</Table.List>
			<Table.Dialog title='Create user'></Table.Dialog>
		</Table>
	);
}
