import {
	EventServerService,
	TicketGroupServerService,
	TicketInfoServerService
} from '@lib/services';
import { EventTable } from '@lib/components/admin/dashboard/event/EventTable';
import { NextRequestParams } from '@lib/types';
import { TicketGroupTable } from '@lib/components/admin/dashboard/ticket-group/TicketGroupTable';
import { TicketInfoTable } from '@lib/components/admin/dashboard/ticket-info/TicketInfoTable';

type PageProps = NextRequestParams<{
	eventId?: string;
	ticketGroupId?: string;
}>;

export default async function Page({ searchParams }: PageProps) {
	const { eventId, ticketGroupId } = await searchParams;

	if (eventId) {
		if (ticketGroupId) {
			const ticketInfos = await TicketInfoServerService.find({ ticketGroupId });
			return (
				<TicketInfoTable
					initialData={ticketInfos}
					ticketGroupId={ticketGroupId}
				/>
			);
		}

		const ticketGroups = await TicketGroupServerService.find({ eventId });
		return (
			<TicketGroupTable
				initialData={ticketGroups}
				eventId={eventId}
			/>
		);
	}

	const events = await EventServerService.find();
	return <EventTable initialData={events} />;
}
