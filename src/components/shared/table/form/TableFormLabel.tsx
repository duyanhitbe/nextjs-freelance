import { Typography } from 'antd';
import React from 'react';

type Props = {
	label: string;
	required?: boolean;
};

export function TableFormLabel({ label, required }: Props) {
	return (
		<Typography.Text>
			{label}
			{required && <span style={{ color: 'red' }}>*</span>}
		</Typography.Text>
	);
}
