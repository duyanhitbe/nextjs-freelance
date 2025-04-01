import { useAdminTableContext } from '@app/components/admin/table/AdminTableContext';
import { Button, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

export function AdminTableCreateButton() {
	const { setOpenModalCreate } = useAdminTableContext();

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
