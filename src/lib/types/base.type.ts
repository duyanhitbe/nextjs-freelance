export type BaseEntity = {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;
	status: 'ACTIVE' | 'INACTIVE';
};
