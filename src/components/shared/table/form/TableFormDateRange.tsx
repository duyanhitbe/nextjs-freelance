import { Col, DatePicker, Flex } from 'antd';
import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { useTableContext } from '../TableProvider';
import { TableFormLabel } from './TableFormLabel';

type Props = {
	label: string;
	clearable?: boolean;
	startKey: string;
	endKey: string;
	span?: number;
	required?: boolean;
	min?: string;
	max?: string;
};

export function TableFormDateRange({
	label,
	clearable,
	startKey,
	endKey,
	span = 24,
	required,
	min,
	max
}: Props) {
	const { formData, setFormData } = useTableContext();
	const start = (formData as any)[startKey];
	const end = (formData as any)[endKey];

	const handleChange = (_: any, dates: any) => {
		setFormData((prev: any) => ({ ...prev, [startKey]: dates[0], [endKey]: dates[1] }));
	};

	const minDate = useMemo(() => (min ? dayjs(min) : undefined), [min]);
	const maxDate = useMemo(() => (max ? dayjs(max) : undefined), [max]);
	const value = useMemo<any>(
		() => (start && end ? [dayjs(start), dayjs(end)] : undefined),
		[start, end]
	);

	return (
		<Col
			span={span}
			style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
			<Flex
				vertical
				gap={5}>
				<TableFormLabel
					label={label}
					required={required}
				/>
				<DatePicker.RangePicker
					allowClear={clearable}
					onChange={handleChange}
					value={value}
					placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
					minDate={minDate}
					maxDate={maxDate}
				/>
			</Flex>
		</Col>
	);
}
