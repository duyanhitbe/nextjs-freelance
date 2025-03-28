'use client';
import { AdminFilter, AdminTable } from '@app/components';
import { BasePaginatedResponse, TableColumn, User } from '@app/types';
import { Button, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';

const columns: TableColumn = [
	{
		title: 'Tên tài khoản',
		dataIndex: 'username',
		key: 'username'
	},
	{
		title: 'Ngày tạo',
		dataIndex: 'createdAt',
		key: 'createdAt',
		render: (_, { createdAt }) => moment(createdAt).format('DD-MM-YYYY')
	},
	{
		title: 'Ngày cập nhật',
		dataIndex: 'updatedAt',
		key: 'updatedAt',
		render: (_, { updatedAt }) => moment(updatedAt).format('DD-MM-YYYY')
	},
	{
		title: '',
		key: 'action',
		render: () => (
			<Space size='small'>
				<Button
					icon={<EditOutlined />}
					variant='outlined'
					color='primary'
				/>
				<AdminTable.DeleteButton />
			</Space>
		)
	}
];

type Props = {
	users: BasePaginatedResponse<User>;
};

export function UserTable({ users }: Props) {
	return (
		<Space
			direction='vertical'
			style={{ width: '100%', minHeight: '100' }}
			size='large'>
			<AdminFilter>
				<AdminFilter.Search
					placeholder='Tìm kiếm theo tên tài khoản'
					tooltip='Tìm kiếm theo tên tài khoản'
				/>
			</AdminFilter>
			<AdminTable>
				<AdminTable.CreateButton />
				<AdminTable.Table
					data={users}
					columns={columns}
				/>
				<AdminTable.ModalDelete loading={false} />
			</AdminTable>
		</Space>
	);
}
