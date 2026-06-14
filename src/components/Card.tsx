import type { ReactNode } from "react"

export default function Card({ children }: { children: ReactNode }) {
    return <div className='bg-white p-8 rounded-2xl shadow-lg w-96'>
                {children}
            </div>
}
