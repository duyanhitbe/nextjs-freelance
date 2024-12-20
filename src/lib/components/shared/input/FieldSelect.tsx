'use client';

import { ListCollection } from '@chakra-ui/react';
import {
	Field,
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValueText
} from '@lib/components';
import { useField, useFormikContext } from 'formik';
import { RefObject } from 'react';

type Props = {
	id: string;
	name: string;
	label?: string;
	placeholder?: string;
	defaultValue?: string;
	collection: ListCollection;
	portalRef?: RefObject<HTMLDivElement>;
	clearable?: boolean;
	required?: boolean;
};

export const FieldSelect = ({
	collection,
	placeholder,
	defaultValue,
	label,
	portalRef,
	clearable = true,
	required,
	...props
}: Props) => {
	const [field, meta] = useField(props);
	const { setFieldValue } = useFormikContext<any>();

	return (
		<Field
			label={label}
			required={required}
			errorText={meta.error}
			invalid={Boolean(meta.touched && meta.error)}
		>
			<SelectRoot
				collection={collection}
				defaultValue={defaultValue ? [defaultValue] : undefined}
				size='md'
				colorPalette='primary'
				name={field.name}
				value={field.value ? [field.value] : undefined}
				onChange={field.onChange}
				onBlur={field.onBlur}
				onValueChange={({ value }) => {
					setFieldValue(props.name, value[0] || null);
				}}
			>
				<SelectTrigger clearable={clearable}>
					<SelectValueText placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent portalRef={portalRef}>
					{collection.items.map((item) => (
						<SelectItem
							item={item}
							key={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
		</Field>
	);
};
