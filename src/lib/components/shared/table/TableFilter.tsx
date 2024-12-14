import { PropsWithChildren } from 'react';
import { Container, Flex, Grid, Text } from '@chakra-ui/react';
import { PrimaryButton } from '@lib/components';

type FilterProps = PropsWithChildren;

export function TableFilter({ children }: FilterProps) {
	return (
		<Container
			bgColor='white'
			borderRadius='5px'
			py={5}
			mt={5}
		>
			<Text fontSize='sm'>Tìm kiếm theo</Text>
			<Grid
				my={4}
				templateColumns='repeat(3, 1fr)'
				gap='6'
			>
				{children}
			</Grid>
			<Flex justifyContent='end'>
				<Flex gap={2}>
					<PrimaryButton
						size='xs'
						variant='outline'
					>
						Làm mới
					</PrimaryButton>
					<PrimaryButton size='xs'>Tìm kiếm</PrimaryButton>
				</Flex>
			</Flex>
		</Container>
	);
}
