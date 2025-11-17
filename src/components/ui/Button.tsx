import React from 'react'
import clsx from 'clsx'


export default function Button({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
return (
<button {...rest} className={clsx('px-4 py-2 rounded-md shadow-sm text-sm font-medium', className)}>
{children}
</button>
)
}