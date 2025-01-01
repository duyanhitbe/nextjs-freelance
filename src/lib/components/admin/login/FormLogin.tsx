'use client';

import { Form, Formik } from 'formik';
import { FieldInput } from '../../shared/input/FieldInput';
import { Card, Stack } from '@chakra-ui/react';
import { PrimaryButton } from '../../shared/button/PrimaryButton';
import * as Yup from 'yup';
import { AuthClientService } from '../../../services';
import { useRouter } from 'next/navigation';

const initialValues = {
	username: '',
	password: ''
};

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Tên tài khoản là bắt buộc'),
	password: Yup.string().required('Mật khẩu là bắt buộc')
});

export function FormLogin() {
	const router = useRouter();

	const onSubmit = (values: typeof initialValues) => {
		AuthClientService.loginUser(values.username, values.password).then((res) => {
			localStorage.setItem('userAccessToken', res.data.accessToken);
			router.replace('/admin/dashboard');
		});
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<Card.Body>
					<Stack
						gap='4'
						w='full'
					>
						<FieldInput
							id='username'
							name='username'
							label='Tên tài khoản'
							required
						/>
						<FieldInput
							id='password'
							name='password'
							label='Mật khẩu'
							type='password'
							required
						/>
					</Stack>
				</Card.Body>
				<Card.Footer justifyContent='flex-end'>
					<PrimaryButton
						variant='solid'
						type='submit'
					>
						Đăng nhập
					</PrimaryButton>
				</Card.Footer>
			</Form>
		</Formik>
	);
}
