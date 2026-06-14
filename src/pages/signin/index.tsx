import Input from '../../components/Input'
import Button from '../../components/Button'
import Heart from '../../assets/heart.svg'
import SquareWhite from '../../components/SquareWhite'
import { useState } from 'react'
import { useNavigate, useRouter } from '@tanstack/react-router'

export default function SignIn() {
    const navigate = useNavigate()
    const router = useRouter()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mostrarSenha, setMostrarSenha] = useState(false)

    function fazerCadastro() {
        // lógica de cadastro aqui
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-zinc-900'>
            <div className='w-full max-w-2xl mx-auto min-h-screen sm:min-h-0 bg-[#E91E63] flex flex-col sm:rounded-[48px] overflow-hidden'>

                {/* Botão voltar */}
                <button
                    onClick={() => router.history.back()}
                    className='mt-4 ml-4 w-fit p-2 text-white/80 hover:text-white transition-colors'
                    aria-label='Voltar'
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                </button>

                {/* Header centralizado */}
                <div className='flex-1 flex flex-col items-center justify-center px-8 py-8 gap-4'>
                    <SquareWhite>
                        <img src={Heart} alt="Coração" />
                    </SquareWhite>
                    <h2 className='text-white text-2xl font-semibold tracking-tight'>
                        Crie sua conta
                    </h2>
                    <p className='text-white/70 text-sm text-center'>
                        Depois você conecta com seu Par
                    </p>
                </div>

                {/* Formulário */}
                <div className='bg-[#2B2B2B] px-6 py-8 flex flex-col gap-4'>

                    <Input
                        label='Seu nome'
                        type='text'
                        placeholder='Digite aqui seu nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        icon={
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={nome ? '#E91E63' : '#71717a'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                            </svg>
                        }
                    />

                    <Input
                        label='Seu E-mail'
                        type='email'
                        placeholder='seu@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icon={
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke={email ? '#E91E63' : '#71717a'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        }
                    />

                    <Input
                        label='Sua Senha'
                        type={mostrarSenha ? 'text' : 'password'}
                        placeholder='Mín. 6 caracteres'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        icon={
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={senha ? '#E91E63' : '#71717a'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        }
                        right={
                            <button
                                type='button'
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                className='text-zinc-500 hover:text-zinc-300 transition-colors'
                            >
                                {mostrarSenha ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        }
                    />

                    <Button onClick={fazerCadastro} texto='Criar Conta' />

                    {/* Divisor */}
                    <div className='flex items-center gap-3'>
                        <div className='flex-1 h-px bg-white/10' />
                        <span className='text-zinc-500 text-xs'>ou</span>
                        <div className='flex-1 h-px bg-white/10' />
                    </div>

                    {/* Google */}
                    <button className='w-full bg-transparent border border-white/20 hover:bg-white/5 text-white/80 font-medium py-4 rounded-full transition-colors flex items-center justify-center gap-2'>
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                            <path fill="#EA4335" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" />
                            <path fill="#4285F4" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" />
                            <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" />
                            <path fill="#34A853" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z" />
                        </svg>
                        Cadastrar com Google
                    </button>

                    {/* Já tem conta */}
                    <p className='text-zinc-500 text-sm text-center'>
                        Já tem conta?{' '}
                        <button className='text-[#E91E63] font-medium hover:underline' onClick={() => navigate({ to: '/login' })}>
                            Entrar
                        </button>
                    </p>

                </div>
            </div>
        </div>
    )
}
