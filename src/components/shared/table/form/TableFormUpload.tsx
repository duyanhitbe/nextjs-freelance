'use client';
import { Col, Flex, GetProp, Image, Upload, UploadFile, UploadProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { getFileNameFromUrl } from '@app/helpers';
import { useTableContext } from '../TableProvider';
import { TableFormLabel } from './TableFormLabel';

type Props = {
	name: string;
	label: string;
	span?: number;
	multiple?: boolean;
	center?: boolean;
	required?: boolean;
};

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

function getBase64(file: FileType): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});
}

export function TableFormUpload({ name, label, span = 24, multiple, center, required }: Props) {
	const { formData, setFormData } = useTableContext();
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [images, setImages] = useState<UploadFile<any>[]>([]);

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as FileType);
		}

		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
	};

	const handleChange: UploadProps['onChange'] = ({ fileList }) => {
		setImages(fileList);
	};

	const ButtonUpload = () => {
		return (
			<button
				style={{ border: 0, background: 'none' }}
				type='button'>
				<PlusOutlined />
				<div style={{ marginTop: 8 }}>Upload</div>
			</button>
		);
	};

	useEffect(() => {
		setImages(() => {
			if (!formData[name]) return [];

			if (multiple) {
				return formData[name].map((item: string, i: number) => ({
					uid: '-' + i + 1,
					name: getFileNameFromUrl(item),
					status: 'done',
					url: item
				}));
			} else {
				return [
					{
						uid: '-1',
						name: getFileNameFromUrl(formData[name]),
						status: 'done',
						url: formData[name]
					}
				];
			}
		});
	}, [formData]);

	return (
		<Col
			span={span}
			style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
			<Flex
				vertical
				align={center ? 'center' : undefined}
				gap={5}>
				<TableFormLabel
					label={label}
					required={required}
				/>
				<Upload
					listType='picture-card'
					fileList={images}
					onPreview={handlePreview}
					onChange={handleChange}>
					{images.length === 1 ? !multiple ? null : <ButtonUpload /> : <ButtonUpload />}
				</Upload>
				{previewImage && (
					<Image
						wrapperStyle={{ display: 'none' }}
						preview={{
							visible: previewOpen,
							onVisibleChange: (visible) => setPreviewOpen(visible),
							afterOpenChange: (visible) => !visible && setPreviewImage('')
						}}
						src={previewImage}
					/>
				)}
			</Flex>
		</Col>
	);
}
