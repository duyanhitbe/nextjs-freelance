import CrudService from '@app/services/crud.service';
import { User } from '@app/types';
import { API_PATH } from '@app/constants';

class UserService extends CrudService<User> {
	CREATE_PATH = API_PATH.USER.CREATE;
	FIND_ALL_PATH = API_PATH.USER.FIND;
	FIND_DETAIL_PATH = (id: string) => API_PATH.USER.DETAIL(id);
	UPDATE_PATH = (id: string) => API_PATH.USER.UPDATE(id);
	DELETE_PATH = (id: string) => API_PATH.USER.DELETE(id);
}

export const UserServerService = new UserService('SERVER');
export const UserClientService = new UserService('CLIENT');
