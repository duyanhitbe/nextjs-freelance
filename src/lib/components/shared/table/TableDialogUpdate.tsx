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
	PrimaryButton,
	useTableContext
} from '@lib/components';
import { IconButton } from '@chakra-ui/react';
import { FiEdit3 } from 'react-icons/fi';
import { Form, Formik } from 'formik';

type DialogUpdateProps = PropsWithChildren<{
	title?: string;
}>;

export function TableDialogUpdate({ children, title }: DialogUpdateProps) {
	return (
		<DialogRoot
			placement='center'
			size='lg'
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
			<DialogContent>
				<DialogCloseTrigger />
				<DialogHeader>
					<DialogTitle>{title || 'Update'}</DialogTitle>
				</DialogHeader>
				<FormUpdate onSubmit={() => {}}>{children}</FormUpdate>
			</DialogContent>
		</DialogRoot>
	);
}

type FormUpdateProps = PropsWithChildren<{
	validationSchema?: any;
	onSubmit: (values: any) => void;
}>;

function FormUpdate({ children, validationSchema, onSubmit }: FormUpdateProps) {
	const { id, fetchDetail } = useTableContext();
	const [initialValues, setInitialValues] = useState({});

	useEffect(() => {
		if (id) {
			fetchDetail(id).then((res) => {
				setInitialValues(res.data);
			});
		}
	}, [id]);

	console.log(initialValues);
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{() => (
				<Form>
					<DialogBody>{children}</DialogBody>
					<DialogFooter>
						<DialogActionTrigger asChild>
							<PrimaryButton variant='outline'>Huỷ bỏ</PrimaryButton>
						</DialogActionTrigger>
						<PrimaryButton>Lưu</PrimaryButton>
					</DialogFooter>
				</Form>
			)}
		</Formik>
	);
}
