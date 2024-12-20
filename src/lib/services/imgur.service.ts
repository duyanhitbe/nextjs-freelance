import { AxiosClientService } from '@lib/services/axios.service';

class ImgurService {
	async upload(file: File): Promise<string> {
		const formData = new FormData();
		formData.append('image', file);

		const data = await AxiosClientService.post<any>(
			'https://api.imgur.com/3/upload',
			formData,
			{
				Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`
			}
		);

		return data.data?.link;
	}
}

export const ImgurClientService = new ImgurService();
