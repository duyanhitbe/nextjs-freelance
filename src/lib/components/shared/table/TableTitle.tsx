'use client';

import { Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren;

export function TableTitle({ children }: TitleProps) {
	return (
		<Text
			as='h1'
			fontSize='2xl'
			fontWeight='500'
		>
			{children}
		</Text>
	);
}
