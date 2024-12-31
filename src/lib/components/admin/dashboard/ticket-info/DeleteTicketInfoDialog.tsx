import { Table } from '@lib/components';
import { TicketInfoClientService } from '@lib/services';

export function DeleteTicketInfoDialog() {
	const onDelete = (id: string) => {
		return TicketInfoClientService.delete(id);
	};

	return (
		<Table.DialogDelete
			successMessage='Xoá vé thành công'
			failureMessage='Xoá vé thất bại'
			onDelete={onDelete}
		/>
	);
}
