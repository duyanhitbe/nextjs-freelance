'use client';

import React from 'react';
import { useField } from 'formik';
import { Field } from '@lib/components';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

const CustomEditor = dynamic(() => import('../ckeditor/CustomEditor'), { ssr: false });

type Props = {
	name: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
};

export function FieldEditor({ placeholder, label, required, name }: Props) {
	const [field, meta] = useField(name);

	return (
		<Field
			label={label}
			required={required}
			errorText={meta.error}
			invalid={Boolean(meta.touched && meta.error)}
		>
			<Box width='100%'>
				<CustomEditor
					field={field}
					placeholder={placeholder}
				/>
			</Box>
		</Field>
	);
}
