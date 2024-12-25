import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { IoIosStar } from 'react-icons/io';
import { MdInfoOutline } from 'react-icons/md';
import { FaGift } from 'react-icons/fa6';

const Products = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-[50%] rounded-3xl flex items-end justify-start relative overflow-hidden">
        <img
          src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg"
          alt="Example"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-white/10 to-transparent opacity-70 rounded-2xl"></div>
        <div className="absolute p-5 z-10  ">
          <h1 className="font-bold text-5xl text-white">KFC Mega Park</h1>
          <div className="stats my-5 shadow bg-[#FFFFFFE6] mr-3 relative group">
            {/* Clickable Stat Section */}
            <div className="stat flex justify-between items-center bg-opacity-75 hover:bg-opacity-100 py-2 cursor-pointer">
              <RxAvatar size={35} className="text-black" />
              <div className="text-black">
                <div className="stat-value text-xl">35-45</div>
                <div className="stat-desc">min</div>
              </div>
            </div>

            {/* Hover Modal */}
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-max bg-white text-black text-sm rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
              <p className="font-bold text-3xl">Today: 35 – 45 min</p>
            </div>
          </div>

          <div className="stats my-5 shadow bg-[#FFFFFFE6] mr-3">
            <div className="stat flex justify-between items-center bg-opacity-75 hover:bg-opacity-100 py-2 cursor-pointer">
              <IoIosStar size={35} className="text-black" />
              <div className="text-black">
                <div className="stat-value text-xl">4.5</div>
                <div className="stat-desc">200+</div>
              </div>
            </div>
          </div>
          <div className="stats my-5 shadow bg-[#FFFFFFE6]">
            <div className="stat flex justify-between items-center bg-opacity-75 hover:bg-opacity-100 py-2.5 cursor-pointer">
              <MdInfoOutline size={35} className="text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative group my-4 p-4 bg-[#72AA52] bg-opacity-30 rounded-xl flex justify-start items-center">
        <div className="w-[5%] h-full">
          <img
            src="https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <p className="text-[#72AA52]">Free delivery – on any order</p>

        <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-max bg-white text-black text-sm rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity p-5  ">
          <p className="font-bold text-3xl">Free delivery </p>on any order
        </div>
      </div>
    </div>
  );
};

export default Products;
