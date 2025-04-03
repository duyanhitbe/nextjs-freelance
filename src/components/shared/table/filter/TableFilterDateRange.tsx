import { Col, DatePicker, Typography } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import { useTableContext } from '../TableProvider';

type Props = {
	label: string;
	name: string;
	clearable?: boolean;
};

export function TableFilterDateRange({ label, name, clearable }: Props) {
	const { filter, setFilter } = useTableContext();
	const startKey = name + 'From';
	const endKey = name + 'To';
	const start = (filter as any)[startKey];
	const end = (filter as any)[endKey];

	const handleChange = (_: any, dates: any) => {
		setFilter((prev) => ({ ...prev, [startKey]: dates[0], [endKey]: dates[1] }));
	};

	return (
		<Col span={6}>
			<Typography.Text>{label}</Typography.Text>
			<DatePicker.RangePicker
				allowClear={clearable}
				onChange={handleChange}
				value={start && end ? [dayjs(start), dayjs(end)] : undefined}
				placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
			/>
		</Col>
	);
}
