import { Col, Flex, InputNumber } from 'antd';
import React from 'react';
import { useTableContext } from '../TableProvider';
import { TableFormLabel } from './TableFormLabel';
import { toVndCurrency } from '@helpers/regex.helper';

type Props = {
	name: string;
	placeholder: string;
	label: string;
	span?: number;
	required?: boolean;
	currency?: boolean;
};

export function TableFormInputNumber({
	name,
	placeholder,
	label,
	span = 24,
	required,
	currency
}: Props) {
	const { formData, setFormData } = useTableContext();

	const handleChange = (value: number | null) => {
		setFormData((prev: any) => ({ ...prev, [name]: value }));
	};

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
				<InputNumber<number>
					style={{ width: '100%' }}
					placeholder={placeholder}
					value={formData[name]}
					formatter={(value) => (currency ? toVndCurrency(value) : `${value}`)}
					parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
					onChange={handleChange}
				/>
			</Flex>
		</Col>
	);
}
