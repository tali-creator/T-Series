import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./search";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }
  return (
    <div className="flex z-90 py-2 bg-black/90 justify-between px-7 relative w-full">
      <Link to={"/"} className="text-orange-700 font-black text-xl">T-Series</Link>
        <div className="hidden sm:flex justify-center md:w-1/2 h-fit">
            <Search />
        </div>
      <div className="w-fit space-x-3 text-orange-700 hidden sm:flex">
        <NavLink
          to={"/"}
          className="hover:text-white/80 transition-colors  duration-200">
          Home
        </NavLink>
        <NavLink
          to={"/catergories"}
          className="hover:text-white/80 transition-colors duration-200">
          Catergories
        </NavLink>
        <NavLink
          to={"/about"}
          className="hover:text-white/80 transition-colors duration-200">
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className="hover:text-white/80 transition-colors duration-200">
          Contact-Us
        </NavLink>
      </div>
      <div className={`w-fit space-x-3 sm:hidden ${toggle? "absolute" : ""} transition ${toggle? "ease-linear" : "ease-in"} duration-200 ${toggle? "w-full" : "w-fit"} text-orange-700 flex flex-col items-end top-0 left-0 ${toggle? "p-5" : "p-0"} ${toggle? "bg-black/90" : ""}  space-y-3`}>
        <span onClick={handleToggle} className={`fa ${ toggle? "fa-x" : "fa-bars"} text-xl transition ${toggle? "ease-linear" : "ease-in"} duration-200 hover:text-white/80`}></span>
        <div className={`${toggle? "flex" : "hidden"} flex-col space-y-2 w-full`}>
        <div className=" w-full flex justify-center ">
            <Search />
        </div>
          <NavLink
          onClick={handleToggle}
            to={"/"}
            className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
            Home
          </NavLink>
          <NavLink
           onClick={handleToggle}
            to={"/catergories"}
            className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
            Catergories
          </NavLink>
          <NavLink
           onClick={handleToggle}
            to={"/about"}
            className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
            About
          </NavLink>
          <NavLink
           onClick={handleToggle}
            to={"/contact"}
            className="hover:text-white/80 hover:border-b border-orange-700 transition-colors duration-200">
            Contact-Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}
