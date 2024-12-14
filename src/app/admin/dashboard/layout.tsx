import { DashboardHeader, DashboardSidebar } from '@lib/components';
import { PropsWithChildren } from 'react';
import { Box, Flex } from '@chakra-ui/react';

type Props = Readonly<PropsWithChildren>;

export default function DashboardLayout({ children }: Props) {
	return (
		<Flex minH='100vh'>
			<DashboardSidebar />

			<Flex
				flex='1'
				direction='column'
			>
				<DashboardHeader />

				<Box
					as='main'
					flex='1'
					bgColor='gray.100'
					minH='100vh'
					pt={4}
				>
					{children}
				</Box>
			</Flex>
		</Flex>
	);
}
