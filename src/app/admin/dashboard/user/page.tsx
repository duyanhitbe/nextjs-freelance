import { FloatInput, Table } from '@lib/components';
import UserService from '@lib/services/user.service';

export default async function Page() {
	const { data: users, meta } = await UserService.find();

	return (
		<Table>
			<Table.Title>Home</Table.Title>
			<Table.Filter>
				<FloatInput>Tên tài khoản</FloatInput>
			</Table.Filter>
			<Table.List title='Danh sách người dùng'>
				<Table.Data headers={['Tên tài khoản', 'Ngày tạo', 'Ngày cập nhật gần nhất']}>
					{users.map((user) => (
						<Table.Row>
							<Table.Cell>{user.username}</Table.Cell>
							<Table.Cell>{user.createdAt}</Table.Cell>
							<Table.Cell>{user.updatedAt}</Table.Cell>
						</Table.Row>
					))}
				</Table.Data>
				<Table.Pagination meta={meta} />
			</Table.List>
			<Table.Dialog title='Create user'></Table.Dialog>
		</Table>
	);
}
