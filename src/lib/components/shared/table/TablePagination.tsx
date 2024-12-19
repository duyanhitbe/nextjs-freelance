'use client';

import { Flex, HStack } from '@chakra-ui/react';
import {
	PaginationItems,
	PaginationNextTrigger,
	PaginationPageText,
	PaginationPrevTrigger,
	PaginationRoot,
	useTableContext
} from '@lib/components';

type PaginationProps = {};

export function TablePagination({}: PaginationProps) {
	const { data } = useTableContext();

	return (
		<Flex
			justifyContent='end'
			alignItems='center'
		>
			<PaginationRoot
				count={data.meta?.totalItem || 0}
				pageSize={data.meta?.limit || 25}
				page={data.meta?.page || 1}
				mt={4}
				fontSize='sm'
			>
				<HStack wrap='wrap'>
					<PaginationPageText
						format='long'
						flex='1'
					/>
					<PaginationPrevTrigger />
					<PaginationItems />
					<PaginationNextTrigger />
				</HStack>
			</PaginationRoot>
		</Flex>
	);
}
