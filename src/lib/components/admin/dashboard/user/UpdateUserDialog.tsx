'use client';

import { FieldInput, Table, useTableContext } from '@lib/components';
import * as Yup from 'yup';
import { User } from '@lib/types';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Tên tài khoản không được bỏ trống!')
});

export function UpdateUserDialog() {
	const {} = useTableContext<User>();
	const [initialValues, setInitialValues] = useState({
		username: ''
	});

	const onUpdate = async (id: string, values: typeof initialValues) => {};

	return (
		<Table.DialogUpdate
			title='Cập nhật người dùng'
			// validationSchema={validationSchema}
			// onUpdate={onUpdate}
		>
			<FieldInput
				id='username'
				name='username'
				label='Tên tài khoản'
				placeholder='Nhập tên tài khoản'
				required
			/>
		</Table.DialogUpdate>
	);
}
