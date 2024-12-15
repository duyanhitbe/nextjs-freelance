'use client';

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from '@lib/components';

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider>{children}</Provider>
		</QueryClientProvider>
	);
}
