import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'


export default function App() {
return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50 text-slate-900">
                <AppRouter />
            </div>
        </BrowserRouter>
    )
}