'use client';
import React, { PropsWithChildren } from 'react';
import { Breadcrumb, Layout, Typography } from 'antd';
import { MENU } from '@constants/menu.constant';
import { Menu } from 'types/menu.type';

const { Content } = Layout;

type Props = PropsWithChildren<{
	selectedPage: string;
}>;

function getBreadcrumb(selectedPage: string, menu: Menu[]): string[] {
	if (selectedPage === '/admin') return [];

	const item = menu?.find(({ key }) => key === selectedPage);

	if (!item) {
		const pages = selectedPage.split('/');
		const parent = menu.find(({ key }) => key === pages[0]);
		return getBreadcrumb(selectedPage, parent?.children || []);
	}

	return item?.breadcrumb || [];
}

export function AdminContent({ children, selectedPage }: Props) {
	const breadcrumbs = getBreadcrumb(selectedPage, MENU).map((title) => ({ title })) || [];

	return (
		<Content style={{ margin: '0 16px' }}>
			<Breadcrumb
				style={{ margin: '16px 0' }}
				items={breadcrumbs}
			/>
			<Typography.Title level={4}>
				{breadcrumbs[breadcrumbs.length - 1]?.title}
			</Typography.Title>

			{children}
		</Content>
	);
}
