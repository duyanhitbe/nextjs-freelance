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

export type TableContextType<T = any> = {
	loadingData: boolean;
	setLoadingData: Dispatch<SetStateAction<boolean>>;
	data: ApiResponse<T[]>;
	setData: Dispatch<SetStateAction<ApiResponse<T[]>>>;
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	id: string;
	setId: Dispatch<SetStateAction<string>>;
	fetchData(params?: FetchDataParams): void;
	fetchDetail(id: string): Promise<ApiResponse<T>>;
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
	id: '',
	setId: INITIAL_SET_STATE_FUNCTION,
	fetchData: () => {},
	fetchDetail: async () => INITIAL_API_RESPONSE
});

export const useTableContext = <T = any,>() => useContext<TableContextType<T>>(TableContext);

type TableProps<T> = PropsWithChildren<{
	initialData: ApiResponse<T[]>;
	fetchData: (params?: FetchDataParams) => Promise<ApiResponse<T[]>>;
	fetchDetail: (id: string) => Promise<ApiResponse<T>>;
}>;

export function Table<T = any>({
	children,
	initialData,
	fetchData: onFetchData,
	fetchDetail
}: TableProps<T>) {
	const [id, setId] = useState('');
	const [data, setData] = useState(initialData);
	const [loadingData, setLoadingData] = useState(false);
	const [limit, setLimit] = useState(25);
	const [page, setPage] = useState(1);

	const fetchData = (params?: FetchDataParams) => {
		setLoadingData(true);
		onFetchData(params)
			.then((res) => {
				setData(res);
				setLoadingData(false);
			})
			.catch(() => {
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
				id,
				setId,
				fetchData,
				fetchDetail
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
