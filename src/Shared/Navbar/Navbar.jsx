import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <Link to="/" className="font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/all-food" className="font-bold">
          All food
        </Link>
      </li>
      <li>
        <Link to="/add-food" className="font-bold">
          Add A food
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl md:text-3xl lg:text-3xl font-extrabold text-emerald-900"
        >
          Ghost Food
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/">
          <img className="h-20 w-20" src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
