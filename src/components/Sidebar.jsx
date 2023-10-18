import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

import { TbSettings2 } from "react-icons/tb";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-3 pl-2 py-2 rounded-lg text-white text-11 bg-activeLink mx-4 m-2";
  const normalLink =
    "flex items-center gap-3 pl-2 py-2 rounded-lg text-gray-100 text-11 hover:text-white hover:bg-activeLink mx-4 m-2";

  return (
    <div className="h-screen bg-sidebarColor dark:bg-secondary-dark-bg md:overflow-hidden overflow-auto md:hover:overflow-auto pb-5 text-gray-100">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <div className="items-center gap-2 ml-5 mt-7 flex text-lg font-semibold">
              <TbSettings2 size={27} /> <span>Dashboard</span>
            </div>
          </div>
          <div className="mt-9">
            {links.map((item) => (
              <NavLink
                to={`/${item.title}`}
                key={item.title}
                onClick={handleCloseSidebar}
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink;
                }}
              >
                <span>{item.icon}</span>
                <span className="capitalize w-28">{item.title}</span>
                <button>
                  <IoIosArrowForward />
                </button>
              </NavLink>
            ))}
          </div>
          <NavLink to="/" className={`mt-52 ${activeLink} mx-0 rounded-sm`}>
              <img className="rounded-full w-7 h-7" src={avatar} />
              <div>
                <p className="text-11 text-gray-300">Evano</p>
                <p className=" text-9 text-gray-400">Project Manager</p>
              </div>
              <button
                className={`text-gray-400 transform text-base ml-3 p-3 ${
                  isOpen ? "rotate-180" : "rotate-0"
                } transition-transform`}
                onClick={toggleDropdown}
              >
                <FiChevronDown />
              </button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Sidebar;
