'use client';
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export function AdminFooter() {
	return (
		<Footer style={{ textAlign: 'center' }}>
			Admin Panel ©{new Date().getFullYear()} Created by Your Name
		</Footer>
	);
}
