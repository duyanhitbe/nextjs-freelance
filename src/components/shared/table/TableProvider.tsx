'use client';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { BaseFilter, BasePaginatedResponse, BaseResponse, TableColumn } from '@app/types';
import { message } from 'antd';
import { get } from 'lodash';

type TableContextType = {
	openModalCreate: boolean;
	setOpenModalCreate: React.Dispatch<React.SetStateAction<boolean>>;

	openModalUpdate: boolean;
	setOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;

	openModalDelete: boolean;
	setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;

	filter: BaseFilter;
	setFilter: React.Dispatch<React.SetStateAction<BaseFilter>>;

	formData: any;
	setFormData: React.Dispatch<React.SetStateAction<any>>;

	selectedItem: any;
	setSelectedItem: React.Dispatch<React.SetStateAction<any>>;

	loadingTable: boolean;
	setLoadingTable: React.Dispatch<React.SetStateAction<boolean>>;

	loadingCreate: boolean;
	setLoadingCreate: React.Dispatch<React.SetStateAction<boolean>>;

	loadingUpdate: boolean;
	setLoadingUpdate: React.Dispatch<React.SetStateAction<boolean>>;

	loadingDelete: boolean;
	setLoadingDelete: React.Dispatch<React.SetStateAction<boolean>>;

	handleFetch: () => void;
	handleReset: () => void;
	handleCreate: () => void;
	handleUpdate: () => void;
	handleDelete: () => void;
	handleFetchDetail: (id: string) => void;

	data: BasePaginatedResponse<any> | null;
	columns: TableColumn;
};

type ProviderProps = PropsWithChildren<{
	columns: TableColumn;
	findAction: (filter: BaseFilter) => Promise<BasePaginatedResponse<any>>;
	findDetailAction: (id: string) => Promise<BaseResponse<any>>;
	createAction: (data: any) => Promise<BaseResponse<any>>;
	updateAction: (id: string, data: any) => Promise<BaseResponse<any>>;
	deleteAction: (id: string) => Promise<BaseResponse<any>>;
}>;

export const TableContext = createContext<TableContextType>({
	openModalCreate: false,
	setOpenModalCreate: () => {},
	openModalUpdate: false,
	setOpenModalUpdate: () => {},
	openModalDelete: false,
	setOpenModalDelete: () => {},
	filter: {},
	setFilter: () => {},
	formData: {},
	setFormData: () => {},
	selectedItem: {},
	setSelectedItem: () => {},
	loadingTable: false,
	setLoadingTable: () => {},
	loadingCreate: false,
	setLoadingCreate: () => {},
	loadingUpdate: false,
	setLoadingUpdate: () => {},
	loadingDelete: false,
	setLoadingDelete: () => {},
	handleFetch: () => {},
	handleReset: () => {},
	handleCreate: () => {},
	handleUpdate: () => {},
	handleDelete: () => {},
	handleFetchDetail: (id: string) => {},
	data: null,
	columns: []
});

export const useTableContext = () => useContext(TableContext);

export function TableProvider({
	children,
	columns,
	findAction,
	findDetailAction,
	createAction,
	updateAction,
	deleteAction
}: ProviderProps) {
	const [messageApi, contextHolder] = message.useMessage();
	const [openModalCreate, setOpenModalCreate] = useState(false);
	const [openModalUpdate, setOpenModalUpdate] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [loadingTable, setLoadingTable] = useState(false);
	const [loadingCreate, setLoadingCreate] = useState(false);
	const [loadingUpdate, setLoadingUpdate] = useState(false);
	const [loadingDelete, setLoadingDelete] = useState(false);
	const [data, setData] = useState<BasePaginatedResponse<any> | null>(null);
	const [filter, setFilter] = useState<BaseFilter>({
		search: '',
		page: 1,
		limit: 10
	});
	const [formData, setFormData] = useState<any>({});
	const [selectedItem, setSelectedItem] = useState<any>({});

	const fetch = async (filter: BaseFilter) => {
		setLoadingTable(true);
		try {
			return await findAction(filter);
		} catch (e) {
			const errors = get(e, 'response.data.errors');
			messageApi.open({
				type: 'error',
				content: errors
			});
			return null;
		}
	};

	const handleFetch = () => {
		setLoadingTable(true);
		fetch(filter)
			.then((data) => setData(data))
			.finally(() => setLoadingTable(false));
	};

	const fetchDetail = async (id: string) => {
		try {
			const res = await findDetailAction(id);
			return res.data;
		} catch (e) {
			const errors = get(e, 'response.data.errors');
			messageApi.open({
				type: 'error',
				content: errors
			});
		}
	};

	const handleFetchDetail = (id: string) => {
		fetchDetail(id).then((data) => setSelectedItem(data));
	};

	const create = async (data: any) => {
		try {
			const res = await createAction(data);
			messageApi.open({
				type: 'success',
				content: 'Tạo mới thành công'
			});
			return res;
		} catch (e) {
			const errors = get(e, 'response.data.errors');
			messageApi.open({
				type: 'error',
				content: errors
			});
		}
	};

	const handleCreate = () => {
		setLoadingCreate(true);
		create(formData)
			.then(() => {
				setLoadingCreate(false);
				setOpenModalCreate(false);
				setFormData({});
			})
			.finally(() => handleReset());
	};

	const updateData = async (id: string, data: any) => {
		try {
			const res = await updateAction(id, data);
			messageApi.open({
				type: 'success',
				content: 'Cập nhật thành công'
			});
			return res;
		} catch (e) {
			const errors = get(e, 'response.data.errors');
			messageApi.open({
				type: 'error',
				content: errors
			});
		}
	};

	const handleUpdate = () => {
		setLoadingUpdate(true);
		updateData(selectedItem.id, {
			...selectedItem,
			...formData
		})
			.then(() => {
				setOpenModalUpdate(false);
				setLoadingUpdate(false);
				setFormData({});
			})
			.finally(() => handleReset());
	};

	const deleteData = async (id: string) => {
		try {
			const res = await deleteAction(id);
			messageApi.open({
				type: 'success',
				content: 'Xoá dữ liệu thành công'
			});
			return res;
		} catch (e) {
			const errors = get(e, 'response.data.errors');
			messageApi.open({
				type: 'error',
				content: errors
			});
		}
	};

	const handleDelete = () => {
		setLoadingDelete(true);
		deleteData(selectedItem.id)
			.then(() => {
				setOpenModalDelete(false);
				setLoadingDelete(false);
			})
			.finally(() => handleReset());
	};

	const handleReset = () => {
		setLoadingTable(true);
		setFilter({});
		fetch({})
			.then((data) => setData(data))
			.finally(() => setLoadingTable(false));
	};

	useEffect(() => {
		handleFetch();
	}, []);

	useEffect(() => {
		setFormData(selectedItem);
	}, [selectedItem]);

	useEffect(() => {
		if (!openModalCreate || !openModalUpdate || !openModalDelete) {
			setFormData({});
		}
	}, [openModalCreate, openModalUpdate, openModalDelete]);

	return (
		<TableContext.Provider
			value={{
				openModalCreate,
				setOpenModalCreate,

				openModalUpdate,
				setOpenModalUpdate,

				openModalDelete,
				setOpenModalDelete,

				formData,
				setFormData,

				selectedItem,
				setSelectedItem,

				filter,
				setFilter,

				loadingTable,
				setLoadingTable,

				loadingCreate,
				setLoadingCreate,

				loadingUpdate,
				setLoadingUpdate,

				loadingDelete,
				setLoadingDelete,

				data,
				columns,

				handleFetch,
				handleReset,
				handleCreate,
				handleUpdate,
				handleDelete,
				handleFetchDetail
			}}>
			{contextHolder}
			{children}
		</TableContext.Provider>
	);
}
