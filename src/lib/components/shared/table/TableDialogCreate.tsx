'use client';

import { PropsWithChildren, useState } from 'react';
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
import { FiPlus } from 'react-icons/fi';
import { Spinner } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

type DialogCreateProps = PropsWithChildren<{
	title?: string;
	dialogTitle?: string;
	initialValues: any;
	validationSchema?: any;
	onCreate: (values: any) => Promise<any>;
	successMessage?: string;
	failureMessage?: string;
}>;

export function TableDialogCreate({
	children,
	title,
	dialogTitle,
	initialValues,
	validationSchema,
	onCreate,
	successMessage,
	failureMessage
}: DialogCreateProps) {
	const { fetchData } = useTableContext();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const onSubmit = (values: any) => {
		setLoading(true);
		onCreate(values)
			.then(() => {
				setLoading(false);
				setOpen(false);
				fetchData();
				successToast(successMessage || 'Tạo thành công');
			})
			.catch((err) => {
				const message = err.response?.data?.errors;
				setLoading(false);
				errorToast(failureMessage || 'Tạo thất bại', message);
			});
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ submitForm, resetForm }) => (
				<Form>
					<DialogRoot
						placement='center'
						size='lg'
						open={open}
						onOpenChange={({ open }) => {
							setOpen(open);
							resetForm();
						}}
					>
						<DialogTrigger asChild>
							<PrimaryButton size='xs'>
								<FiPlus /> {title || 'Tạo mới'}
							</PrimaryButton>
						</DialogTrigger>
						<DialogContent>
							<DialogCloseTrigger />
							<DialogHeader>
								<DialogTitle>{dialogTitle || 'Create'}</DialogTitle>
							</DialogHeader>
							<DialogBody>{children}</DialogBody>
							<DialogFooter>
								<DialogActionTrigger asChild>
									<PrimaryButton variant='outline'>Huỷ bỏ</PrimaryButton>
								</DialogActionTrigger>
								<PrimaryButton onClick={submitForm}>
									{loading ? <Spinner /> : 'Lưu'}
								</PrimaryButton>
							</DialogFooter>
						</DialogContent>
					</DialogRoot>
				</Form>
			)}
		</Formik>
	);
}
