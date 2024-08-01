import React, { useRef, useState } from 'react'
import Card from './Card'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import cardContents from '../utils';


const Cards = () => {
    const [scrollPosition, setPosition] = useState(0);
    const cardRef = useRef();
    const width = 192;

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
        <FaArrowCircleLeft className={`w-10 h-10 p-1 ${ window.innerWidth >= "425" ? "visible" : "hidden" }`} onClick={()=>{
            handleScroll(-width)
        }}/>
        <div ref={cardRef} className='hideScroll grid grid-flow-col scroll-auto snap-x overflow-x-scroll overflow-hidden'>
            {
                cardContents.map((element, idx)=>{
                    return <div key={idx}><Card content={element} /></div>
                })
            }
        </div>
        <FaArrowCircleRight className={`w-10 h-10 p-1 ${ window.innerWidth >= "425" ? "visible" : "hidden" }`} onClick={()=>{
            handleScroll(width)
        }}/>
    </div>
  )
}

export default Cards