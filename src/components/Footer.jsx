import React from 'react'
import { GoHomeFill } from "react-icons/go";
import {  CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div style={{
      boxShadow: "#E0E0E0 -2px -2px 2px 2px"
    }} className='h-11 shadow-2xl z-20 flex justify-evenly items-center py-2 rounded-t-3xl'>
      <GoHomeFill className='w-8 h-8 text-blue-500 cursor-pointer'/>
      <IoWalletOutline className='w-6 h-6 cursor-pointer'/>
      <CiHeart className='w-6 h-6 cursor-pointer'/>
      <CgProfile className='w-6 h-6 cursor-pointer'/>
    </div>
  )
}

export default Footer
