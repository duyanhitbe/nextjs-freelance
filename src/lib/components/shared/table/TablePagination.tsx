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
	const { data, setPage, fetchData, limit, page, setLimit } = useTableContext();

	if (!data.data.length) return <></>;

	const onPageChange = (page: number) => {
		setPage(page);
		fetchData({ page, limit });
	};

	const onLimitChange = (limit: number) => {
		setPage(1);
		setLimit(limit);
		fetchData({ page: 1, limit });
	};

	return (
		<Flex
			justifyContent='end'
			alignItems='center'
			gap={4}
		>
			<PaginationRoot
				count={data.meta?.totalItem || 0}
				pageSize={data.meta?.limit || 25}
				page={data.meta?.page || 1}
				mt={4}
				fontSize='sm'
				onPageChange={({ page }) => onPageChange(page)}
			>
				<HStack wrap='wrap'>
					<PaginationPageText
						format='long'
						flex='1'
					/>
					<PaginationPrevTrigger />
					<PaginationItems />
					<PaginationNextTrigger />
					<select
						style={{
							border: '1px solid #d4d4d8',
							borderRadius: '3px',
							padding: '2px 4px'
						}}
						value={limit}
						onChange={(e) => onLimitChange(+e.target.value)}
					>
						<option value={25}>25 / trang</option>
						<option value={50}>50 / trang</option>
						<option value={75}>75 / trang</option>
						<option value={100}>100 / trang</option>
					</select>
				</HStack>
			</PaginationRoot>
		</Flex>
	);
}
