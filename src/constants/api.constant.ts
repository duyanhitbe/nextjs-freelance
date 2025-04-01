export const API_PATH = {
	AUTH: {
		LOGIN_USER: '/api/v1/auth/login'
	},
	USER: {
		FIND: '/api/v1/users',
		DETAIL: (id: string) => `/api/v1/users/${id}`,
		CREATE: '/api/v1/users',
		UPDATE: (id: string) => `/api/v1/users/${id}`,
		DELETE: (id: string) => `/api/v1/users/${id}`
	}
};
