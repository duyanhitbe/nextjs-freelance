import { PropsWithChildren } from 'react';
import { Button } from '@chakra-ui/react';

type Props = PropsWithChildren<{
	size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	variant?: 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain';
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
	disabled?: boolean;
}>;

export function PrimaryButton({
	children,
	size,
	variant = 'solid',
	type = 'button',
	onClick,
	disabled
}: Props) {
	const isOutline = variant === 'outline';

	return (
		<Button
			type={type}
			size={size}
			variant={variant}
			color={!isOutline ? 'white' : undefined}
			bgColor={!isOutline ? 'primary' : undefined}
			_hover={{
				bgColor: !isOutline ? 'primary.outline' : undefined
			}}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	);
}
