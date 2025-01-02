import { PropsWithChildren } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Box } from '@chakra-ui/react';

type Props = Readonly<PropsWithChildren>;

export default async function LoginLayout({ children }: Props) {
	const cookieStore = await cookies();
	const session = cookieStore.get('session');

	if (session) {
		redirect(`/admin/dashboard`);
	}

	return <Box bgColor='gray.100'>{children}</Box>;
}
