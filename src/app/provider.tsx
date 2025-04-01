'use client';

import { PropsWithChildren } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<AntdRegistry>
				<ConfigProvider
					theme={{
						components: {
							Layout: {
								siderBg: 'white',
								triggerBg: 'white',
								triggerColor: 'black'
							}
						}
					}}>
					{children}
				</ConfigProvider>
			</AntdRegistry>
		</QueryClientProvider>
	);
}
