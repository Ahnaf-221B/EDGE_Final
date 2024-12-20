import React from 'react';
import { CiSearch } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-2xl font-bold text-orange-500">My Book Shelf</div>
        <nav className="mt-6">
          <ul>
            <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Home</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Search</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">My Shelf</a></li>
            <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Favourite</a></li>
          </ul>
        </nav>
       
      </aside>

      {/* Main Content */}
      
    </div>
  );
};

export default Sidebar;
