import { Table } from '@lib/components';
import { UserClientService } from '@lib/services';

export function DeleteUserDialog() {
	const onDelete = (id: string) => {
		return UserClientService.delete(id);
	};

	return (
		<Table.DialogDelete
			onDelete={onDelete}
			successMessage='Xoá người dùng thành công'
			failureMessage='Xoá người dùng thất bại'
		/>
	);
}