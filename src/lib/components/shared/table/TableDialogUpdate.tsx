'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import {
	DialogActionTrigger,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
	errorToast,
	PrimaryButton,
	successToast,
	useTableContext
} from '@lib/components';
import { Center, IconButton, Spinner } from '@chakra-ui/react';
import { FiEdit3 } from 'react-icons/fi';
import { Form, Formik, FormikHelpers } from 'formik';
import { getAxiosError } from '@lib/helpers';

type DialogUpdateProps<T = any> = PropsWithChildren<{
	title?: string;
	validationSchema: any;
	onUpdate: (id: string, values: T) => Promise<any>;
	successMessage?: string;
	failureMessage?: string;
}>;

export function TableDialogUpdate<T = any>({
	children,
	title,
	validationSchema,
	onUpdate,
	successMessage,
	failureMessage
}: DialogUpdateProps<T>) {
	const { id, fetchData, fetchDetail } = useTableContext();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [initialValues, setInitialValues] = useState<T | null>(null);

	const onSubmit = (values: T, helpers: FormikHelpers<NonNullable<T>>) => {
		setLoading(true);
		onUpdate(id, values)
			.then(() => {
				setLoading(false);
				successToast(successMessage || 'Cập nhật thành công');
				setOpen(false);
				fetchData();
				helpers.resetForm();
			})
			.catch((err) => {
				const message = getAxiosError(err);
				errorToast(failureMessage || 'Cập nhật thất bại', message!);
			});
	};

	useEffect(() => {
		if (open) {
			fetchDetail(id).then((res) => setInitialValues(res.data));
		}
	}, [open]);

	return (
		<DialogRoot
			placement='center'
			size='lg'
			open={open}
			onOpenChange={({ open }) => setOpen(open)}
		>
			<DialogTrigger asChild>
				<IconButton
					variant='ghost'
					colorPalette='blue'
					size='xs'
				>
					<FiEdit3 />
				</IconButton>
			</DialogTrigger>
			<DialogContent minH='100px'>
				{!initialValues ? (
					<Center minH='100px'>
						<Spinner />
					</Center>
				) : (
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{({ submitForm }) => (
							<Form>
								<DialogCloseTrigger />
								<DialogHeader>
									<DialogTitle>{title || 'Cập nhật'}</DialogTitle>
								</DialogHeader>
								<DialogBody>{children}</DialogBody>
								<DialogFooter>
									<DialogActionTrigger asChild>
										<PrimaryButton
											variant='outline'
											disabled={loading}
										>
											Huỷ bỏ
										</PrimaryButton>
									</DialogActionTrigger>
									<PrimaryButton onClick={() => submitForm()}>
										{loading ? <Spinner /> : 'Lưu'}
									</PrimaryButton>
								</DialogFooter>
							</Form>
						)}
					</Formik>
				)}
			</DialogContent>
		</DialogRoot>
	);
}
