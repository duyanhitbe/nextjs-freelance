import { Button, Flex, Row } from 'antd';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import React, { PropsWithChildren } from 'react';
import { useTableContext } from '../TableProvider';

export function TableFilter({ children }: PropsWithChildren) {
	const { handleFetch, handleReset } = useTableContext();

	return (
		<>
			<Row
				gutter={16}
				style={{ marginTop: '5px' }}>
				{children}
			</Row>
			<Flex
				justify='flex-end'
				style={{ marginTop: '10px' }}
				gap='10px'>
				<Button
					variant='outlined'
					icon={<RedoOutlined />}
					iconPosition='start'
					htmlType='reset'
					onClick={handleReset}>
					Làm mới
				</Button>
				<Button
					color='primary'
					variant='solid'
					icon={<SearchOutlined />}
					iconPosition='start'
					htmlType='submit'
					onClick={handleFetch}>
					Tìm kiếm
				</Button>
			</Flex>
		</>
	);
}
