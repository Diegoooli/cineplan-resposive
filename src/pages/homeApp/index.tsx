import WatchListBlock from "../../components/WatchListBlock"

export default function HomeApp() {

    return (
        <div className='flex-1 flex flex-col bg-[#E91E63] sm:rounded-[48px] overflow-hidden'>
            <div id='header' className="flex flex-col items-start gap-1 w-full px-6 pt-12 pb-2">
                <div className='flex items-center gap-3 px-4 w-full'>
                    <div className='flex-1 flex flex-col gap-0.5 min-w-0'>
                        <p className='text-white font-bold text-2xl leading-8'>Nossas Listas</p>
                        <p className='text-white/80 text-sm font-normal leading-5 truncate'>Fulano de tal &amp; jojo todynho</p>
                    </div>
                    <button className='text-white/80 hover:text-white transition-colors shrink-0'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id='body' className='flex-1 bg-[#2B2B2B] flex flex-col items-start gap-4 w-full px-4 pt-6 pb-6'>
                <WatchListBlock />
                <WatchListBlock />
                <WatchListBlock />
            </div>
        </div>
    )
}
