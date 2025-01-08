import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import icon from '../img/icon.png'

export default function Home() {
  const user = null; // Agar foydalanuvchi tizimga kirmagan bo'lsa

  return (
    <div className='min-h-screen bg-[#0B0D10]'>
      <Navbar user={user} />

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
