'use client';
import { useAdminTableContext } from '@app/components/admin/table/AdminTableContext';
import React, { PropsWithChildren, useState } from 'react';
import { Modal } from 'antd';

type ModalUpdateProps = PropsWithChildren<{
	title: string;
}>;

export function AdminTableModalUpdate({ children, title }: ModalUpdateProps) {
	const { openModalUpdate, setOpenModalUpdate } = useAdminTableContext();
	const [loading, setLoading] = useState(false);

	const handleOk = () => {
		setLoading(true);
	};

	return (
		<Modal
			title={title}
			open={openModalUpdate}
			onOk={handleOk}
			confirmLoading={loading}
			onCancel={() => setOpenModalUpdate(false)}
			centered
			okType='primary'
			okText='Cập nhật'
			cancelText='Huỷ'
			closable={false}>
			{children}
		</Modal>
	);
}
