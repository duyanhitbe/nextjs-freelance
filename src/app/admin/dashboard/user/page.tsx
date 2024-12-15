import { UserTable } from '@lib/components';
import UserService from '@lib/services/user.service';

export default async function Page() {
	const data = await UserService.find();

	return <UserTable data={data} />;
}
