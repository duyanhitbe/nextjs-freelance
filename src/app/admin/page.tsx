import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
	const cookieStore = await cookies();
	const session = cookieStore.get('session');

	if (session) {
		redirect(`/admin/dashboard`);
	} else {
		redirect(`/admin/login`);
	}

	return <></>;
}
