import { Card, Center } from '@chakra-ui/react';
import { FormLogin } from '@lib/components/admin/login/FormLogin';

export default function Page() {
	return (
		<Center minH='100vh'>
			<Card.Root minW='sm'>
				<Card.Header>
					<Card.Title>Đăng nhập</Card.Title>
					<Card.Description>Đăng nhập vào trang quản lý</Card.Description>
				</Card.Header>
				<FormLogin />
			</Card.Root>
		</Center>
	);
}
