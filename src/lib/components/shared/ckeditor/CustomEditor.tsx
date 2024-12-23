'use client';

import 'ckeditor5/ckeditor5.css';
import '../../../../assets/css/ckeditor.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
	Alignment,
	AutoLink,
	Autosave,
	Bold,
	ClassicEditor,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	HtmlEmbed,
	Indent,
	IndentBlock,
	Italic,
	Link,
	Paragraph,
	SpecialCharacters,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	Underline
} from 'ckeditor5';

import translations from 'ckeditor5/translations/vi.js';
import { FieldInputProps, useFormikContext } from 'formik';

const LICENSE_KEY = 'GPL';

type Props = {
	field: FieldInputProps<any>;
	placeholder?: string;
};

export default function CustomEditor({ field, placeholder }: Props) {
	const { setFieldValue } = useFormikContext();
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const { editorConfig } = useMemo(() => {
		if (!isLayoutReady) {
			return {};
		}

		return {
			editorConfig: {
				toolbar: {
					items: [
						'heading',
						'|',
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'|',
						'bold',
						'italic',
						'underline',
						'|',
						'specialCharacters',
						'link',
						'insertTable',
						'htmlEmbed',
						'|',
						'alignment',
						'|',
						'outdent',
						'indent'
					],
					shouldNotGroupWhenFull: false
				},
				plugins: [
					Alignment,
					AutoLink,
					Autosave,
					Bold,
					Essentials,
					FontBackgroundColor,
					FontColor,
					FontFamily,
					FontSize,
					GeneralHtmlSupport,
					Heading,
					HtmlEmbed,
					Indent,
					IndentBlock,
					Italic,
					Link,
					Paragraph,
					SpecialCharacters,
					Table,
					TableCaption,
					TableCellProperties,
					TableColumnResize,
					TableProperties,
					TableToolbar,
					Underline
				],
				fontFamily: {
					supportAllValues: true
				},
				fontSize: {
					options: [10, 12, 14, 'default', 18, 20, 22],
					supportAllValues: true
				},
				heading: {
					options: [
						{
							model: 'paragraph',
							title: 'Paragraph',
							class: 'ck-heading_paragraph'
						},
						{
							model: 'heading1',
							view: 'h1',
							title: 'Heading 1',
							class: 'ck-heading_heading1'
						},
						{
							model: 'heading2',
							view: 'h2',
							title: 'Heading 2',
							class: 'ck-heading_heading2'
						},
						{
							model: 'heading3',
							view: 'h3',
							title: 'Heading 3',
							class: 'ck-heading_heading3'
						},
						{
							model: 'heading4',
							view: 'h4',
							title: 'Heading 4',
							class: 'ck-heading_heading4'
						},
						{
							model: 'heading5',
							view: 'h5',
							title: 'Heading 5',
							class: 'ck-heading_heading5'
						},
						{
							model: 'heading6',
							view: 'h6',
							title: 'Heading 6',
							class: 'ck-heading_heading6'
						}
					]
				},
				htmlSupport: {
					allow: [
						{
							name: /^.*$/,
							styles: true,
							attributes: true,
							classes: true
						}
					]
				},
				initialData: field.value || '',
				language: 'vi',
				licenseKey: LICENSE_KEY,
				link: {
					addTargetToExternalLinks: true,
					defaultProtocol: 'https://',
					decorators: {
						toggleDownloadable: {
							mode: 'manual',
							label: 'Downloadable',
							attributes: {
								download: 'file'
							}
						}
					}
				},
				placeholder: placeholder || 'Nhập nội dung vào đây!',
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells',
						'tableProperties',
						'tableCellProperties'
					]
				},
				translations: [translations]
			}
		};
	}, [isLayoutReady]);

	const props: any = {
		config: editorConfig,
		data: field.value,
		onChange: (event: any, editor: any) => {
			const data = editor.getData();
			setFieldValue(field.name, data);
		}
	};

	return (
		<div className='main-container'>
			<div
				className='editor-container editor-container_classic-editor'
				ref={editorContainerRef}
			>
				<div className='editor-container__editor'>
					<div ref={editorRef}>
						{editorConfig && (
							<CKEditor
								editor={ClassicEditor}
								{...props}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
