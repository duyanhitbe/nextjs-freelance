import { PropsWithChildren } from 'react';
import {
	DialogActionTrigger,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	PrimaryButton
} from '@lib/components';

type DialogProps = PropsWithChildren<{
	title: string;
}>;

export function TableDialog({ children, title }: DialogProps) {
	return (
		<>
			{/*<DialogBackdrop />*/}
			<DialogContent>
				<DialogCloseTrigger />
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<DialogBody>{children}</DialogBody>
				<DialogFooter>
					<DialogActionTrigger asChild>
						<PrimaryButton variant='outline'>Cancel</PrimaryButton>
					</DialogActionTrigger>
					<PrimaryButton>Save</PrimaryButton>
				</DialogFooter>
			</DialogContent>
		</>
	);
}
