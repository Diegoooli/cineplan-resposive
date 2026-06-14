import type { ReactNode } from "react";
import Navbar from "./Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen bg-zinc-900'>
            {/* pb-16 reserva o espaço da navbar fixa (h-16) em telas pequenas */}
            <div className='flex-1 min-h-0 pb-16 sm:pb-0 w-full max-w-2xl mx-auto'>
                {children}
            </div>
            <Navbar/>
        </div>
    )
}
