'use client';
import React, { useState } from 'react';
import { Layout } from 'antd';

import { useAdminPage } from '@hooks/useAdminPage';
import { AdminSider } from '@components/layout/admin/AdminSider';
import { AdminHeader } from '@components/layout/admin/AdminHeader';
import { AdminContent } from '@components/layout/admin/AdminContent';
import { AdminFooter } from '@components/layout/admin/AdminFooter';

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
