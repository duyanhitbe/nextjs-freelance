import { useQuery } from '@tanstack/react-query';
import { UserClientService } from '@app/services';

export const useFindUser = () => {
	return useQuery({
		queryKey: ['users'],
		queryFn: () => UserClientService.find()
	});
};
