import { Box, defineStyle, Field, Input } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	value?: any;
	onChange?: (value: any) => void;
}>;

export function FloatInput({ children, value, onChange = () => {} }: Props) {
	return (
		<Field.Root>
			<Box
				pos='relative'
				w='full'
			>
				<Input
					className='peer'
					placeholder=''
					colorPalette='teal'
					value={value}
					onChange={(e) => onChange(e.target.value)}
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
		color: 'teal',
		top: '-3',
		insetStart: '2'
	}
});
