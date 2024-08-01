import React from 'react'

const RecommendCard = ({content}) => {
  return (
    <div  style={{
      background: `url(${content.backgroungImg}) center center/cover`,
    }} className='card snap-center h-40 w-60 m-2 rounded-3xl flex flex-col justify-end text-white aspect-video cursor-pointer'>
      <div className='relative p-2'>
        <div className='absolute right-3 -bottom-3 flex items-center m-1 text-sm '>
            <div className='bg-black border-white border-2 p-1 flex justify-center items-center rounded-xl'>
                <span>{content.tag}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendCard
