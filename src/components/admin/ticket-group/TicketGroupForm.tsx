import { Table } from '../../shared/table/Table';
import { TICKET_GROUP_TYPES } from '@constants/ticket-group.constant';
import { EventClientService } from '@services/event.service';
import { useTableContext } from '../../shared/table/TableProvider';

export function TicketGroupForm() {
	const { formData } = useTableContext();

	return (
		<>
			<Table.Forms.Input
				name='name'
				placeholder='Tên nhóm vé'
				label='Tên nhóm vé'
			/>
			<Table.Forms.Select
				name='eventId'
				placeholder='Sự kiện'
				label='Sự kiện'
				promise={() => EventClientService.find({})}
				labelField='name'
				valueField='id'
				span={12}
			/>
			<Table.Forms.Select
				name='dateType'
				placeholder='Thời gian diễn ra'
				label='Thời gian diễn ra'
				data={TICKET_GROUP_TYPES}
				span={12}
			/>
			{formData['dateType'] === 'DURATION' && (
				<Table.Forms.DateRange
					label='Ngày diễn ra'
					startKey='fromDate'
					endKey='toDate'
				/>
			)}
			{formData['dateType'] === 'FIXED' && (
				<Table.Forms.DatePicker
					name='dates'
					label='Ngày diễn ra'
					placeholder='Ngày diễn ra'
					multiple
				/>
			)}
			<Table.Forms.Input
				name='description'
				label='Mô tả'
				placeholder='Mô tả'
			/>
		</>
	);
}
