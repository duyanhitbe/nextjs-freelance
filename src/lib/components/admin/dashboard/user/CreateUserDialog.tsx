'use client';

import { errorToast, FieldInput, successToast, Table, TableContext } from '@lib/components';
import { Form, Formik, FormikHelpers } from 'formik';
import { VStack } from '@chakra-ui/react';
import * as Yup from 'yup';
import { UserClientService } from '@lib/services';
import { useContext, useState } from 'react';

type Props = {};

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

export function CreateUserDialog({}: Props) {
	const { setData, setLoading: setDataLoading } = useContext(TableContext);
	const [loading, setLoading] = useState<boolean>(false);
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
		setLoading(true);
		UserClientService.create(values)
			.then(async () => {
				setLoading(false);
				setOpenDialog(false);
				helpers.resetForm();
				setDataLoading(true);
				const data = await UserClientService.find();
				setData(data);
				setDataLoading(false);
				successToast('Tạo tài khoản thành công');
			})
			.catch((err) => {
				setLoading(false);
				if (err.response?.data) {
					errorToast('Tạo tài khoản thất bại', err.response.data.errors?.join('\n'));
				}
			});
	};

	return (
		<Formik<Values>
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ submitForm, resetForm }) => (
				<Form>
					<Table.DialogCreate
						dialogTitle='Tạo tài khoản'
						onSave={submitForm}
						onCancel={() => resetForm()}
						loading={loading}
						openDialog={openDialog}
						setOpenDialog={setOpenDialog}
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
				</Form>
			)}
		</Formik>
	);
}
