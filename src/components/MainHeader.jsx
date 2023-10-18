import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Emoji from "./UI/Emoji";
import SearchBar from "./UI/SearchBar";

import { AiOutlineMenu } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full mr-4"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const MainHeader = () => {
  const {
    activeMenu,
    setActiveMenu,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between">
        {screenSize<=900 && <NavButton title="Menu" customFunc={handleActiveMenu} color="gray" icon={<AiOutlineMenu />} />}
      <p>
        <span className="text-sm md:text-base font-semibold dark:text-gray-300">
          Hello, Shahrukh <Emoji symbol="👋" label="hand" />
        </span>
      </p>
      <div className="ml-auto">
      <SearchBar bgColor="bg-white" width="w-44"/>
      </div>
    </div>
  );
};

export default MainHeader;
