import { PropsWithChildren } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { DialogRoot } from '@lib/components';

type TableListHeaderProps = PropsWithChildren<{
	title: string;
}>;

export function TableListHeader({ children, title }: TableListHeaderProps) {
	return (
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
			<DialogRoot
				placement='center'
				size='lg'
			>
				{children}
			</DialogRoot>
		</Flex>
	);
}
