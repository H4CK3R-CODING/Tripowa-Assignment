import React from 'react'

const Icons = ({icon,title}) => {
  return (
    <div className='aspect-square flex flex-col justify-center items-center bg-blue-100 p-3 rounded-2xl text-gray-400'>
        {icon}
      <p>{title}</p>
    </div>
  )
}

export default Icons
