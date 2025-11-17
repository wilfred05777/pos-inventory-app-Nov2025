import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import POS from '../pages/pos/POS'
import InventoryList from '../pages/inventory/InventoryList'


export default function AppRouter() {
return (
<Routes>
<Route path="/" element={<Navigate to="/pos" replace />} />
<Route path="/pos" element={<POS />} />
<Route path="/inventory" element={<InventoryList />} />
</Routes>
)
}