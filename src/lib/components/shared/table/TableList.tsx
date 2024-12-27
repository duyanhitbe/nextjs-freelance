'use client';

import { PropsWithChildren } from 'react';
import { Center, Container, Text, VStack } from '@chakra-ui/react';
import { useTableContext } from './Table';
import { FiPackage } from 'react-icons/fi';

type ListProps = PropsWithChildren<{}>;

export function TableList({ children }: ListProps) {
	const { data } = useTableContext();

	return (
		<Container
			bgColor='white'
			borderRadius='5px'
			py={5}
			mt={5}
		>
			{data.data.length > 0 && children}
			{data.data.length === 0 && (
				<Center color='gray.300'>
					<VStack>
						<FiPackage size={100} />
						<Text
							fontSize='2xl'
							fontWeight='550'
						>
							Không có dữ liệu
						</Text>
					</VStack>
				</Center>
			)}
		</Container>
	);
}
