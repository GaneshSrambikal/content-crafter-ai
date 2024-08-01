'use client'
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'
import 'react-quill/dist/quill.snow.css';
const QuillEditor = ({ value }: { value: string }) => {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), [])
    return (
        <ReactQuill
            theme='snow'
            value={value}
        ></ReactQuill>
    )
}

export default QuillEditor