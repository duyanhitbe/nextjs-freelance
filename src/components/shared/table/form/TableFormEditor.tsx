'use client';

import 'react-quill-new/dist/quill.snow.css';
import './TableFormEditor.css';
import React, { useState } from 'react';
import { Col, Flex } from 'antd';
import { TableFormLabel } from './TableFormLabel';
import { useTableContext } from '../TableProvider';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill-new'));

type Props = {
	name: string;
	label: string;
	span?: number;
	required?: boolean;
};

const modules = {
	clipboard: {
		matchVisual: false
	},
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike'],
		[{ color: [] }, { background: [] }],
		['blockquote', 'code-block'],
		[{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
		[{ indent: '-1' }, { indent: '+1' }],
		[{ align: [] }],
		['link', 'image', 'video', 'formula']
	]
};

const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'color',
	'background',
	'blockquote',
	'code-block',
	'list',
	'indent',
	'align',
	'link',
	'image',
	'video',
	'formula'
];

export function TableFormEditor({ name, label, span = 24, required }: Props) {
	const { formData, setFormData } = useTableContext();
	const [isFocused, setIsFocused] = useState(false);

	const handleChange = (value: string) => {
		console.log({ value });
		console.log({ value });
		setFormData((prev: any) => ({ ...prev, [name]: value }));
	};

	return (
		<Col
			span={span}
			style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
			<Flex
				vertical
				gap={5}>
				<TableFormLabel
					label={label}
					required={required}
				/>
				<ReactQuill
					className={`custom-quill ${isFocused ? 'focused' : ''}`}
					theme='snow'
					modules={modules}
					formats={formats}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChange={handleChange}
					value={formData[name]}
				/>
			</Flex>
		</Col>
	);
}
