import React, { useCallback, useMemo, useRef, useState } from 'react'
import { HiOutlineTrash, HiPhoto } from 'react-icons/hi2'
import Button from './Button'

interface Props {
  accept?: string
  description?: string
  fileDescription?: string
  label?: string
  files?: FileList
  multiple?: boolean
  onChange: (arg: FileList) => void
  onRemoveFile?: (index: number) => void
}

const BYTES_PER_KB = 1024
const BYTES_PER_MB = Math.pow(BYTES_PER_KB, 2)

const MediaSelect: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openDialog = () => inputRef.current?.click();

  const getFileSize = useCallback((bytes: number) => {
    if (bytes < BYTES_PER_MB) {
      return `${(bytes / BYTES_PER_KB).toFixed(2)} KB`
    } else {
      return `${(bytes / BYTES_PER_MB).toFixed(2)} MB`
    }
  }, []);

  const fileInfo = useMemo(() => {
    const fileArray = props.files ? Array.from(props.files) : []

    return fileArray.map(f => ({
      name: f.name,
      size: getFileSize(f.size)
    }))
  }, [props.files])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.files)

  return (
    <>
      <button
        className='w-full flex items-center justify-center py-8 text-zinc-500 flex-col gap-4 rounded-lg border border-dashed shadow-sm border-zinc-200 hover:cursor-pointer'
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
      {fileInfo.map((file, index) => (
        <div
          className='py-2.5 px-3 rounded-xl border border-zinc-200 bg-white flex justify-between items-center mt-2'
          key={file.name}
        >
          <div>
            <p className='text-sm font-semibold'>{file.name}</p>
            <p className='text-xs'>{file.size}</p>
          </div>
          {props.onRemoveFile && (
            <Button
              iconOnly
              onClick={() => props.onRemoveFile(index)}
              variant='plain'
            >
              <HiOutlineTrash size={16} />
            </Button>
          )}
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
