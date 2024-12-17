'use client';
import { Container, Table as ChakraTable } from '@chakra-ui/react';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { TableTitle } from './TableTitle';
import { TableFilter } from './TableFilter';
import { TableList } from './TableList';
import { TablePagination } from './TablePagination';
import { TableData } from './TableData';
import { TableListHeader } from '@lib/components/shared/table/TableListHeader';
import {
	TableDialogCreate,
	TableDialogDelete,
	TableDialogUpdate
} from '@lib/components/shared/table/TableDialog';

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
			<Container>{children}</Container>
		</TableContext.Provider>
	);
}

Table.Title = TableTitle;
Table.Filter = TableFilter;
Table.List = TableList;
Table.ListHeader = TableListHeader;
Table.Data = TableData;
Table.Pagination = TablePagination;
Table.DialogCreate = TableDialogCreate;
Table.DialogDelete = TableDialogDelete;
Table.DialogUpdate = TableDialogUpdate;
Table.Row = ChakraTable.Row;
Table.Cell = ChakraTable.Cell;
