import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../img/icon.png'
export default function Home() {
  return (
    <div className='min-h-screen bg-[#0B0D10]'>
      {/* Header */}
      <header className='bg-[#12151B] border-b border-[#181C25]'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex items-center'>
              <img src={icon} alt="BattleCup" className='h-8' />
              <span className='text-white text-xl font-bold ml-2'>
                BATTLECUP<span className='text-[#4B5977]'>.NET</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              <a href="#" className='text-white hover:text-[#2576F0] transition-colors'>Новости</a>
              <a href="#" className='text-white hover:text-[#2576F0] transition-colors'>Форум</a>
              <a href="#" className='text-white hover:text-[#2576F0] transition-colors'>Рейтинг</a>
              <a href="#" className='text-white hover:text-[#2576F0] transition-colors'>Турниры</a>
              <a href="#" className='text-white hover:text-[#2576F0] transition-colors'>Магазин</a>
              <a href="#" className='text-white hover:text-[#2576F0] transition-colors'>Поддержка</a>
            </nav>

            {/* Auth buttons */}
            <div className='flex items-center space-x-4'>
              <Link 
                to="/login" 
                className='text-black border border-[#5EE999] bg-gradient-to-r from-[#20C867] to-[#42F88F] px-4 py-2 rounded hover:opacity-80 transition-opacity'
              >
                Войти
              </Link>
              <Link 
                to="/register" 
                className='text-white border border-[#333A49] bg-gradient-to-r from-[#1B1F27] to-[#232833] px-4 py-2 rounded hover:opacity-80 transition-opacity'
              >
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <div className='relative h-[500px] bg-[#12151B] overflow-hidden'>
        <div className='container mx-auto px-4 h-full flex items-center'>
          <div className='max-w-2xl'>
            <h1 className='text-5xl font-bold text-white mb-6'>
              ДОБРО ПОЖАЛОВАТЬ В<br />
              НОВУЮ ЭРУ ДОТЫ
            </h1>
            <p className='text-[#8B95A9] text-xl mb-8'>
              Испытай легендарные битвы в современном формате.<br />
              Стань частью истории, играй сейчас!
            </p>
            <Link to="/register" className='bg-[#2576F0] text-white px-8 py-4 rounded-md hover:bg-[#1E498A] transition-colors text-lg font-medium'>
              Начать игру
            </Link>
          </div>
          <div className='absolute right-0 bottom-0'>
            <img src="/hero.png" alt="Hero" className='h-[600px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
