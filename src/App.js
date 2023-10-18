import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Footer, Sidebar, ThemeSettings } from "./components";
import { Dashboard, Product, Customers, Income, Promote, Help} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentMode,
    currentMode,
    activeMenu,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-activeLink rounded-full bg-sidebarColor"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
            {activeMenu ? (
              <div className="w-56 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}

          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-56 w-full p-4 py-4 "
                : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen"
            }
          >
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* pages  */}
                <Route path="/product" element={<Product />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/income" element={<Income />} />
                <Route path="/promote" element={<Promote />} />
                <Route path="/help" element={<Help />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
