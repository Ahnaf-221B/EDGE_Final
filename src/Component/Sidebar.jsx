import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-base-100 p-4">
      <h1 className="text-3xl font-bold mb-8">
        My <span className="text-primary">Book</span> Shelf
      </h1>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="font-semibold text-xl btn btn-ghost">
          Home
        </Link>
        <Link to="/search" className="font-semibold text-xl btn btn-ghost">
          Search
        </Link>
      </nav>
    </div>
  );
};
