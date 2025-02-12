import { Card, Flex } from 'antd';
import { LoginForm } from '@app/components';

export default function Page() {
	return (
		<Flex
			justify='center'
			align='center'
			style={{
				height: '100vh'
			}}>
			<Card
				title='Login'
				style={{ width: 300 }}>
				<LoginForm />
			</Card>
		</Flex>
	);
}
