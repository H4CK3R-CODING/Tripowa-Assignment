import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      background: `url('./background.jpg') center center/cover`
    }} className='back h-[100vh] max-w-[425px] rounded-xl overflow-hidden'>
      <div className='text-white w-full h-full flex justify-end flex-col'>
        <h1 className='font-[Calistoga] text-center text-5xl my-4'>Aspen</h1>
        <div className='flex h-full justify-end flex-col my-4'>
          <p className='text-xl ml-4'>Plan your</p>
          <p className='text-3xl font-[400] ml-4'>Luxurious</p>
          <p className='text-3xl font-[400] ml-4'>Vacation</p>
          <button onClick={()=>{
            navigate("/products");
          }} type="button" className="text-white mx-4 my-6 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none">Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Main
