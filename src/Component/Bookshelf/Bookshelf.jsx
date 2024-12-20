import React from 'react';
import { CiSearch } from "react-icons/ci";
const Bookshelf = () => {
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
      <main className="flex-1 p-6">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold">Good Morning</div>
          <div className="flex items-center space-x-4">
            <CiSearch />
            <input type="text" className='border-2 w-[100px]' placeholder='Search'/>
            <button className="btn btn-sm btn-outline">Lang</button>
            <button className="btn btn-sm btn-outline">09:00 AM</button>
            <button className="btn btn-sm btn-outline">4-Mar-2023</button>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://via.placeholder.com/40" alt="User" />
              </div>
            </div>
          </div>
        </div>

        {/* Today's Quote */}
        <div className="card w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
          <div className="card-body">
            <p className="text-xl">"There is more treasure in books than in all the pirate's loot on Treasure Island."</p>
            <p className="text-right">- Walt Disney</p>
          </div>
        </div>

        {/* New Arrivals Carousel */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
          <div className="carousel rounded-box">
            <div className="carousel-item"><img src="https://via.placeholder.com/100x150" alt="Book 1" /></div>
            <div className="carousel-item"><img src="https://via.placeholder.com/100x150" alt="Book 2" /></div>
            <div className="carousel-item"><img src="https://via.placeholder.com/100x150" alt="Book 3" /></div>
            <div className="carousel-item"><img src="https://via.placeholder.com/100x150" alt="Book 4" /></div>
            <div className="carousel-item"><img src="https://via.placeholder.com/100x150" alt="Book 5" /></div>
          </div>
        </div>

        {/* Recommended for You */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="card bg-white shadow-md">
              <figure><img src="https://via.placeholder.com/150x200" alt="Book" /></figure>
              <div className="card-body">
                <h3 className="card-title">Don't Make Me Think</h3>
                <p>Steve Krug</p>
              </div>
            </div>
            <div className="card bg-white shadow-md">
              <figure><img src="https://via.placeholder.com/150x200" alt="Book" /></figure>
              <div className="card-body">
                <h3 className="card-title">The Design of Everyday Things</h3>
                <p>Don Norman</p>
              </div>
            </div>
            {/* Repeat similar cards */}
          </div>
        </div>

        {/* Recent Readings */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Readings</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="card bg-white shadow-md">
              <figure><img src="https://via.placeholder.com/150x200" alt="Book" /></figure>
              <div className="card-body">
                <h3 className="card-title">React Handbook</h3>
                <p>Flavio Copes</p>
              </div>
            </div>
            <div className="card bg-white shadow-md">
              <figure><img src="https://via.placeholder.com/150x200" alt="Book" /></figure>
              <div className="card-body">
                <h3 className="card-title">Rich Dad Poor Dad</h3>
                <p>Robert Kiyosaki</p>
              </div>
            </div>
            {/* Repeat similar cards */}
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Bookshelf;
