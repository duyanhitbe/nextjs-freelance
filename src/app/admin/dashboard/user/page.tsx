import { UserTable } from '@lib/components';
import { UserServerService } from '@lib/services/user.service';

export default async function Page() {
	const data = await UserServerService.find();

	return <UserTable data={data} />;
}
