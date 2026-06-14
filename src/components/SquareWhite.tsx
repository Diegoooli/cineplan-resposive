interface SquareWhiteProps  {
  children: React.ReactNode
  className?: string
}

export default function SquareWhite( {children, className}: SquareWhiteProps ) {
    return <div className={className || 'w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-[24px] flex items-center justify-center'}>
            {children}
          </div>
}
