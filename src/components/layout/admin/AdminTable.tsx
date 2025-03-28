import React, { PropsWithChildren } from 'react';
import type { TableProps as TableAntdProps } from 'antd';
import { Table as AntdTable } from 'antd';
import { Box } from '@app/components';

interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}

type AdminTableProps = PropsWithChildren;
type TableProps = {
	data: DataType[];
	columns: TableAntdProps<DataType>['columns'];
};

export function AdminTable({ children }: AdminTableProps) {
	return <Box>{children}</Box>;
}

function Table({ data, columns }: TableProps) {
	return (
		<AntdTable<DataType>
			columns={columns}
			dataSource={data}
		/>
	);
}

AdminTable.Table = Table;
