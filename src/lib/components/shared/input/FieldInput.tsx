'use client';

import { Input } from '@chakra-ui/react';
import { Field } from '@lib/components';
import { useField } from 'formik';
import { HTMLInputTypeAttribute } from 'react';

type Props = {
	id: string;
	name: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	type?: HTMLInputTypeAttribute;
};

export function FieldInput({ label, required, type, ...props }: Props) {
	const [field, meta] = useField(props);

	return (
		<Field
			label={label}
			required={required}
			errorText={meta.error}
			invalid={Boolean(meta.touched && meta.error)}
		>
			<Input
				{...field}
				{...props}
				type={type}
				colorPalette='primary'
				autoComplete='new-password'
			/>
		</Field>
	);
}
