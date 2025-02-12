'use client';
import React from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Layout, MenuProps, theme } from 'antd';

const { Header } = Layout;

const dropdownItems: MenuProps['items'] = [
	{
		key: 'profile',
		label: 'My profile',
		icon: <UserOutlined />
	},
	{
		key: 'logout',
		label: 'Logout',
		icon: <LogoutOutlined />
	}
];

export function AdminHeader() {
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return (
		<Header
			style={{
				padding: 0,
				paddingRight: '16px',
				background: colorBgContainer,
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center'
			}}>
			<Dropdown menu={{ items: dropdownItems }}>
				<Avatar
					style={{
						verticalAlign: 'middle',
						backgroundColor: '#f56a00',
						cursor: 'pointer'
					}}
					size='large'>
					A
				</Avatar>
			</Dropdown>
		</Header>
	);
}
