'use client';

import { Container, Flex, For, Grid, Text } from '@chakra-ui/react';
import {
	FieldInput,
	FieldSelect,
	FieldSelectAsync,
	PrimaryButton,
	useTableContext
} from '@lib/components';
import { Filter } from '@lib/types';
import { Form, Formik, FormikHelpers, useFormik } from 'formik';

type FilterProps = {
	filters: Filter[];
};

export function TableFilter({ filters }: FilterProps) {
	const { fetchData, limit, setPage } = useTableContext();
	const initialValues = filters.reduce((prev, next) => {
		return {
			...prev,
			[next.name]: ''
		};
	}, {});

	const onSubmit = async (values: any, helpers: FormikHelpers<any>) => {
		const page = 1;
		setPage(page);
		fetchData({
			...values,
			limit,
			page
		});
	};

	const formik = useFormik({
		initialValues,
		onSubmit
	});

	const onClear = async () => {
		formik.resetForm();
		await onSubmit(formik.values, {} as any);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
		>
			<Form>
				<Container
					bgColor='white'
					borderRadius='5px'
					py={5}
					mt={5}
				>
					<Text fontSize='sm'>Tìm kiếm theo</Text>
					<Grid
						my={4}
						templateColumns='repeat(3, 1fr)'
						gap='6'
					>
						<For each={filters}>
							{(filter) => (
								<TableFilterInput
									key={filter.name}
									filter={filter}
								/>
							)}
						</For>
					</Grid>
					<Flex justifyContent='end'>
						<Flex gap={2}>
							<PrimaryButton
								size='xs'
								variant='outline'
								onClick={onClear}
							>
								Làm mới
							</PrimaryButton>
							<PrimaryButton
								size='xs'
								type='submit'
							>
								Tìm kiếm
							</PrimaryButton>
						</Flex>
					</Flex>
				</Container>
			</Form>
		</Formik>
	);
}

type TableFilterInputProps = {
	filter: Filter;
};

function TableFilterInput({ filter }: TableFilterInputProps) {
	const { type, name, placeholder, collection, defaultValue, promise, fieldValue, fieldLabel } =
		filter;

	if (type === 'TEXT') {
		return (
			<FieldInput
				id={name}
				name={name}
				placeholder={placeholder}
			/>
		);
	}

	if (type === 'SELECT') {
		if (collection) {
			return (
				<FieldSelect
					id={name}
					name={name}
					collection={collection!}
					defaultValue={defaultValue}
					placeholder={placeholder}
				/>
			);
		}

		if (promise && fieldValue && fieldLabel) {
			return (
				<FieldSelectAsync
					id={name}
					name={name}
					defaultValue={defaultValue}
					placeholder={placeholder}
					promise={promise}
					fieldValue={fieldValue}
					fieldLabel={fieldLabel}
				/>
			);
		}
	}

	return <></>;
}
