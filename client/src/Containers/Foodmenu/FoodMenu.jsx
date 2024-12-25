import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { IoIosStar } from 'react-icons/io';
import { MdInfoOutline } from 'react-icons/md';

const FoodMenu = ({ categories, sectionRefs }) => {
  return (
    <>
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="w-full h-[300px] md:h-[400px] rounded-3xl flex items-end justify-start relative overflow-hidden">
          <img
            src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg"
            alt="KFC Mega Park"
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70 rounded-2xl"></div>
          <div className="absolute p-5 z-10">
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              KFC Mega Park
            </h1>
            {/* Stats Section */}
            <div className="stats flex gap-4 my-5">
              {/* Delivery Time */}
              <div className="stat shadow bg-[#FFFFFFE6] p-4 rounded-lg relative group">
                <div className="flex items-center space-x-3">
                  <RxAvatar size={35} className="text-black" />
                  <div className="text-black">
                    <div className="stat-value text-xl">35-45</div>
                    <div className="stat-desc">min</div>
                  </div>
                </div>
                {/* Hover Modal */}
                <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-max bg-white text-black text-sm rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity p-5">
                  <p className="font-bold text-3xl">Today: 35 – 45 min</p>
                </div>
              </div>

              {/* Rating */}
              <div className="stat shadow bg-[#FFFFFFE6] p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <IoIosStar size={35} className="text-black" />
                  <div className="text-black">
                    <div className="stat-value text-xl">4.5</div>
                    <div className="stat-desc">200+</div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="stat shadow bg-[#FFFFFFE6] p-4 rounded-lg">
                <div className="flex items-center justify-center">
                  <MdInfoOutline size={35} className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Delivery Banner */}
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
        {/* Food Menu Section */}
        <div className="sm:w-3/4 md:w-full w-full bg-[#F5F5F5] p-8 space-y-16">
          {categories.map((category, index) => (
            <div
              key={index}
              id={category}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white shadow-lg rounded-lg p-4">
                    <img
                      src="https://eda.yandex/images/3806315/50eab6e7ee05847f4d6c3ad4a669cd79-216x188.jpeg"
                      alt={`Food Item ${item}`}
                      className="rounded-lg mb-4"
                    />
                    <div className="text-2xl font-bold text-black ">
                      5  450₸
                    </div>
                    <div className="text- text-black">
                      Баскет L: Крылья и Ножки
                    </div>
                    <button className="mt-4 px-4 py-2  w-full text-black bg-slate-100 font-semibold rounded-lg">
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
