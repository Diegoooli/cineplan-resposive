interface ButtonProps {
    texto: string
    onClick?: () => void
}

export default function Button({ texto, onClick }: ButtonProps) {
    return <button className='w-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-semibold py-4 rounded-full transition-colors'
                   onClick={onClick}>
                            {texto}
                        </button>
}
