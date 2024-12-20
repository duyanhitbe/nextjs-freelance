'use client';

import {
	CloseButton,
	Field,
	FileInput,
	FileUploadClearTrigger,
	FileUploadRoot,
	InputGroup
} from '@lib/components';
import { useField, useFormikContext } from 'formik';
import { LuFileUp } from 'react-icons/lu';
import { HStack, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ImgurClientService } from '@lib/services';

type Props = {
	id: string;
	name: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
};

export function FieldUpload({ label, required, ...props }: Props) {
	const [image, setImage] = useState<File | null>(null);
	const [field, meta] = useField(props);
	const [previewUrl, setPreviewUrl] = useState('');
	const { setFieldValue } = useFormikContext();

	useEffect(() => {
		if (image) {
			const previewURL = URL.createObjectURL(image);
			setPreviewUrl(previewURL);
			ImgurClientService.upload(image).then((link) => setFieldValue(props.name, link));
		}
	}, [image]);

	return (
		<Field
			label={label}
			required={required}
			errorText={meta.error}
			invalid={Boolean(meta.touched && meta.error)}
		>
			<HStack
				gap={2}
				width='100%'
			>
				<FileUploadRoot
					gap='1'
					accept={['image/png']}
					{...field}
					onFileChange={({ acceptedFiles }) => setImage(acceptedFiles[0])}
				>
					<InputGroup
						w='full'
						startElement={<LuFileUp />}
						endElement={
							<FileUploadClearTrigger asChild>
								<CloseButton
									me='-1'
									size='xs'
									variant='plain'
									focusVisibleRing='inside'
									focusRingWidth='2px'
									pointerEvents='auto'
									color='fg.subtle'
									onClick={() => setPreviewUrl('')}
								/>
							</FileUploadClearTrigger>
						}
					>
						<FileInput cursor='pointer' />
					</InputGroup>
				</FileUploadRoot>
				<Image
					rounded='xs'
					src={previewUrl || '/thumbnail.jpg'}
					alt='Preview'
					height={38}
					width={38}
					cursor='pointer'
				/>
			</HStack>
		</Field>
	);
}
