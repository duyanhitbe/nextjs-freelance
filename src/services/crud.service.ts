import BaseService from '@app/services/base.service';
import { BasePaginatedResponse } from '@app/types';

abstract class CrudService<T> extends BaseService {
	abstract FIND_ALL_PATH: string;

	async find(): Promise<BasePaginatedResponse<T>> {
		const axios = this.axios({
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YjhhYjZmYi04MzUyLTRhZjUtOGYwYS01Mjk2ZDc1ZjhmYjYiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MzE1NDY1MSwiZXhwIjoxNzQzMjQxMDUxfQ.bgg-oYs_LfcGlUFklCKNMbbEaedx-J3H-tXB16d7MZ0'
		});
		const { data } = await axios.get<BasePaginatedResponse<T>>(this.FIND_ALL_PATH);
		return data;
	}
}

export default CrudService;
