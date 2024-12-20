import { UserTable } from '@lib/components';
import { UserServerService } from '@lib/services';

export default async function Page() {
	const data = await UserServerService.find();

	return <UserTable initialData={data} />;
}
