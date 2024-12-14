import { For, Table as ChakraTable } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type DataProps = PropsWithChildren<{
	headers: string[];
}>;

export function TableData({ children, headers }: DataProps) {
	return (
		<ChakraTable.Root
			variant='outline'
			mt={4}
		>
			<ChakraTable.Header>
				<ChakraTable.Row>
					<For each={headers}>
						{(header) => <ChakraTable.ColumnHeader>{header}</ChakraTable.ColumnHeader>}
					</For>
				</ChakraTable.Row>
			</ChakraTable.Header>
			<ChakraTable.Body>{children}</ChakraTable.Body>
		</ChakraTable.Root>
	);
}
