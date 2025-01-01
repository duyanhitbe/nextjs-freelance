import { Flex, HStack, Text } from '@chakra-ui/react';
import { Avatar, Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@lib/components';
import { FiLogOut, FiUser } from 'react-icons/fi';

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
			px={10}
		>
			<MenuRoot>
				<MenuTrigger asChild>
					<HStack
						gap={2}
						cursor='pointer'
						py={2}
						px={4}
						_hover={{
							bgColor: 'gray.100',
							borderRadius: 4
						}}
					>
						<Button
							variant='plain'
							size='sm'
							outline='none'
							p={0}
						>
							<Avatar
								name='Duy Anh'
								src='https://bit.ly/sage-adebayo'
								cursor='pointer'
							/>
						</Button>
						<Text fontSize='sm'>Duy Anh</Text>
					</HStack>
				</MenuTrigger>
				<MenuContent>
					<MenuItem
						value='info'
						cursor='pointer'
					>
						<FiUser /> Thông tin tài khoản
					</MenuItem>
					<MenuItem
						value='logout'
						cursor='pointer'
					>
						<FiLogOut /> Đăng xuất
					</MenuItem>
				</MenuContent>
			</MenuRoot>
		</Flex>
	);
}
