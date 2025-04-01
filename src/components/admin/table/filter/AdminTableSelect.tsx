'use client';
import { Col, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAdminTableContext } from '@app/components';

type Data = {
	value: string;
	label: string;
};

type AdminTableSelectProps = {
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
};

export function AdminTableSelect({
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
	valueField
}: AdminTableSelectProps) {
	const { filter, setFilter } = useAdminTableContext();
	const [options, setOptions] = useState<Data[]>(data || []);

	const handleChange = (value: string | string[]) => {
		setFilter((prev) => ({ ...prev, [name]: value }));
		if (onChange) {
			onChange(value);
		}
	};

	const handleSearch = (value: string | string[]) => {
		console.log('search:', value);
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
		<Col span={6}>
			<Typography.Text>{label}</Typography.Text>
			<div style={{ width: '100%' }}>
				<Select
					style={{ width: '100%' }}
					value={(filter as any)[name]}
					allowClear={clearable}
					mode={multiple ? 'multiple' : undefined}
					showSearch={!!searchable}
					placeholder={placeholder}
					optionFilterProp={optionFilterProp}
					onChange={handleChange}
					onSearch={handleSearch}
					options={options}
				/>
			</div>
		</Col>
	);
}
