'use client';
import React, { PropsWithChildren } from 'react';
import { Box } from '@app/components';
import { Col, Input, Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

type AdminFilterProps = PropsWithChildren;
type SearchProps = {
	placeholder?: string;
	tooltip?: string;
};

export function AdminFilter({ children }: AdminFilterProps) {
	return <Box>{children}</Box>;
}

function Search({ placeholder, tooltip }: SearchProps) {
	return (
		<>
			<Typography.Text>Tìm kiếm theo</Typography.Text>
			<Row
				gutter={16}
				style={{ marginTop: '5px' }}>
				<Col span={6}>
					<Input
						name='keyword'
						placeholder={placeholder}
						suffix={
							<Tooltip title={tooltip}>
								<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
							</Tooltip>
						}
					/>
				</Col>
			</Row>
		</>
	);
}

AdminFilter.Search = Search;
