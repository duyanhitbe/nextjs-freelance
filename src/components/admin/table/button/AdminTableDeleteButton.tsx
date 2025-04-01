import { useAdminTableContext } from '@app/components/admin/table/AdminTableContext';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';

type Props = {
	id: string;
};

export function AdminTableDeleteButton({ id }: Props) {
	const { setOpenModalDelete } = useAdminTableContext();

	const handleClick = () => {
		setOpenModalDelete(true);
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
