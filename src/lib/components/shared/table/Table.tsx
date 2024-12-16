'use client';
import { Container, Table as ChakraTable } from '@chakra-ui/react';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { TableTitle } from './TableTitle';
import { TableFilter } from './TableFilter';
import { TableList } from './TableList';
import { TablePagination } from './TablePagination';
import { TableData } from './TableData';
import { TableDialog } from './TableDialog';
import { DialogRoot } from '@lib/components';

export type TableContextType = {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
};

export const TableContext = createContext<TableContextType>({
	loading: false,
	setLoading: () => {}
});

type TableProps = PropsWithChildren;

export function Table({ children }: TableProps) {
	const [loading, setLoading] = useState(false);

	return (
		<TableContext.Provider
			value={{
				loading,
				setLoading
			}}
		>
			<Container>
				<DialogRoot
					size='lg'
					placement='center'
				>
					{children}
				</DialogRoot>
			</Container>
		</TableContext.Provider>
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
