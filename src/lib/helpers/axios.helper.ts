export function getAxiosError(err: any): string | null {
	const errors: any[] = err?.response?.data?.errors || [];
	const result: string[] = [];

	errors.forEach((error) => {
		if (typeof error === 'string') {
			result.push(error);
		}
		if (typeof error === 'object' && error.message && Array.isArray(error.message)) {
			result.push(...error.message);
		}
	});

	return result.join('\n');
}
