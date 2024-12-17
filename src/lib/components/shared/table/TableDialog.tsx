import { PropsWithChildren } from 'react';
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
	PrimaryButton
} from '@lib/components';
import { IconButton } from '@chakra-ui/react';
import { FiEdit3, FiPlus, FiTrash } from 'react-icons/fi';

type DialogCreateProps = PropsWithChildren<{
	title?: string;
	dialogTitle?: string;
}>;

export function TableDialogCreate({ children, title, dialogTitle }: DialogCreateProps) {
	return (
		<DialogRoot
			placement='center'
			size='lg'
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
					<PrimaryButton>Lưu</PrimaryButton>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	);
}

type DialogDeleteProps = PropsWithChildren<{
	title?: string;
	description?: string;
}>;

export function TableDialogDelete({ title, description }: DialogDeleteProps) {
	return (
		<DialogRoot
			role='alertdialog'
			placement='center'
			size='sm'
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
						<Button variant='outline'>Huỷ bỏ</Button>
					</DialogActionTrigger>
					<Button colorPalette='red'>Xoá</Button>
				</DialogFooter>
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
}

type DialogUpdateProps = PropsWithChildren<{
	title?: string;
}>;

export function TableDialogUpdate({ title }: DialogUpdateProps) {
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
				<DialogBody></DialogBody>
				<DialogFooter>
					<DialogActionTrigger asChild>
						<PrimaryButton variant='outline'>Huỷ bỏ</PrimaryButton>
					</DialogActionTrigger>
					<PrimaryButton>Lưu</PrimaryButton>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	);
}
