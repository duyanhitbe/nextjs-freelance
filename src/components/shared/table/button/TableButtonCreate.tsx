import { Button, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { useTableContext } from '../TableProvider';

export function TableButtonCreate() {
	const { setOpenModalCreate } = useTableContext();

	return (
		<Flex
			justify='flex-end'
			style={{ marginBottom: '10px' }}>
			<Button
				icon={<PlusOutlined />}
				iconPosition='start'
				color='primary'
				variant='solid'
				onClick={() => setOpenModalCreate(true)}>
				Tạo mới
			</Button>
		</Flex>
	);
}
