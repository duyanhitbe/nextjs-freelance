import { PropsWithChildren } from 'react';
import { Container, Flex, Text } from '@chakra-ui/react';
import { DialogTrigger, PrimaryButton } from '@lib/components';
import { FiPlus } from 'react-icons/fi';

type ListProps = PropsWithChildren<{
	title: string;
	shouldCreate?: boolean;
}>;

export function TableList({ children, title, shouldCreate = true }: ListProps) {
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
				{shouldCreate && (
					<DialogTrigger asChild>
						<PrimaryButton size='xs'>
							<FiPlus /> Tạo mới
						</PrimaryButton>
					</DialogTrigger>
				)}
			</Flex>
			{children}
		</Container>
	);
}
