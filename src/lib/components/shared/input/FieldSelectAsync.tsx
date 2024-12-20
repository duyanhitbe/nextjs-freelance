'use client';

import {
	Field,
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValueText
} from '@lib/components';
import { useField, useFormikContext } from 'formik';
import { useAsync } from 'react-use';
import { RefObject, useMemo } from 'react';
import { createListCollection } from '@chakra-ui/react';

type Props = {
	id: string;
	name: string;
	label?: string;
	placeholder?: string;
	defaultValue?: string;
	promise: () => Promise<any>;
	fieldLabel: string;
	fieldValue: string;
	portalRef?: RefObject<HTMLDivElement>;
	clearable?: boolean;
	required?: boolean;
};

export const FieldSelectAsync = ({
	promise,
	fieldLabel,
	fieldValue,
	placeholder,
	defaultValue,
	label,
	portalRef,
	clearable,
	required,
	...props
}: Props) => {
	const [field, meta] = useField(props);
	const { setFieldValue } = useFormikContext<any>();

	const state = useAsync(promise, []);

	const collection = useMemo(() => {
		return createListCollection({
			items:
				state.value?.map((item: any) => ({
					label: item[fieldLabel],
					value: item[fieldValue]
				})) || []
		});
	}, [state.value]);

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
					{collection.items.map((item: any) => (
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
