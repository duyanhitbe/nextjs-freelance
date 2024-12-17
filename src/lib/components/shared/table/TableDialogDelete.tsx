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
	DialogTrigger
} from '@lib/components';
import { IconButton } from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';

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
