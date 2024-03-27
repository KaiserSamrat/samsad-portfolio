import React, { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      this.scrollY >= 150 ? setScrollNavbar(true) : setScrollNavbar(false);
    });
  }, []);
  return (
    <nav className={`bg-[#212121]  z-[99] top-0 w-full mb-5 rounded-lg`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">
              SR
            </a>
          </div>

          <div className="hidden sm:block ">
            <ul className="flex space-x-4 ">
              <li>
                <Link
                  to={"home"}
                  activeClass=" !font-medium border-b border-b-white"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="text-white hover:bg-gray-700 px-3 py-2  font-semibold cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"about"}
                  activeClass=" !font-medium border-b border-b-white"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="text-white hover:bg-gray-700 px-3 py-2  font-semibold cursor-pointer"
                >
                  Case study
                </Link>
              </li>
              <li>
                <Link
                 to={"pricing"}
                 activeClass=" !font-medium border-b border-b-white"
                 
                 spy={true}
                 smooth={true}
                 offset={-20}
                 duration={500}
                  className="text-white hover:bg-gray-700 px-3 py-2  font-semibold cursor-pointer"
                >
                  Digital product
                </Link>
              </li>
              <li>
                <Link
                  to={"editor"}
                  activeClass=" !font-medium !border-b !border-b-white "
                  
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="text-white hover:bg-gray-700 px-3 py-2 cursor-pointer  font-semibold border-b border-b-transparent"
                >
                  Experience
                </Link>
              </li>
          
              <li>
                <Link
                 to={"contact"}
                 activeClass=" !font-medium border-b border-b-white"
                 
                 spy={true}
                 smooth={true}
                 offset={-20}
                 duration={500}
                  className="text-white hover:bg-gray-700 px-3 py-2  font-semibold cursor-pointer bg-[#2979F4] rounded-lg"
                >
                  Connect
                </Link>
              </li>
              
         
        
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="#"
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded"
          >
            Home
          </Link>
          <a
            href="#"
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded"
          >
            About
          </a>
          <a
            href="#"
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded"
          >
            Contact
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
