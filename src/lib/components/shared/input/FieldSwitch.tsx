'use client';

import { Field, Switch } from '@lib/components';
import { useField } from 'formik';
import { Box, HStack } from '@chakra-ui/react';

type Props = {
	id: string;
	name: string;
	label?: string;
	onChange?: (value: boolean) => void;
};

export function FieldSwitch({ label, onChange, ...props }: Props) {
	const [field, meta] = useField(props);

	return (
		<HStack gap={2}>
			<Switch
				colorPalette='blue'
				{...props}
				{...field}
				onChange={(e) => {
					if (onChange) {
						onChange(!field.value);
					}
					field.onChange(e);
				}}
				onBlur={field.onBlur}
			/>
			<Box>
				<Field
					label={label}
					errorText={meta.error}
					invalid={Boolean(meta.touched && meta.error)}
				/>
			</Box>
		</HStack>
	);
}
