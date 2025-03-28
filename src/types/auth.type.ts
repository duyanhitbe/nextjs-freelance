export type LoginUserRequest = {
	username: string;
	password: string;
	type: 'USER' | 'AGENCY';
};

export type LoginUserResponse = {
	accessToken: string;
	expiresIn: number;
};
