'use client';

import { Field, Rating } from '@lib/components';
import { useField, useFormikContext } from 'formik';

type Props = {
	id: string;
	name: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg';
	center?: boolean;
};

export function FieldRating({ label, required, size, center, ...props }: Props) {
	const [field, meta] = useField(props);
	const { setFieldValue } = useFormikContext();

	return (
		<Field
			label={label}
			required={required}
			errorText={meta.error}
			invalid={Boolean(meta.touched && meta.error)}
			alignItems={center ? 'center' : undefined}
		>
			<Rating
				defaultValue={5}
				colorPalette='yellow'
				size={size}
				allowHalf
				{...field}
				{...props}
				onValueChange={({ value }) => setFieldValue(field.name, value)}
			/>
		</Field>
	);
}
