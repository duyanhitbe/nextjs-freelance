export function getFileNameFromUrl(url: string): string | null {
	const regex = /\/([^\/?#]+)$/;
	const match = url.match(regex);
	if (match) {
		return match[1];
	}
	return null;
}

export function toVndCurrency(num?: number): string {
	return `${num || 0}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ';
}
