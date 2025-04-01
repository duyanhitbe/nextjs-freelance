import { useAdminTableContext } from '@app/components/admin/table/AdminTableContext';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React from 'react';

type Props = {
	id: string;
};

export function AdminTableUpdateButton({ id }: Props) {
	const { setOpenModalUpdate, handleFetchDetail } = useAdminTableContext();

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
