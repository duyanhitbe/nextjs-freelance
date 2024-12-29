'use client';

import { FieldDate, FieldEditor, FieldInput, FieldSelect, Table } from '@lib/components';
import { TicketGroupClientService } from '@lib/services';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { createListCollection, HStack, VStack } from '@chakra-ui/react';
import { ENUM_DATE_TYPE } from '../../../../enums';
import { DateType } from '../../../../constants';
import { set } from 'lodash';

const initialValues = {
	name: '',
	description: undefined,
	dateType: ENUM_DATE_TYPE.DURATION,
	fromDate: undefined,
	toDate: undefined,
	dates: []
};

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Tên nhóm vé không được bỏ trống')
});

type Values = typeof initialValues;

type Props = {
	eventId: string;
};

export function CreateTicketGroupDialog({ eventId }: Props) {
	const [dateType, setDateType] = useState<ENUM_DATE_TYPE>(ENUM_DATE_TYPE.DURATION);
	const dialogRef = useRef<HTMLDivElement>(null);

	const onCreate = async (values: Values) => {
		if (values.dates) {
			set(values, 'dates', values.dates.map((d) => new Date(d)) as any[]);
		}
		return TicketGroupClientService.create({ ...values, eventId });
	};

	return (
		<Table.DialogCreate
			dialogTitle='Tạo nhóm vé'
			successMessage='Tạo mới nhóm vé thành công'
			failureMessage='Tạo mới nhóm vé thất bại'
			initialValues={initialValues}
			validationSchema={validationSchema}
			onCreate={onCreate}
			ref={dialogRef}
			onCancel={() => setDateType(ENUM_DATE_TYPE.DURATION)}
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
				{dateType === ENUM_DATE_TYPE.FIXED && (
					<FieldDate
						id='dates'
						name='dates'
						label='Ngày diễn ra sự kiện'
						placeholder='Nhập ngày diễn ra sự kiện'
						required
						multiple
					/>
				)}
				<FieldEditor
					name='description'
					label='Mô tả'
					placeholder='Nhập mô tả'
				/>
			</VStack>
		</Table.DialogCreate>
	);
}
