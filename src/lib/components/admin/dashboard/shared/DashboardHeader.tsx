import { Flex } from '@chakra-ui/react';
import { ColorModeButton } from '@lib/components';

export function DashboardHeader() {
	return (
		<Flex
			as='header'
			bg={{ base: 'white', _dark: 'gray.900' }}
			color={{ base: 'black', _dark: 'white' }}
			p={4}
			minH='70px'
			justifyContent='end'
			alignItems='center'
			shadow='10px -10px rgba(0, 0, 0, 0.25)'
		>
			<ColorModeButton />
		</Flex>
	);
}
