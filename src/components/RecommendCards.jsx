import React, { useRef, useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import {city} from '../utils';
import RecommendCard from './RecommendCard';


const RecommendCards = () => {
    const [scrollPosition, setPosition] = useState(0);
    const cardRef = useRef();
    const width = 240;

    const handleScroll = (scrollAmount) =>{
        const newScrollPosition = scrollPosition + scrollAmount;
        if(newScrollPosition >= cardContents.length*width || newScrollPosition <0){
            return;
        }
        setPosition(newScrollPosition);
        cardRef.current.scrollLeft = newScrollPosition;
        
    }
  return (
    <div className='flex justify-center items-center'>
        <FaArrowCircleLeft className='w-10 h-10 p-1 hidden sm:visible' onClick={()=>{
            handleScroll(-width)
        }}/>
        <div ref={cardRef} className='hideScroll grid grid-flow-col scroll-auto snap-x overflow-x-scroll overflow-hidden'>
            {
                city.map((element, idx)=>{
                    return <div key={idx}><RecommendCard content={element} />
                    <h1 className='text-xl
                     font-medium p-1 ml-2'>{element.heading}</h1>
                    </div>
                })
            }
        </div>
        <FaArrowCircleRight className='w-10 h-10 p-1 hidden sm:visible' onClick={()=>{
            handleScroll(width)
        }}/>
    </div>
  )
}

export default RecommendCards