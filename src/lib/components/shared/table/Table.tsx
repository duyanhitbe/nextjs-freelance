'use client';

import { Container, Table as ChakraTable } from '@chakra-ui/react';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { TableTitle } from './TableTitle';
import { TableFilter } from './TableFilter';
import { TableList } from './TableList';
import { TablePagination } from './TablePagination';
import { TableListHeader } from '@lib/components/shared/table/TableListHeader';
import { TableDialogCreate } from '@lib/components/shared/table/TableDialogCreate';
import { TableDialogDelete } from '@lib/components/shared/table/TableDialogDelete';
import { TableDialogUpdate } from '@lib/components/shared/table/TableDialogUpdate';
import { ApiResponse } from '@lib/types';
import { INITIAL_API_RESPONSE } from '@lib/constants';
import { TableListData } from '@lib/components/shared/table/TableListData';

export type TableContextType = {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
	data: ApiResponse<any>;
	setData: Dispatch<SetStateAction<ApiResponse<any>>>;
};

export const TableContext = createContext<TableContextType>({
	loading: false,
	setLoading: () => {},
	data: INITIAL_API_RESPONSE,
	setData: () => {}
});

type TableProps<T> = PropsWithChildren<{
	data: ApiResponse<T[]>;
}>;

export function Table<T = any>({ children, data: propData }: TableProps<T>) {
	const [data, setData] = useState(propData);
	const [loading, setLoading] = useState(false);

	return (
		<TableContext.Provider
			value={{
				loading,
				setLoading,
				data,
				setData
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
Table.ListData = TableListData;
Table.Pagination = TablePagination;
Table.DialogCreate = TableDialogCreate;
Table.DialogDelete = TableDialogDelete;
Table.DialogUpdate = TableDialogUpdate;
Table.Row = ChakraTable.Row;
Table.Cell = ChakraTable.Cell;
