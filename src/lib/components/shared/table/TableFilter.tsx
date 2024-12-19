'use client';
import { Container, Flex, For, Grid, Text } from '@chakra-ui/react';
import { FloatInput, PrimaryButton, useTableContext } from '@lib/components';
import { Filter } from '@lib/types';
import { FormikHelpers, useFormik } from 'formik';
import { ChangeEvent, PropsWithChildren } from 'react';

type FilterProps = PropsWithChildren<{
	filters: Filter[];
}>;

export function TableFilter({ children, filters }: FilterProps) {
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
		<>
			<form onSubmit={formik.handleSubmit}>
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
									value={(formik.values as any)[filter.name]}
									handleChange={formik.handleChange}
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
			</form>
			{children}
		</>
	);
}

type TableFilterInputProps = {
	filter: Filter;
	handleChange: {
		(e: ChangeEvent<any>): void;
		<T = string | ChangeEvent<any>>(
			field: T
		): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
	};
	value: any;
};

function TableFilterInput({ filter, value, handleChange }: TableFilterInputProps) {
	const { type, name, placeholder } = filter;

	if (type === 'TEXT') {
		return (
			<FloatInput
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
			>
				{placeholder}
			</FloatInput>
		);
	}

	return <></>;
}
