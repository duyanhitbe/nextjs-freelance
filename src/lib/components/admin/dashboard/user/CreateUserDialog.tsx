'use client';

import { VStack } from '@chakra-ui/react';
import { FieldInput, Table } from '@lib/components';
import * as Yup from 'yup';
import { UserClientService } from '@lib/services';

const initialValues = {
	username: '',
	password: '',
	confirmPassword: ''
};

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Tên tài khoản không được bỏ trống!'),
	password: Yup.string().required('Mật khẩu không được bỏ trống!'),
	confirmPassword: Yup.string()
		.required('Mật khẩu không được bỏ trống!')
		.oneOf([Yup.ref('password')], 'Mật khẩu không khớp, vui lòng kiểm tra lại!')
});

type Values = typeof initialValues;

export function CreateUserDialog() {
	const onCreate = (values: Values) => {
		return UserClientService.create(values);
	};

	return (
		<Table.DialogCreate
			dialogTitle='Tạo tài khoản'
			successMessage='Tạo mới người dùng thành công'
			failureMessage='Tạo mới người dùng thất bại'
			initialValues={initialValues}
			validationSchema={validationSchema}
			onCreate={onCreate}
		>
			<VStack gap={4}>
				<FieldInput
					id='username'
					name='username'
					label='Tên tài khoản'
					placeholder='Nhập tên tài khoản'
					required
				/>
				<FieldInput
					id='password'
					name='password'
					label='Mật khẩu'
					placeholder='Nhập mật khẩu'
					type='password'
					required
				/>
				<FieldInput
					id='confirmPassword'
					name='confirmPassword'
					label='Nhập lại mật khẩu'
					placeholder='Nhập lại mật khẩu'
					type='password'
					required
				/>
			</VStack>
		</Table.DialogCreate>
	);
}
