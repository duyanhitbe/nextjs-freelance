import { PropsWithChildren } from 'react';
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
import { IconButton } from '@chakra-ui/react';
import { FiEdit3 } from 'react-icons/fi';

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
