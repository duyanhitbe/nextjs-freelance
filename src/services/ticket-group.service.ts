import CrudService from './crud.service';
import { TicketGroup } from 'types/ticket-group.type';
import { API_PATH } from '@constants/api.constant';

class TicketGroupService extends CrudService<TicketGroup> {
	CREATE_PATH = API_PATH.TICKET_GROUP.CREATE;
	FIND_ALL_PATH = API_PATH.TICKET_GROUP.FIND;
	FIND_DETAIL_PATH = (id: string) => API_PATH.TICKET_GROUP.DETAIL(id);
	UPDATE_PATH = (id: string) => API_PATH.TICKET_GROUP.UPDATE(id);
	DELETE_PATH = (id: string) => API_PATH.TICKET_GROUP.DELETE(id);
}

export const TicketGroupServerService = new TicketGroupService('SERVER');
export const TicketGroupClientService = new TicketGroupService('CLIENT');
