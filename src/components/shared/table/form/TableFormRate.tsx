import { Col, Flex, Rate } from 'antd';
import { TableFormLabel } from './TableFormLabel';
import React from 'react';
import { useTableContext } from '../TableProvider';

type Props = {
	name: string;
	label: string;
	span?: number;
	required?: boolean;
	center?: boolean;
};

export function TableFormRate({ name, label, span, required, center }: Props) {
	const { formData, setFormData } = useTableContext();

	const handleChange = (value: number) => {
		setFormData((prev: any) => ({ ...prev, [name]: value }));
	};

	return (
		<Col
			span={span}
			style={{ marginTop: '0.5rem', marginBottom: '0.5rem', width: '100%' }}>
			<Flex
				vertical
				align={center ? 'center' : undefined}
				gap={5}>
				<TableFormLabel
					label={label}
					required={required}
				/>
				<Rate
					value={formData[name] || 0}
					onChange={handleChange}
				/>
			</Flex>
		</Col>
	);
}
