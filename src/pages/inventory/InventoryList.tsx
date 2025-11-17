import React from 'react'
import { useInventoryLocation } from '../../hooks/useInventory'


export default function InventoryList() {
const { items } = useInventoryLocation('default')
return (
<div className="p-4">
<h1 className="text-2xl font-semibold mb-4">Inventory</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{!items && <div>Loading…</div>}
{items?.map(i => (
<div key={i.id} className="bg-white p-4 rounded shadow">
<div className="flex justify-between">
<div>
<div className="text-sm font-semibold">{i.productId}</div>
<div className="text-xs text-gray-500">Location: {i.locationId}</div>
</div>
<div className="text-lg font-mono">{i.quantity}</div>
</div>
</div>
))}
</div>
</div>
)
}