'use client';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Modal, Row } from 'antd';
import { useTableContext } from '../TableProvider';

type ModalUpdateProps = PropsWithChildren<{
	title: string;
}>;

export function TableModalUpdate({ children, title }: ModalUpdateProps) {
	const { loadingUpdate, handleUpdate, openModalUpdate, setOpenModalUpdate, formData } =
		useTableContext();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (formData?.id) {
			setLoading(false);
		}
	}, [formData]);

	return (
		<Modal
			title={title}
			loading={loading}
			open={openModalUpdate}
			onOk={handleUpdate}
			confirmLoading={loadingUpdate}
			onCancel={() => setOpenModalUpdate(false)}
			centered
			okType='primary'
			okText='Cập nhật'
			cancelText='Huỷ'
			closable={false}>
			<Row gutter={24}>{children}</Row>
		</Modal>
	);
}
