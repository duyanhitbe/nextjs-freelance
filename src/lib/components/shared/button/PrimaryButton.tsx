import { PropsWithChildren } from 'react';
import { Button } from '@chakra-ui/react';

type Props = PropsWithChildren<{
	size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	variant?: 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain';
	onClick?: () => void;
}>;

export function PrimaryButton({ children, size, variant = 'solid', onClick }: Props) {
	const isOutline = variant === 'outline';

	return (
		<Button
			size={size}
			variant='outline'
			color={!isOutline ? 'white' : undefined}
			bgColor={!isOutline ? 'teal.500' : undefined}
			_hover={{
				bgColor: !isOutline ? 'teal.600' : undefined
			}}
			onClick={onClick}
		>
			{children}
		</Button>
	);
}
