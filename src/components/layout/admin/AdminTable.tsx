'use client';
import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Button, Flex, Modal, Table as AntdTable } from 'antd';
import { Box } from '@app/components';
import { BasePaginatedResponse, TableColumn } from '@app/types';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

type AdminTableProps = PropsWithChildren;
type TableProps = {
	data: BasePaginatedResponse<any>;
	columns: TableColumn;
};
type AdminTableContextType = {
	openModalDelete: boolean;
	setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AdminTableContext = createContext<AdminTableContextType>({
	openModalDelete: false,
	setOpenModalDelete: () => {}
});

export const useAdminTableContext = () => useContext(AdminTableContext);

export function AdminTable({ children }: AdminTableProps) {
	const [openModalDelete, setOpenModalDelete] = useState(false);

	return (
		<AdminTableContext.Provider
			value={{
				openModalDelete,
				setOpenModalDelete
			}}>
			<Box>{children}</Box>
		</AdminTableContext.Provider>
	);
}

function Table({ data, columns }: TableProps) {
	return (
		<AntdTable
			rowKey='id'
			columns={columns}
			dataSource={data.data}
			pagination={{
				total: data.meta?.totalItem,
				pageSize: data.meta?.limit,
				current: data.meta?.page,
				defaultPageSize: 10,
				showSizeChanger: true
			}}
		/>
	);
}

function CreateButton() {
	return (
		<Flex
			justify='flex-end'
			style={{ marginBottom: '10px' }}>
			<Button
				icon={<PlusOutlined />}
				iconPosition='start'
				color='primary'
				variant='solid'>
				Tạo mới
			</Button>
		</Flex>
	);
}

function DeleteButton() {
	const { setOpenModalDelete } = useAdminTableContext();

	return (
		<Button
			icon={<DeleteOutlined />}
			variant='outlined'
			color='danger'
			onClick={() => setOpenModalDelete(true)}
		/>
	);
}

type ModalDeleteProps = {
	loading: boolean;
	onDelete?: () => Promise<void>;
};

function ModalDelete({ loading, onDelete }: ModalDeleteProps) {
	const { openModalDelete, setOpenModalDelete } = useAdminTableContext();

	const handleOk = () => {
		if (onDelete) {
			onDelete().then(() => setOpenModalDelete(false));
		} else {
			setOpenModalDelete(false);
		}
	};

	return (
		<Modal
			title='Bạn có chắc muốn xoá dữ liệu này?'
			open={openModalDelete}
			onOk={handleOk}
			confirmLoading={loading}
			onCancel={() => setOpenModalDelete(false)}
			centered
			okType='danger'
			okText='Xoá'
			cancelText='Huỷ'
			closable={false}
		/>
	);
}

AdminTable.Table = Table;
AdminTable.CreateButton = CreateButton;
AdminTable.DeleteButton = DeleteButton;
AdminTable.ModalDelete = ModalDelete;
