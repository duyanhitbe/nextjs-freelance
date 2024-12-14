import { Button, Card, Center, Input, Stack } from '@chakra-ui/react';
import { Field } from '@lib/components';

export default function Page() {
	return (
		<Center minH='100vh'>
			<Card.Root minW='sm'>
				<Card.Header>
					<Card.Title>Sign in</Card.Title>
					<Card.Description>Sign in to panel</Card.Description>
				</Card.Header>
				<Card.Body>
					<Stack
						gap='4'
						w='full'
					>
						<Field
							label='Username'
							required
						>
							<Input />
						</Field>
						<Field
							label='Password'
							required
						>
							<Input />
						</Field>
					</Stack>
				</Card.Body>
				<Card.Footer justifyContent='flex-end'>
					<Button variant='solid'>Sign in</Button>
				</Card.Footer>
			</Card.Root>
		</Center>
	);
}
