'use client';
import { Center, For, HStack, IconButton, Spinner, Table as ChakraTable } from '@chakra-ui/react';
import { PropsWithChildren, useContext } from 'react';
import { Table, TableContext } from '@lib/components';
import { get } from 'lodash';
import { FiEdit3, FiTrash } from 'react-icons/fi';

type DataProps<T> = PropsWithChildren<{
	headers: string[];
	keys: (keyof T)[];
	data: T[];
}>;

export function TableData<T = any>({ headers, keys, data }: DataProps<T>) {
	const { loading } = useContext(TableContext);

	if (loading) {
		return (
			<Center>
				<Spinner
					color='teal.500'
					size='lg'
				/>
			</Center>
		);
	}

	return (
		<ChakraTable.Root
			variant='outline'
			mt={4}
		>
			<ChakraTable.Header>
				<ChakraTable.Row>
					<For each={headers}>
						{(header) => (
							<ChakraTable.ColumnHeader key={header}>
								{header}
							</ChakraTable.ColumnHeader>
						)}
					</For>
					<ChakraTable.ColumnHeader>Hành động</ChakraTable.ColumnHeader>
				</ChakraTable.Row>
			</ChakraTable.Header>

			<ChakraTable.Body>
				{data.map((item) => (
					<Table.Row key={get(item, 'id')}>
						<For each={keys as string[]}>
							{(key) => <Table.Cell key={key}>{get(item, key)}</Table.Cell>}
						</For>
						<Table.Cell>
							<HStack gap={1}>
								<IconButton
									variant='ghost'
									colorPalette='blue'
									size='xs'
								>
									<FiEdit3 />
								</IconButton>
								<IconButton
									variant='ghost'
									colorPalette='red'
									size='xs'
								>
									<FiTrash />
								</IconButton>
							</HStack>
						</Table.Cell>
					</Table.Row>
				))}
			</ChakraTable.Body>
		</ChakraTable.Root>
	);
}
