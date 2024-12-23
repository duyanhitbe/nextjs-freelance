import { Table } from '@lib/components';
import { EventClientService } from '@lib/services';

export function DeleteEventDialog() {
	const onDelete = (id: string) => {
		return EventClientService.delete(id);
	};

	return (
		<Table.DialogDelete
			successMessage='Xoá sự kiện thành công'
			failureMessage='Xoá sự kiện thất bại'
			onDelete={onDelete}
		/>
	);
}
