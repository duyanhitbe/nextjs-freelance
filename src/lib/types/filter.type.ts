export type Filter = {
	name: string;
	type: FilterType;
	placeholder?: string;
};

export type FilterType = 'TEXT';

export type TypeMap = {
	TEXT: string;
	NUMBER: number;
};
