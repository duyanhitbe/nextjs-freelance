'use client';

import { createListCollection, HStack, VStack } from '@chakra-ui/react';
import { FieldInput, FieldSelect, FieldUpload, Table } from '@lib/components';
import * as Yup from 'yup';
import { ENUM_EVENT_TYPE, EventType } from '@lib/types';
import { EventClientService } from '@lib/services';
import { useRef } from 'react';

const initialValues = {
	name: '',
	eventType: ENUM_EVENT_TYPE.EVENT,
	image: '',
	thumbnail: '',
	description: '',
	displayPrice: 0,
	isBanner: false,
	order: 1,
	location: ''
};

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Tên sự kiện không được bỏ trống!')
});

type Values = typeof initialValues;

export function CreateEventDialog() {
	const dialogRef = useRef<HTMLDivElement>(null);

	const onCreate = async (values: Values) => {
		return EventClientService.create(values);
	};

	return (
		<Table.DialogCreate
			dialogTitle='Tạo sự kiện'
			successMessage='Tạo mới sự kiện thành công'
			failureMessage='Tạo mới sự kiện thất bại'
			initialValues={initialValues}
			validationSchema={validationSchema}
			onCreate={onCreate}
			ref={dialogRef}
		>
			<VStack gap={4}>
				<HStack
					gap={4}
					width='100%'
				>
					<FieldInput
						id='name'
						name='name'
						label='Tên sự kiện'
						placeholder='Nhập tên sự kiện'
						required
					/>
					<FieldSelect
						id='eventType'
						name='eventType'
						collection={createListCollection({
							items: Object.values(ENUM_EVENT_TYPE).map((item) => ({
								label: EventType[item],
								value: item
							}))
						})}
						label='Loại sự kiện'
						placeholder='Loại sự kiện'
						portalRef={dialogRef as any}
						clearable={false}
						required
					/>
				</HStack>
				<FieldUpload
					id='image'
					name='image'
					label='Ảnh sự kiện'
					placeholder='Nhập ảnh sự kiện'
					required
				/>
				<FieldUpload
					id='thumbnail'
					name='thumbnail'
					label='Logo sự kiện'
					placeholder='Nhập logo sự kiện'
					required
				/>
			</VStack>
		</Table.DialogCreate>
	);
}
