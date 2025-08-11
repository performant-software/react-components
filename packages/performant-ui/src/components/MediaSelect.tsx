import React from 'react'

interface Props {
  acceptedTypes?: string
  description?: string
  label?: string
}

const MediaSelect: React.FC<Props> = (props) => {
  return (
    <input type="file" multiple />
  )
}

export default MediaSelect
