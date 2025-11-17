import { db } from '../../services/firebase'
import { collection, doc, getDoc, setDoc, runTransaction, query, where, getDocs, serverTimestamp } from 'firebase/firestore'
import type { Inventory } from '../../types/inventory'


const inventoryCol = collection(db, 'inventory')


const inventoryDocId = (locationId: string, productId: string) => `${locationId}_${productId}`


export async function getInventoryForLocation(locationId: string) {
const q = query(inventoryCol, where('locationId', '==', locationId))
const snap = await getDocs(q)
return snap.docs.map(d => ({ id: d.id, ...(d.data() as Inventory) }))
}


export async function adjustInventory({ productId, locationId, delta, userId, reason }: { productId: string; locationId: string; delta: number; userId?: string; reason?: string }) {
const id = inventoryDocId(locationId, productId)
const ref = doc(db, 'inventory', id)
return runTransaction(db, async (tx) => {
const snap = await tx.get(ref)
const now = serverTimestamp()
if (snap.exists()) {
const cur = snap.data() as Inventory
const newQty = (cur.quantity ?? 0) + delta
if (newQty < 0) throw new Error('Insufficient stock')
tx.update(ref, { quantity: newQty, lastAdjustedAt: now, lastAdjustedBy: userId || null })
} else {
if (delta < 0) throw new Error('Cannot deduct from non-existing inventory')
tx.set(ref, { productId, locationId, quantity: delta, reorderPoint: 0, lastAdjustedAt: now, lastAdjustedBy: userId || null })
}


// note: inventoryLogs creation omitted for brevity; add similar tx.set to inventoryLogs collection if needed
})
}