import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { PiBathtubDuotone } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Icons from '../components/Icons';

const Product = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

  if(!data){
    alert("page not found")
    navigate("/products")
    return;
  }
  return (
    <div>
      <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[425px] rounded-xl ">
        <div className="response max-w-[425px] w-full h-full p-4">
          <div className='relative'>
            <IoIosArrowBack onClick={()=>{
              navigate("/products")
            }} className='absolute top-3 left-2 w-8 h-8 bg-white rounded-xl cursor-pointer'/>
            <img className='w-full h-1/4 rounded-3xl' src={`${data.backgroungImg}`} alt="img" />
          </div>
          <div>
            <div className="flex justify-between p-3">
              <h1 className="text-xl font-medium">{data.heading}</h1>
              <Link to="/" className="text-blue-600">Show map</Link>
            </div>
            <div className='flex items-center text-sm text-gray-500'>
              <FaStar className='text-yellow-400 m-1 inline-block'/>
              <span className='p-1'>{data.star}</span>
              <span>({data.reviews} Reviews)</span>
            </div>
            <p className='text-sm flex flex-col'>
              {data.para}
              <span className='text-base text-blue-500 font-medium flex items-center my-1 cursor-pointer'>Read more <FaAngleDown className='m-1'/></span>
            </p>
            <div>
              <h1 className="text-xl font-medium">Facilities</h1>
              <div className='flex justify-evenly'>
                <Icons title={"Wifi"} icon={<FaWifi className='w-10 h-10'/>}/>
                <Icons title={"Dinner"} icon={<MdDinnerDining className='w-10 h-10'/>}/>
                <Icons title={"1 Tub"} icon={<PiBathtubDuotone className='w-10 h-10'/>}/>
                <Icons title={"Pool"} icon={<FaSwimmingPool className='w-10 h-10'/>}/>
              </div>
            </div>
            <div className='flex justify-between items-center w-full my-4'>
              <div>
                <p className='text-sm font-semibold'>Price</p>
                <p className='text-green-500 font-semibold text-3xl'>$199</p>
              </div>
              <button onClick={()=>{
                navigate("/");
              }} type="button" className="text-white mx-4 my-6 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2  focus:outline-none flex justify-center items-center gap-2 w-[30vw] h-full text-lg">Book Now <span><FaArrowRight /></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product
