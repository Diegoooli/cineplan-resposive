import type React from "react"

interface Input {
    label: string
    icon: React.ReactNode
    type: string
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    right?: React.ReactNode
}

export default function Input({ label, icon, type, placeholder, value, onChange, right }: Input) {
    return (
        <div className='flex flex-col gap-1.5'>
            <label className='text-zinc-400 text-xs font-medium uppercase tracking-wide'>
                {label}
            </label>
            <div className={`flex items-center gap-3 px-4 py-4 rounded-2xl border ${value ? 'border-[#E91E63]' : 'border-zinc-600'} bg-transparent`}>
                {icon}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className='flex-1 bg-transparent text-white text-sm placeholder:text-zinc-500 outline-none'
                />
                {right}
            </div>
        </div>
    )
}

