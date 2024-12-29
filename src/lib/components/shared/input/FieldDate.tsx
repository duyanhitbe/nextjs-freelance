'use client';

import { useField, useFormikContext } from 'formik';
import { Field } from '@lib/components';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

type Props = {
	id: string;
	name: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
};

export function FieldDate({ label, placeholder, required, ...props }: Props) {
	const [field, meta] = useField(props);
	const { setFieldValue } = useFormikContext<any>();

	const onChange = (date: Date | null) => {
		setFieldValue(field.name, date);
	};

	return (
		<Field
			label={label}
			required={required}
			errorText={meta.error}
			invalid={Boolean(meta.touched && meta.error)}
		>
			<DatePicker
				{...props}
				{...field}
				onChange={onChange}
				className='date-picker-container'
				placeholderText={placeholder}
				value={moment(field.value).format('DD/MM/YYYY')}
				selected={field.value}
				dateFormat='dd/MM/YYYY'
			/>
		</Field>
	);
}
