'use client';
import { Center, For, HStack, Spinner, Table as ChakraTable } from '@chakra-ui/react';
import { PropsWithChildren, useContext } from 'react';
import { Table, TableContext } from '@lib/components';
import { get } from 'lodash';

type DataProps = PropsWithChildren<{
	headers: string[];
	keys: string[];
}>;

export function TableListData({ children, headers, keys }: DataProps) {
	const {
		loading,
		data: { data }
	} = useContext(TableContext);

	if (loading) {
		return (
			<Center>
				<Spinner
					color='primary'
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
				{data.map((item: any) => (
					<Table.Row key={get(item, 'id')}>
						<For each={keys as string[]}>
							{(key) => <Table.Cell key={key}>{get(item, key)}</Table.Cell>}
						</For>
						<Table.Cell>
							<HStack gap={1}>{children}</HStack>
						</Table.Cell>
					</Table.Row>
				))}
			</ChakraTable.Body>
		</ChakraTable.Root>
	);
}