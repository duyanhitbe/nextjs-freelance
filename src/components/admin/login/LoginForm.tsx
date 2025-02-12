'use client';
import { Button, Form, Input } from 'antd';

export function LoginForm() {
	return (
		<Form layout='vertical'>
			<Form.Item
				label='Username'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}>
				<Input autoComplete='randomText' />
			</Form.Item>
			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}>
				<Input.Password autoComplete='randomText' />
			</Form.Item>
			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					block>
					Log in
				</Button>
			</Form.Item>
		</Form>
	);
}
