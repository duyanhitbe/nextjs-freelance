import { Col, Input, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useTableContext } from '../TableProvider';

type Props = {
	placeholder?: string;
	tooltip?: string;
};

export function TableFilterSearch({ placeholder, tooltip }: Props) {
	const { filter, setFilter } = useTableContext();

	const handleChange = (value: string) => {
		setFilter((prev) => ({ ...prev, search: value }));
	};

	return (
		<Col span={6}>
			<Typography.Text>Tìm kiếm theo</Typography.Text>
			<Input
				allowClear
				value={filter['search']}
				onChange={(e) => handleChange(e.target.value)}
				placeholder={placeholder}
				suffix={
					<Tooltip title={tooltip}>
						<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
					</Tooltip>
				}
			/>
		</Col>
	);
}
