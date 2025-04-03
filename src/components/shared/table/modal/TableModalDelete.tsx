'use client';
import React from 'react';
import { Modal } from 'antd';
import { useTableContext } from '../TableProvider';

type ModalDeleteProps = {
	title: string;
};

export function TableModalDelete({ title }: ModalDeleteProps) {
	const { openModalDelete, setOpenModalDelete, loadingDelete, handleDelete } = useTableContext();

	return (
		<Modal
			title={title}
			open={openModalDelete}
			onOk={handleDelete}
			confirmLoading={loadingDelete}
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
