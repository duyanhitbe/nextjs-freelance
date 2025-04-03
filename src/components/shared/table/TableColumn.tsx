'use client';
import moment from 'moment';
import { Image, Space, Switch } from 'antd';
import { TableButtonUpdate } from './button/TableButtonUpdate';
import { TableButtonDelete } from './button/TableButtonDelete';
import { toVndCurrency } from '../../../helpers';
import React, { useState } from 'react';

type TableColumnProps = {
	title: string;
	key: string;
	currency?: boolean;
};

export function TableColumn({ title, key, currency }: TableColumnProps) {
	return {
		title,
		dataIndex: key,
		key,
		render: currency ? (_: any, record: any) => toVndCurrency(record[key]) : undefined
	};
}

export function TableColumnCreatedAt() {
	return {
		title: 'Ngày tạo',
		dataIndex: 'createdAt',
		key: 'createdAt',
		render: (_: any, { createdAt }: any) => moment(createdAt).format('DD-MM-YYYY')
	};
}

export function TableColumnUpdatedAt() {
	return {
		title: 'Ngày cập nhật',
		dataIndex: 'updatedAt',
		key: 'updatedAt',
		render: (_: any, { updatedAt }: any) => moment(updatedAt).format('DD-MM-YYYY')
	};
}

export function TableColumnAction() {
	return {
		title: '',
		key: 'action',
		render: (_: any, { id }: any) => (
			<Space size='small'>
				<TableButtonUpdate id={id} />
				<TableButtonDelete id={id} />
			</Space>
		)
	};
}

export function TableColumnStatus() {
	return {
		title: 'Trạng thái',
		key: 'status',
		render: (_: any, { status }: any) => <Switch defaultChecked={status === 'ACTIVE'} />
	};
}

type TableColumnEnumProps = {
	title: string;
	key: string;
	data: { label: string; value: string }[];
};

export function TableColumnEnum({ title, key, data }: TableColumnEnumProps) {
	return {
		title,
		key,
		render: (_: any, record: any) => {
			const result = data.find((item) => item.value === record[key]);
			return result?.label;
		}
	};
}

type TableColumnPreviewProps = {
	title: string;
	key: string;
};

function Preview({ value }: { value: any }) {
	const [previewOpen, setPreviewOpen] = useState(false);

	return (
		<Image
			preview={{
				visible: previewOpen,
				onVisibleChange: (visible) => setPreviewOpen(visible)
			}}
			src={value}
			width={80}
			style={{
				borderRadius: '6px'
			}}
		/>
	);
}

export function TableColumnPreview({ title, key }: TableColumnPreviewProps) {
	return {
		title,
		key,
		render: (_: any, record: any) => <Preview value={record[key]} />
	};
}

type TableColumnSwitchProps = {
	title: string;
	key: string;
};

export function TableColumnSwitch({ title, key }: TableColumnSwitchProps) {
	return {
		title,
		key,
		render: (_: any, record: any) => <Switch defaultChecked={record[key]} />
	};
}
