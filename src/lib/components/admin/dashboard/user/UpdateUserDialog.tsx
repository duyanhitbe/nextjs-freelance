'use client';

import { FieldInput, Table } from '@lib/components';
import * as Yup from 'yup';
import { UpdateUserBody } from '@lib/types';
import { UserClientService } from '@lib/services';

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Tên tài khoản không được bỏ trống!')
});

export function UpdateUserDialog() {
	const onUpdate = async (id: string, values: UpdateUserBody) => {
		return UserClientService.updateById(id, values);
	};

	return (
		<Table.DialogUpdate<UpdateUserBody>
			title='Cập nhật người dùng'
			successMessage='Cập nhật người dùng thành công'
			failureMessage='Cập nhật người dùng thất bại'
			validationSchema={validationSchema}
			onUpdate={onUpdate}
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
