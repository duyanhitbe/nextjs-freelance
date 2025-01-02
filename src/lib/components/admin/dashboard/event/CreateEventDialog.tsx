'use client';

import { Box, createListCollection, HStack, VStack } from '@chakra-ui/react';
import {
	FieldEditor,
	FieldInput,
	FieldRating,
	FieldSelect,
	FieldSelectAsync,
	FieldSwitch,
	FieldUpload,
	Table
} from '@lib/components';
import { ENUM_EVENT_TYPE } from '@lib/enums';
import { EventClientService, LocationClientService } from '@lib/services';
import { EventType } from '@lib/constants';
import { useRef, useState } from 'react';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	eventType: ENUM_EVENT_TYPE.EVENT,
	image: '',
	thumbnail: '',
	description: undefined,
	displayPrice: 0,
	isBanner: false,
	order: 1,
	location: undefined,
	ratingStar: 5
};

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Tên sự kiện không được bỏ trống!'),
	image: Yup.string().required('Ảnh sự kiện không được bỏ trống!'),
	thumbnail: Yup.string().required('Logo sự kiện không được bỏ trống!'),
	description: Yup.string().optional(),
	displayPrice: Yup.number().min(1, 'Giá hiển thị phải lớn hơn 1'),
	isBanner: Yup.boolean().optional(),
	order: Yup.number().optional().min(1, 'Thứ tự hiển thị phải lớn hơn 1'),
	location: Yup.string().optional()
});

type Values = typeof initialValues;

export function CreateEventDialog() {
	const [isBanner, setIsBanner] = useState(false);
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
			onCancel={() => setIsBanner(false)}
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
					placeholder='Tải ảnh sự kiện'
					required
				/>
				<FieldUpload
					id='thumbnail'
					name='thumbnail'
					label='Logo sự kiện'
					placeholder='Tải ảnh logo sự kiện'
					required
				/>
				<HStack
					gap={4}
					width='100%'
				>
					<FieldInput
						id='displayPrice'
						name='displayPrice'
						label='Giá hiển thị'
						placeholder='Nhập giá hiển thị'
						type='number'
						required
					/>
					<FieldSelectAsync
						id='location'
						name='location'
						label='Địa điểm'
						promise={() => LocationClientService.find().then((res) => res.data)}
						fieldLabel='name'
						fieldValue='name'
						portalRef={dialogRef as any}
						clearable
						placeholder='Chọn địa điểm'
					/>
				</HStack>
				<FieldEditor
					name='description'
					label='Mô tả'
					placeholder='Nhập mô tả'
				/>

				<HStack
					gap={4}
					width='100%'
					alignItems='center'
				>
					<Box flex={1}>
						<FieldSwitch
							id='isBanner'
							name='isBanner'
							label='Sử dụng làm banner'
							onChange={(value) => setIsBanner(value)}
						/>
					</Box>
					<Box flex={1}>
						{isBanner && (
							<FieldInput
								id='order'
								name='order'
								label='Thứ tự banner'
								placeholder='Nhập thứ tự banner'
								type='number'
								required
							/>
						)}
					</Box>
				</HStack>
				<FieldRating
					id='ratingStar'
					name='ratingStar'
					label='Đánh giá'
					placeholder='Nhập đánh giá'
					center
					size='lg'
				/>
			</VStack>
		</Table.DialogCreate>
	);
}
