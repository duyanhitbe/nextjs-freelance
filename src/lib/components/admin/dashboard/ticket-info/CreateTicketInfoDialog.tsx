'use client';

import { FieldInput, Table } from '@lib/components';
import { TicketInfoClientService } from '@lib/services';
import * as Yup from 'yup';
import { HStack, VStack } from '@chakra-ui/react';

const initialValues = {
	name: '',
	quantity: 0,
	price: 0,
	order: 1
};

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Tên vé không được bỏ trống'),
	quantity: Yup.number()
		.min(1, 'Số lượng vé phải lớn hơn 1')
		.required('Số lượng vé không được bỏ trống'),
	price: Yup.number().min(1, 'Giá vé phải lớn hơn 1').required('Giá vé không được bỏ trống'),
	order: Yup.number().min(1, 'Thứ tự vé phải lớn hơn 1').optional()
});

type Values = typeof initialValues;

type Props = {
	ticketGroupId: string;
};

export function CreateTicketInfoDialog({ ticketGroupId }: Props) {
	const onCreate = async (values: Values) => {
		return TicketInfoClientService.create({ ...values, ticketGroupId });
	};

	return (
		<Table.DialogCreate
			dialogTitle='Tạo vé'
			successMessage='Tạo mới vé thành công'
			failureMessage='Tạo mới vé thất bại'
			initialValues={initialValues}
			validationSchema={validationSchema}
			onCreate={onCreate}
		>
			<VStack gap={4}>
				<HStack
					gap={4}
					width='100%'
				>
					<FieldInput
						id='name'
						name='name'
						label='Tên vé'
						placeholder='Nhập tên vé'
						required
					/>
					<FieldInput
						id='price'
						name='price'
						label='Giá vé'
						placeholder='Nhập giá vé'
						required
						type='number'
					/>
				</HStack>
				<HStack
					gap={4}
					width='100%'
				>
					<FieldInput
						id='quantity'
						name='quantity'
						label='Số lượng vé'
						placeholder='Nhập số lượng vé'
						required
						type='number'
					/>
					<FieldInput
						id='order'
						name='order'
						label='Thứ tự vé'
						placeholder='Nhập thứ tự vé'
						type='number'
					/>
				</HStack>
			</VStack>
		</Table.DialogCreate>
	);
}
