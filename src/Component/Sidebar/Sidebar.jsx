import { Outlet } from "react-router";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
    <aside className="w-60 h-screen bg-white border-r flex flex-col">
        <div className="p-4">
            <h1 className="text-xl font-semibold">My Book Shelf</h1>
        </div>

        <nav className="flex-1">
            <ul className="space-y-2 p-4">
                <li>
                    <NavLink to="/home" className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="" className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        My Shelf
                    </NavLink>
                </li>
                <li>
                    <NavLink to="" className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        Favourite
                    </NavLink>
                </li>
            </ul>
        </nav>

        <div className="p-4 border-t">
            <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-gray-900">About</a>
                <a href="#" className="block hover:text-gray-900">Support</a>
                <a href="#" className="block hover:text-gray-900">Terms & Condition</a>
            </div>
        </div>
    </aside>

    <div className="flex-1">
        <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
            <div className="flex items-center gap-4">
                <select className="px-3 py-2 border rounded-md bg-white">
                    <option>All</option>
                </select>

                <div className="flex items-center">
                    <div className="search-container">
                        <input type="search" placeholder="Search..." className="px-4 py-2 border rounded-l-md w-[300px]" />
                        <button className="px-4 py-2 border rounded-r-md bg-blue-500 text-white">Search</button>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <select className="px-3 py-2 border rounded-md bg-white">
                    <option>Lang</option>
                </select>

                <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>09:30 HRS</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium">KS</span>
                    </div>
                    <span className="text-sm">Kenson</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </header>
    </div>
    <Outlet></Outlet>
</div>
   
  );
};

export default Sidebar;
