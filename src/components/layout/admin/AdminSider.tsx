'use client';
import React, { useState } from 'react';
import { Flex, Layout, Menu, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { MENU } from '@app/constants';
import { useAdminPage } from '@app/hooks';
import { Menu as MenuType } from '@app/types';

const { Sider } = Layout;

type MenuItem = Required<React.ComponentProps<typeof Menu>>['items'][number];

function getItem(menu: MenuType): MenuItem {
	return {
		key: menu.key,
		icon: <menu.icon />,
		label: menu.label,
		children: menu.children?.map((item) => getItem(item))
	} as MenuItem;
}

// Sidebar Menu Items
const items: MenuItem[] = MENU.map((menu) => getItem(menu));

type Props = {
	setSelectedPageAction: React.Dispatch<React.SetStateAction<string>>;
};

export function AdminSider({ setSelectedPageAction }: Props) {
	const currentPage = useAdminPage();
	const router = useRouter();
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}>
			<Flex
				style={{
					paddingLeft: '16px'
				}}
				justify='start'
				align='center'>
				<Typography.Title
					level={3}
					style={{ color: 'primary' }}>
					Admin Panel
				</Typography.Title>
			</Flex>
			<Menu
				theme='light'
				defaultSelectedKeys={[currentPage]}
				onSelect={({ key }) => {
					setSelectedPageAction(key);
					router.push(`/admin/${key}`);
				}}
				mode='inline'
				items={items}
			/>
		</Sider>
	);
}
