export default function WatchListBlock() {
    return (
                <div id="bloco da lista" className='rounded-2xl bg-[#3A3A3A] min-h-0 self-stretch'>
                    <div id="guardar perfil" className='flex items-center gap-3 p-4'>
                        <div className='w-12 h-12 bg-[#fff] rounded-xl flex items-center justify-center shrink-0'>
                            <span className='text-x1'>▶️</span>
                        </div>
                        <div id="titulo e sub" className="flex-1 flex flex-col gap-0.5">
                            <p className='text-white text-sm font-semibold'>titulo</p>
                            <p className='text-zinc-400 text-xs'>subtitulo</p>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>

                    </div>
                    <div id="vai os filmes preview" className="flex gap-2 px-4 overflow-x-auto no-scrollbar py-2">
                        <div className='w-12 h-12 flex-shrink-0 bg-pink-100 rounded-xl flex items-center justify-center text-xl'>🐓</div>
                        <div className='w-12 h-12 flex-shrink-0 bg-pink-100 rounded-xl flex items-center justify-center text-xl'>🐓</div>
                        <div className='w-12 h-12 flex-shrink-0 bg-pink-100 rounded-xl flex items-center justify-center text-xl'>🐓</div>
                        <div className='w-12 h-12 flex-shrink-0 bg-pink-100 rounded-xl flex items-center justify-center text-xl'>🐓</div>
                        <div className='w-12 h-12 flex-shrink-0 bg-pink-100 rounded-xl flex items-center justify-center text-xl'>🐓</div>
                        <div className='w-12 h-12 flex-shrink-0 bg-pink-100 rounded-xl flex items-center justify-center text-xl'>🐓</div>
                    </div>

                </div>
    )
}