'use client';

import { Box, createListCollection, HStack, VStack } from '@chakra-ui/react';
import {
	FieldEditor,
	FieldInput,
	FieldSelect,
	FieldSelectAsync,
	FieldSwitch,
	FieldUpload,
	Table
} from '@lib/components';
import { ENUM_EVENT_TYPE } from '@lib/enums';
import { EventClientService, LocationClientService } from '@lib/services';
import { UpdateEventBody } from '@lib/types';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { EventType } from '@lib/constants';

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

export function UpdateEventDialog() {
	const [isBanner, setIsBanner] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);

	const onUpdate = async (id: string, values: UpdateEventBody) => {
		return EventClientService.updateById(id, values);
	};

	return (
		<Table.DialogUpdate<UpdateEventBody>
			title='Cập nhật sự kiện'
			successMessage='Cập nhật sự kiện thành công'
			failureMessage='Cập nhật sự kiện thất bại'
			validationSchema={validationSchema}
			onUpdate={onUpdate}
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
			</VStack>
		</Table.DialogUpdate>
	);
}
