'use client';

import {
	Button,
	DialogActionTrigger,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	PrimaryButton,
	Switch,
	useTableContext
} from '@lib/components';
import { Spinner } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
	status: 'ACTIVE' | 'INACTIVE';
	onUpdateStatus?: (id: string, status: 'ACTIVE' | 'INACTIVE') => Promise<any>;
};

export function TableDialogUpdateStatus({ status, onUpdateStatus }: Props) {
	const { id, fetchData } = useTableContext();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const onClickUpdate = () => {
		setLoading(true);
		if (onUpdateStatus) {
			const updatedStatus = status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
			onUpdateStatus(id, updatedStatus).then(() => {
				setLoading(false);
				setOpen(false);
				fetchData();
			});
		}
	};

	return (
		<DialogRoot
			role='alertdialog'
			placement='center'
			size='sm'
			open={open}
			onOpenChange={({ open }) => setOpen(open)}
		>
			<Switch
				checked={status === 'ACTIVE'}
				colorPalette='blue'
				onClick={() => setOpen(true)}
			/>
			<DialogContent>
				<DialogHeader>
					<DialogTitle fontSize='md'>
						Bạn có chắc là muốn cập nhật trạng thái không?
					</DialogTitle>
				</DialogHeader>
				<DialogFooter>
					<DialogActionTrigger asChild>
						<Button
							variant='outline'
							disabled={loading}
							size='xs'
						>
							Huỷ bỏ
						</Button>
					</DialogActionTrigger>
					<PrimaryButton
						size='xs'
						onClick={onClickUpdate}
					>
						{loading ? <Spinner /> : 'Cập nhật'}
					</PrimaryButton>
				</DialogFooter>
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
}