'use client';
import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IconType } from 'react-icons';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
	title: string;
	icon?: IconType;
	path: string;
};

export function SidebarItem({ title, icon: Icon, path }: Props) {
	const router = usePathname().replace(/\/admin\/dashboard\//g, '');
	const isActive = path === router;

	return (
		<ChakraLink
			asChild
			_focus={{ outline: 'none', boxShadow: 'none' }}
		>
			<NextLink
				href={`/admin/dashboard/${path}`}
				style={{
					display: 'block',
					textDecoration: 'none'
				}}
			>
				<Flex
					alignItems='center'
					justifyContent='space-between'
					px={4}
					py={2}
					mt={2}
					borderRadius={4}
					color={isActive ? 'white' : 'black'}
					cursor='pointer'
					_hover={{
						color: isActive ? 'white' : 'teal.500'
					}}
					bgColor={isActive ? 'teal.500' : 'transparent'}
				>
					<Flex
						alignItems='center'
						gap={2}
					>
						{Icon ? <Icon /> : <FaHome />}
						<Text fontWeight='500'>{title}</Text>
					</Flex>
					<MdKeyboardArrowRight />
				</Flex>
			</NextLink>
		</ChakraLink>
	);
}
