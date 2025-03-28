export type Menu = {
	key: string;
	label: string;
	icon: any;
	path?: string;
	children?: Menu[];
	breadcrumb?: string[];
};
