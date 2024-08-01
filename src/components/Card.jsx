import React, { useRef } from 'react'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Card = ({content}) => {
    const cardRef = useRef();
    const navigate = useNavigate();

    const handleClick = ()=>{

    }
  return (
    <div onClick={()=>{
      navigate("/product", {state: content})
    }} ref={cardRef} style={{
      background: `url(${content.backgroungImg}) center center/cover`,
    }} className='card snap-center h-56 w-48 m-2 rounded-3xl flex flex-col justify-end text-white aspect-video cursor-pointer'>
      <div className='p-2'>
        <div>
            <p className='p-1 m-1 text-sm bg-[#969393dc] rounded inline-block'>{content.heading}</p>
        </div>
        <div className='flex items-center m-1 text-sm '>
            <div className='bg-[#969393dc] p-1 flex justify-center items-center rounded'>
                <FaStar className='text-yellow-400 m-1 inline-block'/>
                <span>{content.star}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
