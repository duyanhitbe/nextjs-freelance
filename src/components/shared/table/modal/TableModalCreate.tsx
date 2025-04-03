'use client';
import React, { PropsWithChildren } from 'react';
import { Modal, Row } from 'antd';
import { useTableContext } from '../TableProvider';

type ModalCreateProps = PropsWithChildren<{
	title: string;
}>;

export function TableModalCreate({ children, title }: ModalCreateProps) {
	const { loadingCreate, openModalCreate, setOpenModalCreate, handleCreate } = useTableContext();

	return (
		<Modal
			title={title}
			open={openModalCreate}
			onOk={handleCreate}
			confirmLoading={loadingCreate}
			onCancel={() => setOpenModalCreate(false)}
			centered
			okType='primary'
			okText='Tạo mới'
			cancelText='Huỷ'
			closable={false}>
			<Row gutter={24}>{children}</Row>
		</Modal>
	);
}
