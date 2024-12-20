import { Filter, User } from '@lib/types';

export const USER_FILTERS: Filter[] = [
	{
		name: 'search',
		type: 'TEXT',
		placeholder: 'Tên tài khoản'
	}
];

export const USER_HEADERS: string[] = ['Tên tài khoản', 'Ngày tạo', 'Ngày cập nhật gần nhất'];

export const USER_KEYS: (keyof User)[] = ['username', 'createdAt', 'updatedAt'];
