import { GoArrowLeft } from 'react-icons/go';
import { FaCarAlt } from 'react-icons/fa';
import { IoAlertCircleOutline } from 'react-icons/io5';
// import Products from '../Products/Products';

// const SideBar = () => {
//   return (
//     <div className="text-black container mx-auto ml-8 my-8">
//       <div className="grid lg:grid-cols-5 gap-4 lg:flex-row-reverse">
//         {/* Sidebar Section */}
//         <div className="col-span-1">
//           <div className="flex justify-start items-center rounded-lg gap-3 py-2.5 px-4 bg-[#FFFFFF]">
//             <GoArrowLeft />
//             <h1 className="cursor-pointer">All restaurants</h1>
//           </div>
//           <div className="text-sm flex my-3 justify-between items-center">
//             <FaCarAlt size={20} className="ml-3" />
//             <div className="p-5">
//               <p className="text-[#5AC31A]">
//                 Free delivery from 1000 ₸ 40–50 min
//               </p>
//               <p className="text-slate-400">Detailed conditions</p>
//             </div>
//             <IoAlertCircleOutline size={20} />
//           </div>
//           <div className="font-semibold text-lg">
//             <p className="flex justify-start items-center rounded-lg gap-3 py-2.5 px-4 bg-[#FFFFFF] my-2">
//               Menu
//             </p>
//             <p className="flex justify-start items-center rounded-lg gap-3 py-2.5 px-4 bg-[#FFFFFF] my-2">
//               What's new
//             </p>
//           </div>
//         </div>
//         {/* Main Products Section */}
//         <div className="col-span-3">
//           <Products />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import React from 'react';

const Sidebar = ({ categories, activeCategory, handleCategoryClick }) => {
  return (
    <div className="md:w-1/4 w-full md:h-screen p-5 fixed md:sticky top-0">
      <div className="flex justify-start items-center rounded-lg gap-3 py-2.5 px-4 text-black font-bold text-xl bg-[#FFFFFF]">
        <GoArrowLeft />
        <h1 className="cursor-pointer">All restaurants</h1>
      </div>
      <div className="text-sm flex my-3 justify-between items-center">
        <FaCarAlt size={20} className="ml-3" />
        <div className="p-5">
          <p className="text-[#5AC31A]">Free delivery from 1000 ₸ 40–50 min </p>
          <p className="text-slate-400">Detailed conditions</p>
        </div>
        <IoAlertCircleOutline size={20} className="cursor-pointer" />
      </div>
      <ul className="space-y-4 overflow-auto">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              activeCategory === category
                ? 'font-bold text-green-700 bg-[#FFFFFF] p-3 rounded-xl'
                : 'text-black'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
