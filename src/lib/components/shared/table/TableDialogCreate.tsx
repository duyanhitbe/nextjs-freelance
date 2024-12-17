'use client';

import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
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
	PrimaryButton
} from '@lib/components';
import { FiPlus } from 'react-icons/fi';
import { Spinner } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

type DialogCreateProps = PropsWithChildren<{
	title?: string;
	dialogTitle?: string;
	onSave?: () => void;
	onCancel?: () => void;
	loading?: boolean;
	openDialog?: boolean;
	setOpenDialog: Dispatch<SetStateAction<boolean>>;
}>;

export function TableDialogCreate({
	children,
	title,
	dialogTitle,
	onSave,
	onCancel,
	loading,
	openDialog,
	setOpenDialog
}: DialogCreateProps) {
	const { resetForm } = useFormikContext();

	const onOpenChange = ({ open }: { open: boolean }) => {
		setOpenDialog(open);
		if (!open) {
			resetForm();
		}
	};

	return (
		<DialogRoot
			placement='center'
			size='lg'
			open={openDialog}
			onOpenChange={onOpenChange}
		>
			<DialogTrigger asChild>
				<PrimaryButton size='xs'>
					<FiPlus /> {title || 'Tạo mới'}
				</PrimaryButton>
			</DialogTrigger>
			<DialogContent>
				<DialogCloseTrigger onClick={onCancel} />
				<DialogHeader>
					<DialogTitle>{dialogTitle || 'Create'}</DialogTitle>
				</DialogHeader>
				<DialogBody>{children}</DialogBody>
				<DialogFooter>
					<DialogActionTrigger asChild>
						<PrimaryButton
							variant='outline'
							onClick={onCancel}
							disabled={loading}
						>
							Huỷ bỏ
						</PrimaryButton>
					</DialogActionTrigger>
					<PrimaryButton onClick={onSave}>{loading ? <Spinner /> : 'Lưu'}</PrimaryButton>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	);
}
