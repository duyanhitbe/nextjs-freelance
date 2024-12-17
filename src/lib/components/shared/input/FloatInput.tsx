'use client';
import { Box, defineStyle, Field, Input } from '@chakra-ui/react';
import { ChangeEvent, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	id?: string;
	name?: string;
	value?: any;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}>;

export function FloatInput({ children, id, name, value, onChange }: Props) {
	return (
		<Field.Root>
			<Box
				pos='relative'
				w='full'
			>
				<Input
					className='peer'
					placeholder=''
					colorPalette='primary'
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					type='text'
				/>
				<Field.Label css={floatingStyles}>{children}</Field.Label>
			</Box>
		</Field.Root>
	);
}

const floatingStyles = defineStyle({
	pos: 'absolute',
	bg: 'bg',
	px: '0.5',
	top: '-3',
	insetStart: '2',
	fontWeight: 'normal',
	pointerEvents: 'none',
	transition: 'position',
	_peerPlaceholderShown: {
		color: 'gray.500',
		top: '2.5',
		insetStart: '3'
	},
	_peerFocusVisible: {
		color: 'primary.dark',
		top: '-3',
		insetStart: '2'
	}
});
