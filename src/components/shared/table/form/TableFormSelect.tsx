'use client';
import { Col, Flex, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTableContext } from '../TableProvider';
import { TableFormLabel } from './TableFormLabel';

type Data = {
	value: string;
	label: string;
};

type Props = {
	name: string;
	placeholder: string;
	label: string;
	data?: Data[];
	searchable?: boolean;
	clearable?: boolean;
	multiple?: boolean;
	optionFilterProp?: 'label' | 'value';
	onChange?: (value: string | string[]) => void | Promise<void>;
	promise?: () => Promise<{ data: any[] }>;
	labelField?: string;
	valueField?: string;
	span?: number;
	required?: boolean;
};

export function TableFormSelect({
	searchable = true,
	optionFilterProp = 'label',
	data = [],
	clearable,
	name,
	placeholder,
	label,
	multiple,
	onChange,
	promise,
	labelField,
	valueField,
	span = 24,
	required
}: Props) {
	const { formData, setFormData } = useTableContext();
	const [options, setOptions] = useState<Data[]>(data || []);

	const handleChange = (value: string | string[]) => {
		setFormData((prev: any) => ({ ...prev, [name]: value }));
		if (onChange) {
			onChange(value);
		}
	};

	useEffect(() => {
		if (promise) {
			promise().then((res) => {
				const formattedResponse = res.data.map<Data>((item) => ({
					label: labelField ? item[labelField] : '',
					value: valueField ? item[valueField] : ''
				}));
				setOptions(formattedResponse);
			});
		}
	}, [promise, labelField, valueField]);

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
				<div style={{ width: '100%' }}>
					<Select
						style={{ width: '100%' }}
						value={(formData as any)[name]}
						allowClear={clearable}
						mode={multiple ? 'multiple' : undefined}
						showSearch={!!searchable}
						placeholder={placeholder}
						optionFilterProp={optionFilterProp}
						onChange={handleChange}
						options={options}
					/>
				</div>
			</Flex>
		</Col>
	);
}
