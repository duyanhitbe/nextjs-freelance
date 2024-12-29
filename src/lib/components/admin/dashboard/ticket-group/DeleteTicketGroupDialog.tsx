import { Table } from '@lib/components';
import { TicketGroupClientService } from '@lib/services';

export function DeleteTicketGroupDialog() {
	const onDelete = (id: string) => {
		return TicketGroupClientService.delete(id);
	};

	return (
		<Table.DialogDelete
			successMessage='Xoá nhóm vé thành công'
			failureMessage='Xoá nhóm vé thất bại'
			onDelete={onDelete}
		/>
	);
}
