import { useLocation, useNavigate } from "@tanstack/react-router"
import type { ReactNode } from "react"

interface NavItem {
    label: string
    path: string
    icon: ReactNode
}

const navItens: NavItem[] = [
    {
        label: 'Home',
        path: '/home',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        )

    },
    {
        label: 'Listas',
        path: '/listas',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
        )
    },
    {
        label: 'Perfil',
        path: '/perfil',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
        )
    }
]

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="fixed sm:relative bottom-0 left-0 right-0 w-full sm:max-w-2xl sm:mx-auto bg-[#3A3A3A] border-t border-[#4A4A4A] flex h-16 sm:h-auto z-50">
            {navItens.map((item) => {
                const ativo = location.pathname === item.path
                return (
                    <button key={item.path} onClick={() => navigate({ to: item.path })} className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${ativo ? 'text-[#E91E63]' : 'text-zinc-400 hover:text-zinc-200'}`}>
                     {item.icon}
                     <span className='text-xs'>{item.label}</span>
                    </button>
                )
            })}
        </div>
    )
}
