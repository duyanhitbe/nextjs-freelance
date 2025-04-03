import { Col, DatePicker, Flex } from 'antd';
import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { useTableContext } from '../TableProvider';
import { TableFormLabel } from './TableFormLabel';

type Props = {
	label: string;
	clearable?: boolean;
	placeholder: string;
	name: string;
	span?: number;
	required?: boolean;
	min?: string;
	max?: string;
	multiple?: boolean;
};

export function TableFormDatePicker({
	label,
	clearable,
	name,
	placeholder,
	span = 24,
	required,
	min,
	max,
	multiple
}: Props) {
	const { formData, setFormData } = useTableContext();

	const handleChange = (_: any, dates: any) => {
		setFormData((prev: any) => ({ ...prev, [name]: dates }));
	};

	const minDate = useMemo(() => (min ? dayjs(min) : undefined), [min]);
	const maxDate = useMemo(() => (max ? dayjs(max) : undefined), [max]);
	const value = useMemo(() => {
		if (multiple) {
			return formData[name] ? formData[name].map((item: any) => dayjs(item)) : undefined;
		}

		return formData[name] ? dayjs(formData[name]) : undefined;
	}, [formData, name, multiple]);

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
				<DatePicker
					multiple={multiple}
					allowClear={clearable}
					onChange={handleChange}
					value={value}
					placeholder={placeholder}
					minDate={minDate}
					maxDate={maxDate}
				/>
			</Flex>
		</Col>
	);
}
