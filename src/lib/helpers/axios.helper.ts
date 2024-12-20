export function getAxiosError(err: any): string | null {
	return err?.response?.data?.errors?.join('\n');
}
