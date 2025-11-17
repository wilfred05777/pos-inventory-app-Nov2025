import React from 'react'
import { getInventoryForLocation } from '../api/firestore/inventory.service'
import type { Inventory } from '../types/inventory'


export function useInventoryLocation(locationId: string) {
const [items, setItems] = React.useState<Inventory[] | null>(null)
React.useEffect(() => {
if (!locationId) return
let mounted = true
getInventoryForLocation(locationId).then(list => { if (mounted) setItems(list) })
return () => { mounted = false }
}, [locationId])
return { items }
}