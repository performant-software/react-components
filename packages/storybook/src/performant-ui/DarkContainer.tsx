import React from 'react'

interface Props {
  children: React.ElementType | React.ElementType[]
}

const DarkContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='dark bg-black p-8'>
      {children}
    </div>
  )
}

export default DarkContainer
