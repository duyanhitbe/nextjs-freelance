import { EventServerService } from '@lib/services';
import { EventTable } from '@lib/components/admin/dashboard/event/EventTable';

export default async function Page() {
	const data = await EventServerService.find();

	return <EventTable initialData={data} />;
}
