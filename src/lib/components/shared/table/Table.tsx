'use client';

import { Container, Table as ChakraTable } from '@chakra-ui/react';
import { TableDialogCreate } from '@lib/components/shared/table/TableDialogCreate';
import { TableDialogDelete } from '@lib/components/shared/table/TableDialogDelete';
import { TableDialogUpdate } from '@lib/components/shared/table/TableDialogUpdate';
import { TableListData } from '@lib/components/shared/table/TableListData';
import { TableListHeader } from '@lib/components/shared/table/TableListHeader';
import { INITIAL_API_RESPONSE, INITIAL_SET_STATE_FUNCTION } from '@lib/constants';
import { ApiResponse, FetchDataParams } from '@lib/types';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useState
} from 'react';
import { TableFilter } from './TableFilter';
import { TableList } from './TableList';
import { TablePagination } from './TablePagination';
import { TableTitle } from './TableTitle';

export type TableContextType = {
	loadingData: boolean;
	setLoadingData: Dispatch<SetStateAction<boolean>>;
	data: ApiResponse<any>;
	setData: Dispatch<SetStateAction<ApiResponse<any>>>;
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	fetchData(params?: FetchDataParams): void;
};

const TableContext = createContext<TableContextType>({
	loadingData: false,
	setLoadingData: INITIAL_SET_STATE_FUNCTION,
	data: INITIAL_API_RESPONSE,
	setData: INITIAL_SET_STATE_FUNCTION,
	limit: 25,
	setLimit: INITIAL_SET_STATE_FUNCTION,
	page: 1,
	setPage: INITIAL_SET_STATE_FUNCTION,
	fetchData: () => {}
});

export const useTableContext = () => useContext(TableContext);

type TableProps<T> = PropsWithChildren<{
	initialData: ApiResponse<T[]>;
	fetchData: (params?: FetchDataParams) => Promise<ApiResponse<T[]>>;
}>;

export function Table<T = any>({ children, initialData, fetchData: onFetchData }: TableProps<T>) {
	const [data, setData] = useState(initialData);
	const [loadingData, setLoadingData] = useState(false);
	const [limit, setLimit] = useState(25);
	const [page, setPage] = useState(1);

	const fetchData = (params?: FetchDataParams) => {
		setLoadingData(true);
		onFetchData(params).then((res) => {
			setData(res);
			setLoadingData(false);
		});
	};

	return (
		<TableContext.Provider
			value={{
				loadingData,
				setLoadingData,
				data,
				setData,
				limit,
				setLimit,
				page,
				setPage,
				fetchData
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
