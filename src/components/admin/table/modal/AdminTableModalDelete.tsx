'use client';
import { useAdminTableContext } from '@app/components/admin/table/AdminTableContext';
import React, { useState } from 'react';
import { Modal } from 'antd';

type ModalDeleteProps = {
	title: string;
};

export function AdminTableModalDelete({ title }: ModalDeleteProps) {
	const { openModalDelete, setOpenModalDelete } = useAdminTableContext();
	const [loading, setLoading] = useState(false);

	const handleOk = () => {
		setLoading(true);
	};

	return (
		<Modal
			title={title}
			open={openModalDelete}
			onOk={handleOk}
			confirmLoading={loading}
			onCancel={() => setOpenModalDelete(false)}
			centered
			okButtonProps={{
				type: 'primary'
			}}
			okType='danger'
			okText='Xoá'
			cancelText='Huỷ'
			closable={false}
			width={400}
		/>
	);
}
