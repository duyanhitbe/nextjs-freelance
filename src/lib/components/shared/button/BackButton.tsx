'use client';

import { FiChevronLeft } from 'react-icons/fi';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export function BackButton() {
	const router = useRouter();

	return (
		<Button
			size='xs'
			variant='outline'
			border='none'
			onClick={() => {
				router.back();
			}}
		>
			<FiChevronLeft /> Quay về
		</Button>
	);
}
