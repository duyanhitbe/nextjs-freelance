'use client';

import { HStack, VStack } from '@chakra-ui/react';
import { FieldInput, Table } from '@lib/components';
import { TicketInfoClientService } from '@lib/services';
import { UpdateTicketInfoBody } from '@lib/types';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Tên vé không được bỏ trống'),
	order: Yup.number().min(1, 'Thứ tự vé phải lớn hơn 1').optional()
});

export function UpdateTicketInfoDialog() {
	const onUpdate = async (id: string, values: UpdateTicketInfoBody) => {
		return TicketInfoClientService.updateById(id, values);
	};

	return (
		<Table.DialogUpdate<UpdateTicketInfoBody>
			title='Cập nhật vé'
			successMessage='Cập nhật vé thành công'
			failureMessage='Cập nhật vé thất bại'
			validationSchema={validationSchema}
			onUpdate={onUpdate}
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
						id='order'
						name='order'
						label='Thứ tự vé'
						placeholder='Nhập thứ tự vé'
						type='number'
					/>
				</HStack>
			</VStack>
		</Table.DialogUpdate>
	);
}
