'use client';
import React, { PropsWithChildren } from 'react';
import { Breadcrumb, Layout, Space, Typography } from 'antd';
import { MENU } from '@app/constants';
import { Menu } from '@app/types';
import { Box } from '@app/components';
import { AdminFilter } from '@app/components/layout/admin/AdminFilter';

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
			<Space
				direction='vertical'
				style={{ width: '100%', minHeight: '100' }}
				size='large'>
				<AdminFilter>
					<AdminFilter.Search
						placeholder='Tìm kiếm theo tên tài khoản'
						tooltip='Tìm kiếm theo tên tài khoản'
					/>
				</AdminFilter>
				<Box>{children}</Box>
			</Space>
		</Content>
	);
}
