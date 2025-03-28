import { UserTable } from '@app/components';
import { UserServerService } from '@app/services';
import React from 'react';

export default async function Page() {
	const users = await UserServerService.find();

	return <UserTable users={users} />;
}
