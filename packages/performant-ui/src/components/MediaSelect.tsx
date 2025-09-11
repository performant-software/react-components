import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { HiOutlineTrash, HiPhoto } from 'react-icons/hi2'
import Button from './Button'
import clsx from 'clsx'

interface Props {
  accept?: string
  description?: string
  fileDescription?: string
  label?: string
  imageUrl?: string
  onChange: (arg: FileList) => void
  onRemoveFile?: (index: number) => void
}

const MediaSelect: React.FC<Props> = (props) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(props.imageUrl)

  const inputRef = useRef<HTMLInputElement>(null);

  const openDialog = () => inputRef.current?.click();

  const onCleanup = useCallback((url: string) => {
    if (url !== props.imageUrl) {
      URL.revokeObjectURL(url)
    }
  }, [props.imageUrl])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(prev => {
      const newUrl =  URL.createObjectURL(Array.from(e.target.files)[0])

      if (prev) {
        onCleanup(prev)
      }

      return newUrl
    })

    props.onChange(e.target.files)
  }, [props.onChange, setImageUrl])

  useEffect(() => {
    return () => {
      if (imageUrl) {
        onCleanup(imageUrl)
      }
    }
  }, [])

  return (
    <>
      <div className='flex flex-col gap-2'>
        {props.label && (
          <span className='text-sm font-semibold'>
            {props.label}
          </span>
        )}
        <button
          className='w-full rounded-lg border border-dashed shadow-sm border-zinc-200 hover:cursor-pointer group relative overflow-hidden'
          data-populated={!!imageUrl || undefined}
          onClick={openDialog}
          type='button'
        >
          {imageUrl && (
            <img
              alt="Selected image"
              className='absolute w-full h-full object-cover'
              src={imageUrl}
            />
          )}
          <div className='flex w-full h-full items-center justify-center py-8 flex-col gap-4 group-data-populated:opacity-0 group-data-populated:hover:opacity-100 transition-opacity group-hover:backdrop-blur-3xl bg-gray-500/25 text-zinc-500 group-data-populated:text-zinc-100 group-data-populated:hover:bg-gray-500/75'>
            <HiPhoto
              size={48}
            />
            <div>
              <p className='font-semibold'>Upload a file</p>
              {props.fileDescription && (<p>{props.fileDescription}</p>)}
            </div>
          </div>
        </button>
      </div>
      <input
        accept={props.accept}
        className='hidden'
        onChange={onChange}
        ref={inputRef}
        type="file"
      />
    </>
  )
}

export default MediaSelect
