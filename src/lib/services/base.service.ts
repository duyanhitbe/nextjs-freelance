import { ApiResponse, ServiceType } from '@lib/types';
import { AxiosClientService, AxiosServerService } from './axios.service';

export abstract class BaseService<
	TEntity,
	TListParams = any,
	TCreateBody = any,
	TUpdateBody = any
> {
	protected abstract path: string;

	constructor(private readonly serviceType: ServiceType) {}

	protected get axios() {
		return this.serviceType === 'SERVER' ? AxiosServerService : AxiosClientService;
	}

	public async find(params?: TListParams | string): Promise<ApiResponse<TEntity[]>> {
		return this.axios.get<ApiResponse<TEntity[]>>(this.path, params);
	}

	public async findById(id: string): Promise<ApiResponse<TEntity>> {
		return this.axios.get<ApiResponse<TEntity>>(`${this.path}/${id}`);
	}

	public async create(body: TCreateBody): Promise<ApiResponse<TEntity>> {
		return this.axios.post<ApiResponse<TEntity>>(this.path, body);
	}

	public async delete(id: string): Promise<ApiResponse<TEntity>> {
		return this.axios.delete<ApiResponse<TEntity>>(`${this.path}/${id}`);
	}

	public async updateById(id: string, body: TUpdateBody): Promise<ApiResponse<TEntity>> {
		return this.axios.patch<ApiResponse<TEntity>>(`${this.path}/${id}`, body);
	}
}
