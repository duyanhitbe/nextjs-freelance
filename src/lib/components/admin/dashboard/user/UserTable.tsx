'use client';

import { ApiResponse, User } from '@lib/types';
import { FloatInput, Table } from '@lib/components';
import { useState } from 'react';
import { useListUser } from '@lib/hooks';

type Props = {
	data: ApiResponse<User[]>;
};

export function UserTable(props: Props) {
	const [data, setData] = useState(props.data);
	const [username, setUsername] = useState('');

	const { refetch } = useListUser({ username });

	const onFilter = async () => {
		const result = await refetch();
		if (result.data) {
			setData(result.data);
		}
	};

	const onClear = () => {
		setUsername('');
	};

	return (
		<Table>
			<Table.Title>Home</Table.Title>
			<Table.Filter
				onFilter={onFilter}
				onClear={onClear}
			>
				<FloatInput
					value={username}
					onChange={(value) => setUsername(value)}
				>
					Tên tài khoản
				</FloatInput>
			</Table.Filter>
			<Table.List title='Danh sách người dùng'>
				<Table.Data headers={['Tên tài khoản', 'Ngày tạo', 'Ngày cập nhật gần nhất']}>
					{data.data.map((user) => (
						<Table.Row key={user.id}>
							<Table.Cell>{user.username}</Table.Cell>
							<Table.Cell>{user.createdAt}</Table.Cell>
							<Table.Cell>{user.updatedAt}</Table.Cell>
						</Table.Row>
					))}
				</Table.Data>
				<Table.Pagination meta={data.meta} />
			</Table.List>
			<Table.Dialog title='Create user'></Table.Dialog>
		</Table>
	);
}
