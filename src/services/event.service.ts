import CrudService from './crud.service';
import { Event } from 'types/event.type';
import { API_PATH } from '@constants/api.constant';

class EventService extends CrudService<Event> {
	CREATE_PATH = API_PATH.EVENT.CREATE;
	FIND_ALL_PATH = API_PATH.EVENT.FIND;
	FIND_DETAIL_PATH = (id: string) => API_PATH.EVENT.DETAIL(id);
	UPDATE_PATH = (id: string) => API_PATH.EVENT.UPDATE(id);
	DELETE_PATH = (id: string) => API_PATH.EVENT.DELETE(id);
}

export const EventServerService = new EventService('SERVER');
export const EventClientService = new EventService('CLIENT');
