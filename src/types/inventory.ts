export interface Inventory{
id?: string
productId: string
locationId: string
quantity: number
reorderPoint?: number
lastAdjustedAt?: any
lastAdjustedBy?: string | null

}