import { Spinner } from '@chakra-ui/react';

type Props = {
	size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function PrimarySpinner({ size }: Props) {
	return (
		<Spinner
			color='primary'
			size={size}
		/>
	);
}
