import { Filter, User } from '@lib/types';

export const USER_FILTERS: Filter[] = [
	{
		name: 'username',
		type: 'TEXT',
		placeholder: 'Tài khoản'
	}
];

export const USER_HEADERS: string[] = ['Tên tài khoản', 'Ngày tạo', 'Ngày cập nhật gần nhất'];

export const USER_KEYS: (keyof User)[] = ['username', 'createdAt', 'updatedAt'];
