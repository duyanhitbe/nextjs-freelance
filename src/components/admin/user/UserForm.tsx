import { Table } from '../../shared/table/Table';

type Props = {
	update?: boolean;
};

export function UserForm({ update }: Props) {
	return (
		<>
			<Table.Forms.Input
				name='username'
				placeholder='Tên tài khoản'
				label='Tên tài khoản'
			/>
			{!update && (
				<Table.Forms.Input
					name='password'
					placeholder='Mật khẩu'
					label='Mật khẩu'
				/>
			)}
		</>
	);
}
