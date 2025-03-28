'use client';
import React, { useState } from 'react';
import { Layout } from 'antd';
import { AdminContent, AdminFooter, AdminHeader, AdminSider } from '@app/components';
import { useAdminPage } from '@app/hooks';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentPage = useAdminPage();
	const [selectedPage, setSelectedPage] = useState(currentPage);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<AdminSider setSelectedPageAction={setSelectedPage} />
			<Layout>
				<AdminHeader />
				<AdminContent selectedPage={selectedPage}>{children}</AdminContent>
				<AdminFooter />
			</Layout>
		</Layout>
	);
}
