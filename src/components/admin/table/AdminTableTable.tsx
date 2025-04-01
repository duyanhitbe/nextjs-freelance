import { Table as AntdTable } from 'antd';
import React from 'react';
import { useAdminTableContext } from '@app/components/admin/table/AdminTableContext';

export function AdminTableTable() {
	const { data, columns, loadingTable } = useAdminTableContext();

	return (
		<AntdTable
			rowKey='id'
			columns={columns}
			dataSource={data?.data}
			loading={loadingTable}
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
