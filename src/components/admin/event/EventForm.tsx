import { Table } from '../../shared/table/Table';
import { EVENT_TYPES } from '../../../constants';
import { LocationClientService } from '../../../services';

export function EventForm() {
	return (
		<>
			<Table.Forms.Upload
				name='thumbnail'
				label='Thumbnail sự kiện'
				center
			/>
			<Table.Forms.Input
				name='name'
				placeholder='Tên sự kiện'
				label='Tên sự kiện'
			/>
			<Table.Forms.Select
				name='eventType'
				placeholder='Loại sự kiện'
				label='Loại sự kiện'
				data={EVENT_TYPES}
				span={12}
			/>
			<Table.Forms.Select
				name='location'
				placeholder='Địa điểm'
				label='Địa điểm'
				promise={() => LocationClientService.find()}
				valueField='name'
				labelField='name'
				span={12}
			/>
			<Table.Forms.InputNumber
				name='displayPrice'
				label='Giá hiển thị'
				placeholder='Giá hiển thị'
				span={12}
				currency
			/>
			<Table.Forms.InputNumber
				name='order'
				label='Thứ tự hiển thị'
				span={12}
				placeholder='Thứ tự hiển thị'
			/>
			<Table.Forms.Upload
				name='images'
				label='Hình ảnh sự kiện'
				multiple
			/>
			<Table.Forms.Editor
				name='description'
				label='Nội dung'
			/>
			<Table.Forms.Rate
				name='ratingStar'
				label='Đánh giá'
				center
			/>
		</>
	);
}
