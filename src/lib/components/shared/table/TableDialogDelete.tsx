'use client';

import { PropsWithChildren, useState } from 'react';
import {
	Button,
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
	PrimarySpinner,
	successToast,
	useTableContext
} from '@lib/components';
import { IconButton } from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';
import { getAxiosError } from '@lib/helpers';

type DialogDeleteProps = PropsWithChildren<{
	title?: string;
	description?: string;
	onDelete: (id: string) => Promise<any>;
	successMessage?: string;
	failureMessage?: string;
}>;

export function TableDialogDelete({
	title,
	description,
	onDelete,
	successMessage,
	failureMessage
}: DialogDeleteProps) {
	const { id, fetchData } = useTableContext();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const onClickDelete = () => {
		setLoading(true);
		onDelete(id)
			.then(() => {
				setLoading(false);
				fetchData();
				successToast(successMessage || 'Xoá thành công');
			})
			.catch((err) => {
				const message = getAxiosError(err);
				setLoading(false);
				errorToast(failureMessage || 'Xoá thất bại', message!);
			});
	};

	return (
		<DialogRoot
			role='alertdialog'
			placement='center'
			size='sm'
			open={open}
			onOpenChange={({ open }) => setOpen(open)}
		>
			<DialogTrigger asChild>
				<IconButton
					variant='ghost'
					colorPalette='red'
					size='xs'
				>
					<FiTrash />
				</IconButton>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title || 'Bạn có chắc là muốn xoá không?'}</DialogTitle>
				</DialogHeader>
				<DialogBody>
					<p>{description || 'Dữ liệu sẽ bị xoá khỏi hệ thống.'}</p>
				</DialogBody>
				<DialogFooter>
					<DialogActionTrigger asChild>
						<Button
							variant='outline'
							disabled={loading}
						>
							Huỷ bỏ
						</Button>
					</DialogActionTrigger>
					<Button
						colorPalette='red'
						onClick={onClickDelete}
					>
						{loading ? <PrimarySpinner /> : 'Xoá'}
					</Button>
				</DialogFooter>
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
}
