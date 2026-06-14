import SquareWhite from '../../components/SquareWhite'
import Button from '../../components/Button'
import Film from '../../assets/Film-icon.svg'
import Heart from '../../assets/heart.svg'
import { useNavigate } from '@tanstack/react-router'

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen w-full bg-gray-100 flex items-center justify-center'>

      <div className='w-full max-w-2xl mx-auto min-h-screen sm:min-h-0 bg-[#E91E63] sm:rounded-[48px] overflow-hidden flex flex-col sm:border-4 sm:border-white/10'>

        <div className='flex-1 flex flex-col items-center justify-center px-8 py-12 gap-5'>
          <SquareWhite>
            <img src={Film} alt="filme" />
          </SquareWhite>
          <h1 className='text-white text-3xl font-semibold tracking-tight'>Cineminha</h1>
          <p className='text-white/75 text-base text-center leading-relaxed'>
            Filmes são melhores com você
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <div className='w-12 h-12 rounded-full bg-[#FAECE7] border-2 border-white flex items-center justify-center'>
              <span className='text-sm font-semibold text-[#712B13]'>A</span>
            </div>
            <img src={Heart} alt="Coração" />
            <div className='w-12 h-12 rounded-full bg-[#E6F1FB] border-2 border-white flex items-center justify-center'>
              <span className='text-sm font-semibold text-[#0C447C]'>B</span>
            </div>
          </div>
        </div>

        <div className='bg-[#2B2B2B] px-6 pt-6 pb-10 flex flex-col gap-3'>
          <Button onClick={() => {navigate({ to: '/signin' })}} texto='Criar conta' />
          <Button onClick={() => {navigate({ to: '/login' })}} texto='Já tenho conta' />
          <p className='text-center text-xs text-gray-400 mt-1 leading-5'>
            Ao continuar você aceita nossos{' '}
            <span className='block'>
              <span className='text-[#E91E63]'>Termos de uso</span>
              {' '}e{' '}
              <span className='text-[#E91E63]'>Privacidade</span>
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}
