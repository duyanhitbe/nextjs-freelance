'use client';
import React, { PropsWithChildren } from 'react';
import { Flex, Pagination, Space, Table as AntdTable } from 'antd';
import { TableProvider, useTableContext } from './TableProvider';
import { BaseFilter, BasePaginatedResponse, BaseResponse } from 'types/base.type';
import { TableColumn as TableColumnType } from 'types/table.type';
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
import { TableFormDateRange } from './form/TableFormDateRange';
import { TableFormDatePicker } from './form/TableFormDatePicker';

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
	const { data, columns, loadingTable, filter, setFilter, handleFetch } = useTableContext();

	const handleChangePagination = (page: number, limit: number) => {
		setFilter((prev) => ({ ...prev, page, limit }));
		handleFetch({ ...filter, page, limit });
	};

	return (
		<>
			<AntdTable
				rowKey='id'
				columns={columns}
				dataSource={data?.data}
				loading={loadingTable}
				scroll={{ x: 'max-content' }}
				pagination={false}
			/>
			<Flex
				justify='flex-end'
				style={{ marginTop: '1rem' }}>
				<Pagination
					total={data?.meta?.totalItem}
					showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
					showSizeChanger
					defaultPageSize={filter.limit}
					pageSize={filter.limit}
					current={filter.page}
					defaultCurrent={filter.page}
					onChange={handleChangePagination}
				/>
			</Flex>
		</>
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
	Rate: TableFormRate,
	DateRange: TableFormDateRange,
	DatePicker: TableFormDatePicker
};

Table.Modals = {
	Create: TableModalCreate,
	Update: TableModalUpdate,
	Delete: TableModalDelete
};
