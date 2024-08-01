import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import RecommendCards from "../components/RecommendCards";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[425px] rounded-xl ">
        <div className="response max-w-[425px] w-full h-full">
          <div className="flex justify-between">
            <div className="m-4">
              <p className="text-sm ">Explore</p>
              <p className="text-2xl font-medium">Aspen</p>
            </div>
            {/* <div className="m-4">Aspen,USa</div> */}
            <div className="flex justify-center items-center">
              <IoLocationSharp className="text-blue-500"/>
              <select className="cursor-pointer" name="city" id="city">
                <option value="usa">Aspen,USA</option>
                <option value="india">Aspen,IND</option>
              </select>
            </div>
          </div>
          <div className="w-[90vw]">
            <div className="relative mx-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <img className="w-4 h-4 text-gray-500" src="./search.svg" alt="ksd" />
                </div>
                <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border w-full max-w-[425px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5"
                placeholder="name@flowbite.com"
                />
            </div>
          </div>
          <div className="hideScroll static mt-3 mx-1 overflow-x-auto h-6 ">
            <span className="bg-blue-100 text-blue-600 text-sm font-semibold me-3 p-2 rounded-3xl cursor-pointer">Location</span>
            <span className="text-gray-400 text-sm font-semibold me-3 p-2 cursor-pointer rounded">Hotels</span>
            <span className="text-gray-400 text-sm font-semibold me-3 p-2 cursor-pointer rounded ">Food</span>
            <span className="text-gray-400 text-sm font-semibold me-3 p-2 cursor-pointer rounded ">Hotels</span>
            <span className="text-gray-400 text-sm font-semibold me-3 p-2 cursor-pointer rounded ">Adventure</span>
            <span className="text-gray-400 text-sm font-semibold me-3 p-2 cursor-pointer rounded ">Gym</span>
            <span className="text-gray-400 text-sm font-semibold me-3 p-2 cursor-pointer rounded text-">Taste Food</span>
            <span className="text-gray-400 text-sm font-semibold me-3 p-2 cursor-pointer rounded text-">Best View</span>
          </div>
          <div>
            <div className="flex justify-between p-3">
              <h1 className="text-xl font-medium">Popular</h1>
              <Link to="/" className="text-blue-600">See all</Link>
            </div>
            <div>
              <Cards />
            </div>
          </div>
          <div>
            <div className="flex justify-between p-3">
              <h1 className="text-xl font-medium">Recommended</h1>
            </div>
            <div>
              <RecommendCards/>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Products;
