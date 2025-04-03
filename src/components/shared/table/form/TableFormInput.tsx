import { Col, Flex, Input } from 'antd';
import React from 'react';
import { useTableContext } from '../TableProvider';
import { TableFormLabel } from './TableFormLabel';

type Props = {
	name: string;
	placeholder: string;
	label: string;
	span?: number;
	required?: boolean;
};

export function TableFormInput({ name, placeholder, label, span = 24, required }: Props) {
	const { formData, setFormData } = useTableContext();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev: any) => ({ ...prev, [name]: e.target.value }));
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
				<Input
					allowClear
					value={formData[name]}
					onChange={handleChange}
					placeholder={placeholder}
				/>
			</Flex>
		</Col>
	);
}
