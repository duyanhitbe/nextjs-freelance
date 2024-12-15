'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import { RiMenuFoldLine } from 'react-icons/ri';
import { SidebarItem } from '@lib/components';
import { SIDEBAR_ITEMS } from '@lib/constants';

export function DashboardSidebar() {
	return (
		<Box
			as='nav'
			bg={{ base: 'white', _dark: 'gray.900' }}
			color={{ base: 'black', _dark: 'white' }}
			shadow='10px -10px rgba(0, 0, 0, 0.25)'
			w={{ base: 'full', md: '250px' }}
			px={4}
		>
			<Flex
				alignItems='center'
				justifyContent='space-between'
				minH='70px'
			>
				<Text fontWeight='bold'>Admin Panel</Text>
				<Box cursor='pointer'>
					<RiMenuFoldLine />
				</Box>
			</Flex>

			{SIDEBAR_ITEMS.map((item) => (
				<SidebarItem
					key={item.title}
					title={item.title}
					icon={item.icon}
					path={item.path}
				/>
			))}
		</Box>
	);
}
