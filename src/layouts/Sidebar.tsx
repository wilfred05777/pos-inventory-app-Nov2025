import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "../ui/Tooltip";

import {
  FiHome,
  FiShoppingCart,
  FiBox,
  FiBarChart2,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
} from "react-icons/fi";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/pos", icon: <FiHome /> },
    { name: "Products", path: "/products", icon: <FiBox /> },
    { name: "Inventory", path: "/inventory", icon: <FiShoppingCart /> },
    { name: "Reports", path: "/reports", icon: <FiBarChart2 /> },
  ];

  return (
    <aside
      className={`
        relative h-[94vh] my-4 ml-4 rounded-3xl bg-white border border-gray-200 
        shadow-xl shadow-gray-300/30 flex flex-col transition-all duration-300
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="
          absolute -right-3 top-8 h-8 w-8 rounded-full 
          bg-white border border-gray-200 shadow-md 
          flex items-center justify-center 
        "
      >
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-gray-900 shadow-inner"></div>

        {!collapsed && (
          <h1 className="text-xl font-semibold text-gray-900">POS System</h1>
        )}
      </div>

      {/* NAV MENU */}
      <nav className="flex flex-col mt-4 px-3 gap-2">
        {menu.map((item) => (
          <Tooltip key={item.name} content={collapsed ? item.name : ""}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                group flex items-center gap-4 px-4 py-3
                rounded-2xl transition-all duration-200 
                relative
                
                ${
                  isActive
                    ? "bg-gray-900 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `
              }
            >
              {/* Left Indicator Bar */}
              <div
                className={({ isActive }: any) =>
                  `
                  absolute left-1 top-1/2 -translate-y-1/2 
                  h-8 w-1.5 rounded-full transition-all
                  ${isActive ? "bg-white opacity-90" : "opacity-0"}
                `
                }
              />

              {/* Icon */}
              <span className="text-xl">{item.icon}</span>

              {/* Label */}
              {!collapsed && (
                <span className="text-md font-medium">{item.name}</span>
              )}
            </NavLink>
          </Tooltip>
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* BOTTOM PROFILE */}
      <div className="p-4">
        <div
          className={`
            flex items-center gap-3 p-3 rounded-2xl border border-gray-200 
            shadow-sm bg-gray-50 transition-all duration-300
            ${collapsed ? "flex-col py-4" : ""}
          `}
        >
          <div className="h-12 w-12 rounded-xl bg-gray-300 flex items-center justify-center text-gray-700">
            <FiUser size={22} />
          </div>

          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">Wilfred</span>
              <span className="text-sm text-gray-500">Administrator</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
