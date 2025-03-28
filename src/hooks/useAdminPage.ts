import { usePathname } from 'next/navigation';

export const useAdminPage = () => {
	return usePathname().replace('/admin/', '');
};
