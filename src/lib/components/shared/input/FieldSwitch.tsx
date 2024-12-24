'use client';

import { Field, Switch } from '@lib/components';
import { useField } from 'formik';
import { Box, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';

type Props = {
	id: string;
	name: string;
	label?: string;
	onChange?: (value: boolean) => void;
	revert?: boolean;
};

export function FieldSwitch({ label, onChange, revert, ...props }: Props) {
	const [field, meta] = useField(props);

	useEffect(() => {
		if (onChange) {
			onChange(field.value);
		}
	}, []);

	if (revert) {
		return (
			<HStack gap={2}>
				<Box>
					<Field
						label={label}
						errorText={meta.error}
						invalid={Boolean(meta.touched && meta.error)}
					/>
				</Box>
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
			</HStack>
		);
	}

	return (
		<HStack gap={2}>
			<Switch
				colorPalette='blue'
				{...props}
				{...field}
				checked={field.value}
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
