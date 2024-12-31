import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiBookshelf } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className="bg-white flex-flex-row w-[250px] ml-[2rem] items-center bg-base-100 p-4">
      <h1 className="text-4xl mt-[20px] mb-8 items-center">
        My <span className="text-primary text-orange-500 ">Book</span> <br />{" "}
       <span className="text-5xl">Shelf</span>
      </h1>

      <nav className="flex flex-col gap-4 text-lg mt-[100px] ">
        <Link to="/" className="flex flex-row items-center gap-3 btn btn-ghost">
          <CiHome />
          Home
        </Link>

        <Link
          to="/search"
          className="flex flex-row items-center gap-3 btn btn-ghost"
        >
          <CiSearch />
          Search
        </Link>
        <Link className="flex flex-row items-center gap-3 btn btn-ghost">
          <GiBookshelf />
          My Shelf
        </Link>
        <Link className="flex flex-row items-center gap-3 btn btn-ghost">
          <MdFavorite />
          Favourite
        </Link>
      </nav>

      <footer >
        <nav className="flex flex-col mt-[14rem] gap-y-4 text-sm">
          <Link>About</Link>
          <Link>Support</Link>
          <Link>Terms and Condition</Link>
        </nav>
      </footer>
    </div>
  );
};
