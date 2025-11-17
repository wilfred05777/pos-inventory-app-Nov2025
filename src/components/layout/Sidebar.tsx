// src/components/layout/Sidebar.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBox, FaShoppingCart, FaChartLine, FaCog, FaUser, FaChevronDown, FaSignOutAlt, FaTh } from "react-icons/fa";

interface MenuItem {
  name: string;
  icon?: JSX.Element;
  path?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <FaTh />, path: "/" },
  { name: "POS", icon: <FaShoppingCart />, path: "/pos" },
  {
    name: "Inventory",
    icon: <FaBox />,
    children: [
      { name: "Inventory List", path: "/inventory" },
      { name: "Add Product", path: "/inventory/add" },
      { name: "Edit Product", path: "/inventory/edit" },
      { name: "Stock History", path: "/inventory/history" },
    ],
  },
  {
    name: "Products",
    icon: <FaBox />,
    children: [
      { name: "Product List", path: "/products" },
      { name: "Product Details", path: "/products/details" },
      { name: "Categories", path: "/products/categories" },
    ],
  },
  { name: "Reports", icon: <FaChartLine />, children: [
      { name: "Sales Report", path: "/reports/sales" },
      { name: "Inventory Report", path: "/reports/inventory" }
    ]
  },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
  { name: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
];

export const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <div className={`h-screen bg-gray-800 text-white flex flex-col transition-width duration-300 ${collapsed ? "w-20" : "w-64"}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <span className="text-xl font-bold">POS App</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <FaChevronDown className={`${collapsed ? "rotate-90" : ""} transition-transform`} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto mt-4">
        {menuItems.map((item) => (
          <div key={item.name}>
            <div
              className="flex items-center p-3 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => item.children ? toggleMenu(item.name) : undefined}
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.name}</span>}
              {item.children && !collapsed && (
                <FaChevronDown
                  className={`ml-auto transition-transform ${openMenu === item.name ? "rotate-180" : ""}`}
                />
              )}
            </div>

            {item.children && openMenu === item.name && !collapsed && (
              <div className="ml-8 flex flex-col">
                {item.children.map((child) => (
                  <NavLink
                    key={child.name}
                    to={child.path!}
                    className="p-2 text-sm hover:bg-gray-700 rounded transition-colors"
                  >
                    {child.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
export default Sidebar;
