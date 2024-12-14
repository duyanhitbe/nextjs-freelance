import { PropsWithChildren } from 'react';
import { Container, Flex, Text } from '@chakra-ui/react';
import { DialogTrigger, PrimaryButton } from '@lib/components';
import { FiPlus } from 'react-icons/fi';

type ListProps = PropsWithChildren<{
	title: string;
}>;

export function TableList({ children, title }: ListProps) {
	return (
		<Container
			bgColor='white'
			borderRadius='5px'
			py={5}
			mt={5}
		>
			<Flex
				alignItems='center'
				justifyContent='space-between'
			>
				<Text
					fontSize='md'
					fontWeight='500'
				>
					{title}
				</Text>
				<DialogTrigger asChild>
					<PrimaryButton size='xs'>
						<FiPlus /> Tạo mới
					</PrimaryButton>
				</DialogTrigger>
			</Flex>
			{children}
		</Container>
	);
}
