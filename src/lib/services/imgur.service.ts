import { AxiosClientService } from '@lib/services/axios.service';

class ImgurService {
	async upload(file: File): Promise<string> {
		const formData = new FormData();
		formData.append('image', file);

		const data = await AxiosClientService.post<any>('/api/v1/upload', formData);
		console.log(data);
		return data?.link;
	}
}

export const ImgurClientService = new ImgurService();
