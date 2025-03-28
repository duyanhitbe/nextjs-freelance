'use client';

import React, { PropsWithChildren } from 'react';
import { theme } from 'antd';

type Props = PropsWithChildren;

export function Box({ children }: Props) {
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken();

	return (
		<div
			style={{
				padding: '2%',
				background: colorBgContainer,
				borderRadius: borderRadiusLG
			}}>
			{children}
		</div>
	);
}
