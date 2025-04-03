import BaseService from '@app/services/base.service';
import { BaseFilter, BasePaginatedResponse, BaseResponse } from '@app/types';

abstract class CrudService<T> extends BaseService {
	abstract CREATE_PATH: string;
	abstract FIND_ALL_PATH: string;
	abstract FIND_DETAIL_PATH: (id: string) => string;
	abstract UPDATE_PATH: (id: string) => string;
	abstract DELETE_PATH: (id: string) => string;

	async find(filter: BaseFilter): Promise<BasePaginatedResponse<T>> {
		const axios = this.axios({
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODYwOTM2NC0xYjliLTQzYWYtOTgwNy0yMDg4ODU0YWQ3MGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MzY2NzE5MiwiZXhwIjoxNzQzNzUzNTkyfQ.CK71f6K7KJvSGrkUG9YdQRVjv3yqxqO9BiudIjnKmzY'
		});
		const { data } = await axios.get<BasePaginatedResponse<T>>(this.FIND_ALL_PATH, {
			params: filter
		});
		return data;
	}

	async detail(id: string): Promise<BaseResponse<T>> {
		const axios = this.axios({
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODYwOTM2NC0xYjliLTQzYWYtOTgwNy0yMDg4ODU0YWQ3MGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MzY2NzE5MiwiZXhwIjoxNzQzNzUzNTkyfQ.CK71f6K7KJvSGrkUG9YdQRVjv3yqxqO9BiudIjnKmzY'
		});
		const { data } = await axios.get<BaseResponse<T>>(this.FIND_DETAIL_PATH(id));
		return data;
	}

	async create(creationData: any): Promise<BaseResponse<T>> {
		const axios = this.axios({
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODYwOTM2NC0xYjliLTQzYWYtOTgwNy0yMDg4ODU0YWQ3MGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MzY2NzE5MiwiZXhwIjoxNzQzNzUzNTkyfQ.CK71f6K7KJvSGrkUG9YdQRVjv3yqxqO9BiudIjnKmzY'
		});
		const { data } = await axios.post<BaseResponse<T>>(this.CREATE_PATH, creationData);
		return data;
	}

	async update(id: string, updatedData: any): Promise<BaseResponse<T>> {
		const axios = this.axios({
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODYwOTM2NC0xYjliLTQzYWYtOTgwNy0yMDg4ODU0YWQ3MGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MzY2NzE5MiwiZXhwIjoxNzQzNzUzNTkyfQ.CK71f6K7KJvSGrkUG9YdQRVjv3yqxqO9BiudIjnKmzY'
		});
		const { data } = await axios.patch<BaseResponse<T>>(this.UPDATE_PATH(id), updatedData);
		return data;
	}

	async delete(id: string): Promise<BaseResponse<T>> {
		const axios = this.axios({
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODYwOTM2NC0xYjliLTQzYWYtOTgwNy0yMDg4ODU0YWQ3MGEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MzY2NzE5MiwiZXhwIjoxNzQzNzUzNTkyfQ.CK71f6K7KJvSGrkUG9YdQRVjv3yqxqO9BiudIjnKmzY'
		});
		const { data } = await axios.delete<BaseResponse<T>>(this.DELETE_PATH(id));
		return data;
	}
}

export default CrudService;
