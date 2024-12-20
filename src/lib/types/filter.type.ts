import { ListCollection } from '@chakra-ui/react';

export type Filter = {
	name: string;
	type: FilterType;
	placeholder?: string;
	collection?: ListCollection<any>;
	defaultValue?: string;
	promise?: () => Promise<any>;
	fieldLabel?: string;
	fieldValue?: string;
};

export type FilterType = 'TEXT' | 'SELECT';
