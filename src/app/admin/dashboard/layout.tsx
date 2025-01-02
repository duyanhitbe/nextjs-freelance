import { DashboardHeader, DashboardSidebar } from '@lib/components';
import { PropsWithChildren } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthServerService } from '@lib/services';

type Props = Readonly<PropsWithChildren>;

export default async function DashboardLayout({ children }: Props) {
	const cookieStore = await cookies();
	const session = cookieStore.get('session');
	const headersObj = await headers();

	if (!session) {
		redirect(`/admin/login`);
	}

	const userData = await AuthServerService.getUserInfo(headersObj);

	return (
		<Flex minH='100vh'>
			<DashboardSidebar />

			<Flex
				flex='1'
				direction='column'
			>
				<DashboardHeader user={userData.data} />

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
