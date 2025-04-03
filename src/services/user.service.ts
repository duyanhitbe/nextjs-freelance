import CrudService from './crud.service';
import { User } from 'types/user.type';
import { API_PATH } from '@constants/api.constant';

class UserService extends CrudService<User> {
	CREATE_PATH = API_PATH.USER.CREATE;
	FIND_ALL_PATH = API_PATH.USER.FIND;
	FIND_DETAIL_PATH = (id: string) => API_PATH.USER.DETAIL(id);
	UPDATE_PATH = (id: string) => API_PATH.USER.UPDATE(id);
	DELETE_PATH = (id: string) => API_PATH.USER.DELETE(id);
}

export const UserServerService = new UserService('SERVER');
export const UserClientService = new UserService('CLIENT');
