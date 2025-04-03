'use client';
import { Button, Form, Input } from 'antd';
import { AuthClientService } from '@services/auth.service';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormData = { username: string; password: string };

export function LoginForm() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleLogin = (values: FormData) => {
		setLoading(true);
		AuthClientService.loginUser({
			...values,
			type: 'USER'
		})
			.then(() => {
				router.replace('/admin');
			})
			.catch(() => {
				setLoading(false);
			});
	};

	return (
		<Form
			layout='vertical'
			onFinish={handleLogin}>
			<Form.Item
				label='Username'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}>
				<Input
					autoComplete='randomText'
					disabled={loading}
				/>
			</Form.Item>
			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}>
				<Input.Password
					autoComplete='randomText'
					disabled={loading}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					loading={loading}
					block>
					Log in
				</Button>
			</Form.Item>
		</Form>
	);
}
