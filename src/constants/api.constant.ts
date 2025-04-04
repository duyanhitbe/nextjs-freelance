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
	},
	EVENT: {
		FIND: '/api/v1/events',
		DETAIL: (id: string) => `/api/v1/events/${id}`,
		CREATE: '/api/v1/events',
		UPDATE: (id: string) => `/api/v1/events/${id}`,
		DELETE: (id: string) => `/api/v1/events/${id}`
	},
	TICKET_GROUP: {
		FIND: '/api/v1/ticket-groups',
		DETAIL: (id: string) => `/api/v1/ticket-groups/${id}`,
		CREATE: '/api/v1/ticket-groups',
		UPDATE: (id: string) => `/api/v1/ticket-groups/${id}`,
		DELETE: (id: string) => `/api/v1/ticket-groups/${id}`
	},
	LOCATION: {
		FIND: '/api/v1/locations'
	}
};
