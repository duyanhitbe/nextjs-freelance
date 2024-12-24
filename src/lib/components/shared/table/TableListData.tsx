'use client';

import { Box, Center, For, HStack, Table as ChakraTable } from '@chakra-ui/react';
import { PrimarySpinner, Table, useTableContext } from '@lib/components';
import { get } from 'lodash';
import { PropsWithChildren } from 'react';
import { isISODate } from '@lib/helpers';
import moment from 'moment';

type DataProps = PropsWithChildren<{
	headers: string[];
	keys: string[];
	onUpdateStatus?: (id: string, status: 'ACTIVE' | 'INACTIVE') => Promise<any>;
}>;

export function TableListData({ children, headers, keys, onUpdateStatus }: DataProps) {
	const { loadingData, data, setId } = useTableContext();

	if (loadingData) {
		return (
			<Center>
				<PrimarySpinner size='lg' />
			</Center>
		);
	}

	const onClickItem = (id: string) => {
		setId(id);
	};

	const getItem = (item: any, key: string) => {
		const result = get(item, key);
		if (isISODate(result)) {
			return moment(result).format('DD-MM-YYYY');
		}
		if (typeof result === 'number') {
			return result.toLocaleString();
		}
		return result;
	};

	return (
		<ChakraTable.Root
			variant='outline'
			mt={4}
		>
			<ChakraTable.Header>
				<ChakraTable.Row>
					<For each={headers}>
						{(header) => (
							<ChakraTable.ColumnHeader
								key={header}
								fontWeight='600'
							>
								{header}
							</ChakraTable.ColumnHeader>
						)}
					</For>
					{onUpdateStatus && (
						<ChakraTable.ColumnHeader>Trạng thái</ChakraTable.ColumnHeader>
					)}
					<ChakraTable.ColumnHeader>Hành động</ChakraTable.ColumnHeader>
				</ChakraTable.Row>
			</ChakraTable.Header>

			<ChakraTable.Body>
				{data.data.map((item: any) => (
					<Table.Row key={get(item, 'id')}>
						<For each={keys as string[]}>
							{(key) => <Table.Cell key={key}>{getItem(item, key)}</Table.Cell>}
						</For>
						{onUpdateStatus && (
							<Table.Cell>
								<Box onClick={() => setId(get(item, 'id'))}>
									<Table.DialogUpdateStatus
										status={getItem(item, 'status')}
										onUpdateStatus={onUpdateStatus}
									/>
								</Box>
							</Table.Cell>
						)}
						<Table.Cell>
							<HStack
								gap={1}
								onClick={() => onClickItem(get(item, 'id'))}
							>
								{children}
							</HStack>
						</Table.Cell>
					</Table.Row>
				))}
			</ChakraTable.Body>
		</ChakraTable.Root>
	);
}
