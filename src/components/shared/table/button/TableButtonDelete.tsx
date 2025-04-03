import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { useTableContext } from '../TableProvider';

type Props = {
	id: string;
};

export function TableButtonDelete({ id }: Props) {
	const { setOpenModalDelete, setSelectedItem } = useTableContext();

	const handleClick = () => {
		setOpenModalDelete(true);
		setSelectedItem({ id });
	};

	return (
		<Button
			icon={<DeleteOutlined />}
			variant='outlined'
			color='danger'
			onClick={handleClick}
		/>
	);
}
