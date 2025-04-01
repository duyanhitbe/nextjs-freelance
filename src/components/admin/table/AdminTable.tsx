'use client';
import React, { PropsWithChildren } from 'react';
import { Space } from 'antd';
import { AdminTableProvider } from './AdminTableContext';
import { AdminTableSection } from './AdminTableSection';
import { AdminTableTable } from './AdminTableTable';
import { AdminTableCreateButton } from './button/AdminTableCreateButton';
import { AdminTableUpdateButton } from './button/AdminTableUpdateButton';
import { AdminTableDeleteButton } from './button/AdminTableDeleteButton';
import { AdminTableModalCreate } from './modal/AdminTableModalCreate';
import { AdminTableModalUpdate } from './modal/AdminTableModalUpdate';
import { AdminTableModalDelete } from './modal/AdminTableModalDelete';
import { BaseFilter, BasePaginatedResponse, BaseResponse, TableColumn } from '@app/types';

type AdminTableProps = PropsWithChildren<{
	columns: TableColumn;
	findAction: (filter: BaseFilter) => Promise<BasePaginatedResponse<any>>;
	findDetailAction: (id: string) => Promise<BaseResponse<any>>;
	createAction: (data: any) => Promise<BaseResponse<any>>;
	updateAction: (id: string, data: any) => Promise<BaseResponse<any>>;
	deleteAction: (id: string) => Promise<BaseResponse<any>>;
}>;

export function AdminTable({
	children,
	columns,
	findAction,
	findDetailAction,
	createAction,
	updateAction,
	deleteAction
}: AdminTableProps) {
	return (
		<AdminTableProvider
			columns={columns}
			findAction={findAction}
			findDetailAction={findDetailAction}
			createAction={createAction}
			updateAction={updateAction}
			deleteAction={deleteAction}>
			<Space
				direction='vertical'
				style={{ width: '100%', minHeight: '100' }}
				size='large'>
				{children}
			</Space>
		</AdminTableProvider>
	);
}

AdminTable.Section = AdminTableSection;
AdminTable.Table = AdminTableTable;
AdminTable.CreateButton = AdminTableCreateButton;
AdminTable.UpdateButton = AdminTableUpdateButton;
AdminTable.DeleteButton = AdminTableDeleteButton;
AdminTable.ModalCreate = AdminTableModalCreate;
AdminTable.ModalUpdate = AdminTableModalUpdate;
AdminTable.ModalDelete = AdminTableModalDelete;
