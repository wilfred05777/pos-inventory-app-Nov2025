import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import POS from "../pages/pos/POS";
import InventoryList from "../pages/inventory/InventoryList";

export const AppRouter = () => (
  <Routes>
    <Route path="/pos" element={<DashboardLayout><POS /></DashboardLayout>} />
    <Route path="/inventory" element={<DashboardLayout><InventoryList /></DashboardLayout>} />
    {/* /products route removed because src/pages/products/ProductList.tsx is not a module */}
    {/* Add more routes as needed */}
  </Routes>
);
export default AppRouter;

// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import POS from '../pages/pos/POS'
// import InventoryList from '../pages/inventory/InventoryList'


// export default function AppRouter() {
// return (
// <Routes>
// <Route path="/" element={<Navigate to="/pos" replace />} />
// <Route path="/pos" element={<POS />} />
// <Route path="/inventory" element={<InventoryList />} />
// </Routes>
// )
// }