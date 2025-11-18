import AppLayout from "../../layouts/AppLayout";

export default function POSPage() {
  return (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-4">Point of Sale</h1>

      <p className="text-gray-600 mb-4">Products / search grid here</p>

      <div className="border p-3 rounded bg-white shadow-sm w-64">
        Cart summary + checkout  
        <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
          Checkout
        </button>
      </div>
    </AppLayout>
  );
}
