import { UserService } from '@lib/services';
import { useQuery } from '@tanstack/react-query';
import { ListUserParams } from '@lib/types';

export function useListUser(params: ListUserParams) {
	return useQuery({
		queryKey: ['users'],
		queryFn: () => UserService.find(params),
		enabled: false
	});
}
