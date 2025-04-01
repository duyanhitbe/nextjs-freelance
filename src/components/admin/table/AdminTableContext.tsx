'use client';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { BaseFilter, BasePaginatedResponse, BaseResponse, TableColumn } from '@app/types';
import { message } from 'antd';
import { get } from 'lodash';

type AdminTableContextType = {
	openModalCreate: boolean;
	setOpenModalCreate: React.Dispatch<React.SetStateAction<boolean>>;

	openModalUpdate: boolean;
	setOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;

	openModalDelete: boolean;
	setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;

	filter: BaseFilter;
	setFilter: React.Dispatch<React.SetStateAction<BaseFilter>>;

	creationData: any;
	setCreationData: React.Dispatch<React.SetStateAction<any>>;

	updatedData: any;
	setUpdatedData: React.Dispatch<React.SetStateAction<any>>;

	selectedItem: any;
	setSelectedItem: React.Dispatch<React.SetStateAction<any>>;

	handleFetch: () => void;
	handleReset: () => void;
	handleCreate: () => void;
	handleUpdate: () => void;
	handleDelete: () => void;
	handleFetchDetail: (id: string) => void;

	data: BasePaginatedResponse<any> | null;
	columns: TableColumn;

	loadingTable: boolean;
};

type ProviderProps = PropsWithChildren<{
	columns: TableColumn;
	findAction: (filter: BaseFilter) => Promise<BasePaginatedResponse<any>>;
	findDetailAction: (id: string) => Promise<BaseResponse<any>>;
	createAction: (data: any) => Promise<BaseResponse<any>>;
	updateAction: (id: string, data: any) => Promise<BaseResponse<any>>;
	deleteAction: (id: string) => Promise<BaseResponse<any>>;
}>;

export const AdminTableContext = createContext<AdminTableContextType>({
	openModalCreate: false,
	setOpenModalCreate: () => {},
	openModalUpdate: false,
	setOpenModalUpdate: () => {},
	openModalDelete: false,
	setOpenModalDelete: () => {},
	filter: {},
	setFilter: () => {},
	creationData: {},
	setCreationData: () => {},
	updatedData: {},
	setUpdatedData: () => {},
	selectedItem: {},
	setSelectedItem: () => {},
	handleFetch: () => {},
	handleReset: () => {},
	handleCreate: () => {},
	handleUpdate: () => {},
	handleDelete: () => {},
	handleFetchDetail: (id: string) => {},
	data: null,
	columns: [],
	loadingTable: false
});

export const useAdminTableContext = () => useContext(AdminTableContext);

export function AdminTableProvider({
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
	const [data, setData] = useState<BasePaginatedResponse<any> | null>(null);
	const [filter, setFilter] = useState<BaseFilter>({
		search: '',
		page: 1,
		limit: 10
	});
	const [creationData, setCreationData] = useState<any>({});
	const [updatedData, setUpdatedData] = useState<any>({});
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
		setLoadingTable(true);
		create(createAction)
			.then(() => setOpenModalCreate(false))
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
		setLoadingTable(true);
		updateData(selectedItem.id, updatedData)
			.then(() => setOpenModalUpdate(false))
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
		setLoadingTable(true);
		deleteData(selectedItem.id)
			.then(() => setOpenModalDelete(false))
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

	return (
		<AdminTableContext.Provider
			value={{
				openModalCreate,
				setOpenModalCreate,

				openModalUpdate,
				setOpenModalUpdate,

				openModalDelete,
				setOpenModalDelete,

				creationData,
				setCreationData,

				updatedData,
				setUpdatedData,

				selectedItem,
				setSelectedItem,

				filter,
				setFilter,

				data,
				columns,

				loadingTable,

				handleFetch,
				handleReset,
				handleCreate,
				handleUpdate,
				handleDelete,
				handleFetchDetail
			}}>
			{contextHolder}
			{children}
		</AdminTableContext.Provider>
	);
}
