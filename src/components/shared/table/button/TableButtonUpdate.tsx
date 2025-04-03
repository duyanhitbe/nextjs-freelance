import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React from 'react';
import { useTableContext } from '../TableProvider';

type Props = {
	id: string;
};

export function TableButtonUpdate({ id }: Props) {
	const { setOpenModalUpdate, handleFetchDetail } = useTableContext();

	const handleClick = () => {
		setOpenModalUpdate(true);
		handleFetchDetail(id);
	};

	return (
		<Button
			icon={<EditOutlined />}
			variant='outlined'
			color='primary'
			onClick={handleClick}
		/>
	);
}
