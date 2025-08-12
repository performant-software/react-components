import React, { useCallback, useRef, useState } from 'react'
import { HiPhoto } from 'react-icons/hi2'

interface Props {
  accept?: string
  description?: string
  fileDescription?: string
  label?: string
  multiple?: boolean
  onChange: (arg: any) => void
  value?: any
}

interface FileInfo {
  name: string
  size: string
}

const BYTES_PER_KB = 1024
const BYTES_PER_MB = 1024 * 1024

const MediaSelect: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState([])

  const openDialog = () => inputRef.current?.click();

  const getFileSize = useCallback((bytes: number) => {
    if (bytes < BYTES_PER_MB) {
      return `${(bytes / BYTES_PER_KB).toFixed(2)} KB`
    } else {
      console.log(bytes)
      return `${(bytes / (BYTES_PER_MB)).toFixed(2)} MB`
    }
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    props.onChange(files)

    if (files) {
      const fileArray = Array.from(files)
      setFileInfo(fileArray.map(f => ({
          name: f.name,
          size: getFileSize(f.size)
      })))
    }
  }

  return (
    <>
      <button
        className='w-full flex items-center justify-center py-8 text-zinc-500 flex-col gap-4 rounded-lg border border-dashed shadow-sm border-zinc-200'
        onClick={openDialog}
        type='button'
      >
        <HiPhoto
          size={48}
        />
        <div>
          <p><span className='text-black font-semibold'>Upload a file</span> or drag and drop</p>
          {props.fileDescription && (<p>{props.fileDescription}</p>)}
        </div>
      </button>
      {fileInfo.map(file => (
        <div
          className='py-2.5 px-3 rounded-xl border border-zinc-200 bg-white'
          key={file.name}
        >
          {file.name}
          {file.size}
        </div>
      ))}
      <input
        accept={props.accept}
        className='hidden'
        multiple={props.multiple}
        onChange={onChange}
        ref={inputRef}
        type="file"
      />
    </>
  )
}

export default MediaSelect
