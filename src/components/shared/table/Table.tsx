'use client';
import React, { PropsWithChildren } from 'react';
import { Space, Table as AntdTable } from 'antd';
import { TableProvider, useTableContext } from './TableProvider';
import {
	BaseFilter,
	BasePaginatedResponse,
	BaseResponse,
	TableColumn as TableColumnType
} from '@app/types';
import { TableButtonCreate } from './button/TableButtonCreate';
import { TableButtonDelete } from './button/TableButtonDelete';
import { TableButtonUpdate } from './button/TableButtonUpdate';
import { TableFilter } from './filter/TableFilter';
import { TableFilterSearch } from './filter/TableFilterSearch';
import { TableFilterSelect } from './filter/TableFilterSelect';
import { TableFilterDateRange } from './filter/TableFilterDateRange';
import {
	TableColumn,
	TableColumnAction,
	TableColumnCreatedAt,
	TableColumnEnum,
	TableColumnPreview,
	TableColumnStatus,
	TableColumnSwitch,
	TableColumnUpdatedAt
} from './TableColumn';
import { TableFormInput } from './form/TableFormInput';
import { TableFormInputNumber } from './form/TableFormInputNumber';
import { TableFormSelect } from './form/TableFormSelect';
import { TableFormUpload } from './form/TableFormUpload';
import { Box } from '../Box';
import { TableModalCreate } from './modal/TableModalCreate';
import { TableModalUpdate } from './modal/TableModalUpdate';
import { TableModalDelete } from './modal/TableModalDelete';
import { TableFormEditor } from './form/TableFormEditor';
import { TableFormRate } from './form/TableFormRate';

type AdminTableProps = PropsWithChildren<{
	columns: TableColumnType;
	findAction: (filter: BaseFilter) => Promise<BasePaginatedResponse<any>>;
	findDetailAction: (id: string) => Promise<BaseResponse<any>>;
	createAction: (data: any) => Promise<BaseResponse<any>>;
	updateAction: (id: string, data: any) => Promise<BaseResponse<any>>;
	deleteAction: (id: string) => Promise<BaseResponse<any>>;
}>;

export function Table({
	children,
	columns,
	findAction,
	findDetailAction,
	createAction,
	updateAction,
	deleteAction
}: AdminTableProps) {
	return (
		<TableProvider
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
		</TableProvider>
	);
}

function TableList() {
	const { data, columns, loadingTable } = useTableContext();

	return (
		<AntdTable
			rowKey='id'
			columns={columns}
			dataSource={data?.data}
			loading={loadingTable}
			scroll={{ x: 'max-content' }}
			pagination={{
				total: data?.meta?.totalItem,
				pageSize: data?.meta?.limit,
				current: data?.meta?.page,
				defaultPageSize: 10,
				showSizeChanger: true
			}}
		/>
	);
}

function TableSection({ children }: PropsWithChildren) {
	return <Box>{children}</Box>;
}

Table.List = TableList;
Table.Section = TableSection;

Table.Columns = {
	Column: TableColumn,
	CreatedAt: TableColumnCreatedAt,
	UpdatedAt: TableColumnUpdatedAt,
	Action: TableColumnAction,
	Status: TableColumnStatus,
	Enum: TableColumnEnum,
	Preview: TableColumnPreview,
	Switch: TableColumnSwitch
};

Table.Buttons = {
	Create: TableButtonCreate,
	Update: TableButtonUpdate,
	Delete: TableButtonDelete
};

Table.Filters = {
	Wrapper: TableFilter,
	Search: TableFilterSearch,
	Select: TableFilterSelect,
	DateRange: TableFilterDateRange
};

Table.Forms = {
	Input: TableFormInput,
	InputNumber: TableFormInputNumber,
	Select: TableFormSelect,
	Upload: TableFormUpload,
	Editor: TableFormEditor,
	Rate: TableFormRate
};

Table.Modals = {
	Create: TableModalCreate,
	Update: TableModalUpdate,
	Delete: TableModalDelete
};
