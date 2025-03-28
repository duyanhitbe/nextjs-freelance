'use client';
import React, { PropsWithChildren } from 'react';
import { Box } from '@app/components';
import { Button, Col, Flex, Input, Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';

type AdminFilterProps = PropsWithChildren;
type SearchProps = {
	placeholder?: string;
	tooltip?: string;
};

export function AdminFilter({ children }: AdminFilterProps) {
	return (
		<Box>
			{children}
			<Flex
				justify='flex-end'
				style={{ marginTop: '10px' }}
				gap='10px'>
				<Button
					variant='outlined'
					icon={<RedoOutlined />}
					iconPosition='start'>
					Làm mới
				</Button>
				<Button
					color='primary'
					variant='solid'
					icon={<SearchOutlined />}
					iconPosition='start'>
					Tìm kiếm
				</Button>
			</Flex>
		</Box>
	);
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
