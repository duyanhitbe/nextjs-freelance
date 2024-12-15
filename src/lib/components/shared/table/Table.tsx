import { Container, Table as ChakraTable } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { TableTitle } from './TableTitle';
import { TableFilter } from './TableFilter';
import { TableList } from './TableList';
import { TablePagination } from './TablePagination';
import { TableData } from './TableData';
import { TableDialog } from './TableDialog';
import { DialogRoot } from '@lib/components';

type TableProps = PropsWithChildren;

export function Table({ children }: TableProps) {
	return (
		<Container>
			<DialogRoot
				size='lg'
				placement='center'
			>
				{children}
			</DialogRoot>
		</Container>
	);
}

Table.Title = TableTitle;
Table.Filter = TableFilter;
Table.List = TableList;
Table.Data = TableData;
Table.Pagination = TablePagination;
Table.Dialog = TableDialog;
Table.Row = ChakraTable.Row;
Table.Cell = ChakraTable.Cell;
