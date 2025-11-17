import React from 'react'
import Button from '../../components/ui/Button'


export default function POS() {
return (
<div className="p-4">
<h1 className="text-2xl font-semibold mb-4">Point of Sale</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2 bg-white p-4 rounded shadow">Products / search grid here</div>
<aside className="bg-white p-4 rounded shadow">Cart summary + checkout <Button>Checkout</Button></aside>
</div>
</div>
)
}