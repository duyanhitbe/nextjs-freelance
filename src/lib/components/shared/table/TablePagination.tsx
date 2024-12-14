import { Flex, HStack } from '@chakra-ui/react';
import {
	PaginationItems,
	PaginationNextTrigger,
	PaginationPageText,
	PaginationPrevTrigger,
	PaginationRoot
} from '@lib/components';
import { ApiResponseMeta } from '@lib/types';

type PaginationProps = {
	count?: number;
	pageSize?: number;
	page?: number;
	meta?: ApiResponseMeta;
};

export function TablePagination({ count, pageSize, page, meta }: PaginationProps) {
	return (
		<Flex
			justifyContent='end'
			alignItems='center'
		>
			<PaginationRoot
				count={meta?.totalItem || count || 0}
				pageSize={meta?.limit || pageSize || 25}
				page={meta?.page || page || 1}
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
