import CrudService from '@app/services/crud.service';
import { User } from '@app/types';
import { API_PATH } from '@app/constants';

class UserService extends CrudService<User> {
	FIND_ALL_PATH = API_PATH.USER.FIND;
}

export const UserServerService = new UserService('SERVER');
export const UserClientService = new UserService('CLIENT');
