'use client';
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { AdminHeader, AdminSider } from '@app/components';

const { Content, Footer } = Layout;

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<AdminSider />
			<Layout>
				<AdminHeader />
				<Content style={{ margin: '0 16px' }}>
					<Breadcrumb
						style={{ margin: '16px 0' }}
						items={[{ title: 'Admin' }, { title: 'Dashboard' }]}
					/>
					<div
						style={{
							padding: '2%',
							minHeight: '100%',
							background: colorBgContainer,
							borderRadius: borderRadiusLG
						}}>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Admin Panel ©{new Date().getFullYear()} Created by Your Name
				</Footer>
			</Layout>
		</Layout>
	);
}
