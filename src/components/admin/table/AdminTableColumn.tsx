'use client';
import moment from 'moment';
import { Space, Switch } from 'antd';
import { AdminTable } from '@app/components';

type AdminTableColumnProps = {
	title: string;
	key: string;
};

export function AdminTableColumn({ title, key }: AdminTableColumnProps) {
	return {
		title,
		dataIndex: key,
		key
	};
}

export function AdminTableColumnCreatedAt() {
	return {
		title: 'Ngày tạo',
		dataIndex: 'createdAt',
		key: 'createdAt',
		render: (_: any, { createdAt }: any) => moment(createdAt).format('DD-MM-YYYY')
	};
}

export function AdminTableColumnUpdatedAt() {
	return {
		title: 'Ngày cập nhật',
		dataIndex: 'updatedAt',
		key: 'updatedAt',
		render: (_: any, { updatedAt }: any) => moment(updatedAt).format('DD-MM-YYYY')
	};
}

export function AdminTableColumnAction() {
	return {
		title: '',
		key: 'action',
		render: (_: any, { id }: any) => (
			<Space size='small'>
				<AdminTable.UpdateButton id={id} />
				<AdminTable.DeleteButton id={id} />
			</Space>
		)
	};
}

export function AdminTableColumnStatus() {
	return {
		title: 'Trạng thái',
		key: 'status',
		render: (_: any, { status }: any) => <Switch defaultChecked={status === 'ACTIVE'} />
	};
}
