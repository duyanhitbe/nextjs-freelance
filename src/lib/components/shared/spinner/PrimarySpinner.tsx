import { Spinner } from '@chakra-ui/react';

type Props = {
	size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	color?: string;
};

export function PrimarySpinner({ size, color = 'primary' }: Props) {
	return (
		<Spinner
			color={color}
			size={size}
		/>
	);
}
