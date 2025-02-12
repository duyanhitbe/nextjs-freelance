'use client';
import React, { useState } from 'react';
import {
	ApartmentOutlined,
	CalendarOutlined,
	DollarOutlined,
	IdcardOutlined,
	ScheduleOutlined,
	ShopOutlined,
	ShoppingCartOutlined,
	TagsOutlined,
	TeamOutlined,
	UnorderedListOutlined,
	UsergroupAddOutlined,
	UserOutlined,
	UserSwitchOutlined
} from '@ant-design/icons';
import { Flex, Layout, Menu, Typography } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<React.ComponentProps<typeof Menu>>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label
	} as MenuItem;
}

// Sidebar Menu Items
const items: MenuItem[] = [
	getItem('Quản trị viên', 'user', <UserOutlined />),
	getItem('Khách hàng', 'customer', <UserSwitchOutlined />),
	getItem('Quản lý đại lý', 'agency', <TeamOutlined />, [
		getItem('Cấp đại lý', 'agency-level', <ApartmentOutlined />),
		getItem('Đại lý', 'agencies', <ShopOutlined />),
		getItem('Tài khoản đại lý', 'agency-user', <UsergroupAddOutlined />)
	]),
	getItem('Quản lý sự kiện', 'event', <CalendarOutlined />, [
		getItem('Sự kiện', 'events', <ScheduleOutlined />),
		getItem('Nhóm vé', 'ticket-group', <TagsOutlined />),
		getItem('Loại vé', 'ticket-info', <IdcardOutlined />),
		getItem('Giá vé', 'ticket-price', <DollarOutlined />),
		getItem('Danh sách vé', 'tickets', <UnorderedListOutlined />)
	]),
	getItem('Đơn hàng', 'order', <ShoppingCartOutlined />)
];

export function AdminSider() {
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
				defaultSelectedKeys={['1']}
				mode='inline'
				items={items}
			/>
		</Sider>
	);
}
