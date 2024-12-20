'use client';

import { PropsWithChildren } from 'react';
import { Container } from '@chakra-ui/react';

type ListProps = PropsWithChildren<{}>;

export function TableList({ children }: ListProps) {
	return (
		<Container
			bgColor='white'
			borderRadius='5px'
			py={5}
			mt={5}
		>
			{children}
		</Container>
	);
}
