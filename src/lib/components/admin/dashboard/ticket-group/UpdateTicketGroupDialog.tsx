'use client';

import { createListCollection, HStack, VStack } from '@chakra-ui/react';
import { FieldDate, FieldEditor, FieldInput, FieldSelect, Table } from '@lib/components';
import { ENUM_DATE_TYPE } from '@lib/enums';
import { TicketGroupClientService } from '@lib/services';
import { UpdateTicketGroupBody } from '@lib/types';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { DateType } from '@lib/constants';

const validationSchema = Yup.object().shape({});

export function UpdateTicketGroupDialog() {
	const [dateType, setDateType] = useState<ENUM_DATE_TYPE>(ENUM_DATE_TYPE.DURATION);
	const dialogRef = useRef<HTMLDivElement>(null);

	const onUpdate = async (id: string, values: UpdateTicketGroupBody) => {
		return TicketGroupClientService.updateById(id, values);
	};

	return (
		<Table.DialogUpdate<UpdateTicketGroupBody>
			title='Cập nhật nhóm vé'
			successMessage='Cập nhật nhóm vé thành công'
			failureMessage='Cập nhật nhóm vé thất bại'
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
						label='Tên nhóm vé'
						placeholder='Nhập tên nhóm vé'
						required
					/>
					<FieldSelect
						id='dateType'
						name='dateType'
						collection={createListCollection({
							items: Object.values(ENUM_DATE_TYPE).map((item) => ({
								label: DateType[item],
								value: item
							}))
						})}
						defaultValue={ENUM_DATE_TYPE.DURATION}
						label='Loại thời gian nhóm vé'
						placeholder='Loại thời gian nhóm vé'
						portalRef={dialogRef as any}
						clearable={false}
						required
						onChange={(value) => setDateType(value)}
					/>
				</HStack>
				{dateType === ENUM_DATE_TYPE.DURATION && (
					<HStack
						gap={4}
						width='100%'
					>
						<FieldDate
							id='fromDate'
							name='fromDate'
							label='Ngày bắt đầu'
							placeholder='Nhập ngày bắt đầu'
							required
						/>

						<FieldDate
							id='toDate'
							name='toDate'
							label='Ngày kết thúc'
							placeholder='Nhập ngày kết thúc'
							required
						/>
					</HStack>
				)}
				<FieldEditor
					name='description'
					label='Mô tả'
					placeholder='Nhập mô tả'
				/>
			</VStack>
		</Table.DialogUpdate>
	);
}
