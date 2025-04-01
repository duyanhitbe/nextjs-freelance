'use client';
import { useAdminTableContext } from '@app/components/admin/table/AdminTableContext';
import React, { PropsWithChildren, useState } from 'react';
import { Modal } from 'antd';

type ModalCreateProps = PropsWithChildren<{
	title: string;
}>;

export function AdminTableModalCreate({ children, title }: ModalCreateProps) {
	const { openModalCreate, setOpenModalCreate } = useAdminTableContext();
	const [loading, setLoading] = useState(false);

	const handleOk = () => {
		setLoading(true);
	};

	return (
		<Modal
			title={title}
			open={openModalCreate}
			onOk={handleOk}
			confirmLoading={loading}
			onCancel={() => setOpenModalCreate(false)}
			centered
			okType='primary'
			okText='Tạo mới'
			cancelText='Huỷ'
			closable={false}>
			{children}
		</Modal>
	);
}
