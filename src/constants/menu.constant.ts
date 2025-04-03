import {
	ApartmentOutlined,
	CalendarOutlined,
	DollarOutlined,
	IdcardOutlined,
	ScheduleOutlined,
	ShopOutlined,
	ShoppingCartOutlined,
	TagsOutlined,
	TeamOutlined,
	UnorderedListOutlined,
	UsergroupAddOutlined,
	UserOutlined,
	UserSwitchOutlined
} from '@ant-design/icons';
import { Menu } from 'types/menu.type';

export const MENU: Menu[] = [
	{
		key: 'users',
		label: 'Quản trị viên',
		icon: UserOutlined,
		breadcrumb: ['Admin', 'Quản trị viên']
	},
	{
		key: 'customers',
		label: 'Khách hàng',
		icon: UserSwitchOutlined,
		breadcrumb: ['Admin', 'Khách hàng']
	},
	{
		key: 'agency',
		label: 'Quản lý đại lý',
		icon: TeamOutlined,
		children: [
			{
				key: 'agency/agency-level',
				label: 'Cấp đại lý',
				icon: ApartmentOutlined,
				breadcrumb: ['Admin', 'Quản lý đại lý', 'Cấp đại lý']
			},
			{
				key: 'agency/agencies',
				label: 'Đại lý',
				icon: ShopOutlined,
				breadcrumb: ['Admin', 'Quản lý đại lý', 'Đại lý']
			},
			{
				key: 'agency/agency-user',
				label: 'Tài khoản đại lý',
				icon: UsergroupAddOutlined,
				breadcrumb: ['Admin', 'Quản lý đại lý', 'Tài khoản đại lý']
			}
		]
	},
	{
		key: 'event',
		label: 'Quản lý sự kiện',
		icon: CalendarOutlined,
		children: [
			{
				key: 'event/events',
				label: 'Sự kiện',
				icon: ScheduleOutlined,
				breadcrumb: ['Admin', 'Quản lý sự kiện', 'Sự kiện']
			},
			{
				key: 'event/ticket-group',
				label: 'Nhóm vé',
				icon: TagsOutlined,
				breadcrumb: ['Admin', 'Quản lý sự kiện', 'Nhóm vé']
			},
			{
				key: 'event/ticket-info',
				label: 'Loại vé',
				icon: IdcardOutlined,
				breadcrumb: ['Admin', 'Quản lý sự kiện', 'Loại vé']
			},
			{
				key: 'event/ticket-price',
				label: 'Giá vé',
				icon: DollarOutlined,
				breadcrumb: ['Admin', 'Quản lý sự kiện', 'Giá vé']
			},
			{
				key: 'event/tickets',
				label: 'Danh sách vé',
				icon: UnorderedListOutlined,
				breadcrumb: ['Admin', 'Quản lý sự kiện', 'Danh sách vé']
			}
		]
	},
	{
		key: 'order',
		label: 'Đơn hàng',
		icon: ShoppingCartOutlined,
		breadcrumb: ['Admin', 'Đơn hàng']
	}
];
