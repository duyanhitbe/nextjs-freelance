'use client';

import { Box, Center, For, HStack, Link, Table as ChakraTable } from '@chakra-ui/react';
import { EmptyState, PrimarySpinner, Table, useTableContext } from '@lib/components';
import { ENUM_STATUS } from '@lib/enums';
import { get } from 'lodash';
import moment from 'moment';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import { TableField } from '../../../types';
import { FiPackage } from 'react-icons/fi';

type DataProps<T> = PropsWithChildren<{
	headers: string[];
	fields: TableField<T>[];
	onUpdateStatus?: (id: string, status: ENUM_STATUS) => Promise<any>;
}>;

export function TableListData<T = any>({
	children,
	headers,
	fields,
	onUpdateStatus
}: DataProps<T>) {
	const { loadingData, data, setId } = useTableContext();

	if (loadingData) {
		return (
			<Center>
				<PrimarySpinner size='lg' />
			</Center>
		);
	}

	const onClickItem = (id: string) => {
		setId(id);
	};

	const getItem = (item: any, field: TableField<T>) => {
		const result = get(item, field.key);
		if (field.transform) {
			return field.transform(result, item);
		}
		if (field.type === 'date') {
			return moment(result).format('DD-MM-YYYY');
		}
		if (field.type === 'number') {
			return result.toLocaleString();
		}
		return result;
	};

	if (data.data.length === 0) {
		return (
			<EmptyState
				icon={<FiPackage />}
				title='Không có dữ liệu'
				description='Hiện tại không có dữ liệu để hiển thị. Vui lòng thêm mới hoặc kiểm tra lại các bộ lọc tìm kiếm'
			/>
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
							<ChakraTable.ColumnHeader
								key={header}
								fontWeight='600'
							>
								{header}
							</ChakraTable.ColumnHeader>
						)}
					</For>
					{onUpdateStatus && (
						<ChakraTable.ColumnHeader>Trạng thái</ChakraTable.ColumnHeader>
					)}
					<ChakraTable.ColumnHeader>Hành động</ChakraTable.ColumnHeader>
				</ChakraTable.Row>
			</ChakraTable.Header>

			<ChakraTable.Body>
				{data.data.map((item: any) => (
					<Table.Row key={get(item, 'id')}>
						{fields.map((field) => (
							<Table.Cell key={field.key as string}>
								{field.type === 'link' ? (
									<Link
										asChild
										colorPalette='primary'
									>
										<NextLink href={field.link ? field.link(item) : ''}>
											{getItem(item, field)}
										</NextLink>
									</Link>
								) : (
									getItem(item, field)
								)}
							</Table.Cell>
						))}
						{onUpdateStatus && (
							<Table.Cell>
								<Box onClick={() => setId(get(item, 'id'))}>
									<Table.DialogUpdateStatus
										status={getItem(item, {
											key: 'status' as keyof T,
											type: 'boolean'
										})}
										onUpdateStatus={onUpdateStatus}
									/>
								</Box>
							</Table.Cell>
						)}
						<Table.Cell>
							<HStack
								gap={1}
								onClick={() => onClickItem(get(item, 'id'))}
							>
								{children}
							</HStack>
						</Table.Cell>
					</Table.Row>
				))}
			</ChakraTable.Body>
		</ChakraTable.Root>
	);
}
