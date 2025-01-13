import { Link } from 'react-router-dom'
import icon from '../img/icon.png'
import avatar from '../img/avatar.png'
import { useState } from 'react'

export default function Navbar({ user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className='bg-[#12151B] border-b border-[#181C25] sticky top-0 z-50'>
      <div className='max-w-[1062px] mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link to="/" className='flex items-center'>
            <img src={icon} alt="BattleCup" className='h-8' />
            <span className='text-white text-xl font-bold ml-2'>
              BATTLECUP<span className='text-[#4B5977]'>.NET</span>
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link to="#" className='text-[#8B95A9] hover:text-white transition-colors'>Новости</Link>
            <Link to="#" className='text-[#8B95A9] hover:text-white transition-colors'>Форум</Link>
            <Link to="#" className='text-[#8B95A9] hover:text-white transition-colors'>Рейтинг</Link>
            <Link to="#" className='text-[#8B95A9] hover:text-white transition-colors'>Турниры</Link>
            <Link to="#" className='text-[#8B95A9] hover:text-white transition-colors'>Магазин</Link>
            <Link to="#" className='text-[#8B95A9] hover:text-white transition-colors'>Поддержка</Link>
          </nav>

          {/* Navigation - Mobile */}
          <nav className='fixed md:hidden bottom-0 left-0 right-0 bg-[#12151B] border-t border-[#181C25] z-50'>
            <div className='flex justify-around py-3'>
              <Link to="#" className='flex flex-col items-center text-[#8B95A9] hover:text-white transition-colors'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 21V10L12 3L20 10V21H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className='text-xs mt-1'>Новости</span>
              </Link>
              <Link to="#" className='flex flex-col items-center text-[#8B95A9] hover:text-white transition-colors'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 14L12 19L3 14M21 10L12 15L3 10L12 5L21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className='text-xs mt-1'>Форум</span>
              </Link>
              <Link to="#" className='flex flex-col items-center text-[#8B95A9] hover:text-white transition-colors'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L8.5 12L5 15V5H19V15L15.5 12L12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className='text-xs mt-1'>Рейтинг</span>
              </Link>
              <Link to="#" className='flex flex-col items-center text-[#8B95A9] hover:text-white transition-colors'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L14.5 8.5L20.5 9L16 13L17.5 19L12 16L6.5 19L8 13L3.5 9L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className='text-xs mt-1'>Турниры</span>
              </Link>
              <Link to="#" className='flex flex-col items-center text-[#8B95A9] hover:text-white transition-colors'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M4 8H20M8 8V20" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span className='text-xs mt-1'>Меню</span>
              </Link>
            </div>
          </nav>

          {/* Auth Buttons or User Menu */}
          {user ? (
            <div className='flex items-center space-x-4'>
              <Link to="/messages" className='text-[#8B95A9] hover:text-white'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" stroke="#9EA8BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.01577 13.4756C2.08114 16.5411 2.11383 18.0739 3.24496 19.2093C4.37609 20.3448 5.95034 20.3843 9.09884 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.755 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95034 3.61566 4.37609 3.65521 3.24496 4.79065C2.11383 5.92608 2.08114 7.45885 2.01577 10.5243C1.99474 11.51 1.99474 12.4899 2.01577 13.4756Z" stroke="#9EA8BD" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
              </Link>
              <Link to="/notifications" className='text-[#8B95A9] hover:text-white'>
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.52992 16.7696C2.31727 18.1636 3.268 19.1312 4.43205 19.6134C8.89481 21.4622 15.1052 21.4622 19.5679 19.6134C20.732 19.1312 21.6827 18.1636 21.4701 16.7696C21.3394 15.9129 20.6932 15.1995 20.2144 14.5029C19.5873 13.5793 19.525 12.5718 19.5249 11.5C19.5249 7.35786 16.1559 4 12 4C7.84413 4 4.47513 7.35786 4.47513 11.5C4.47503 12.5718 4.41272 13.5793 3.78561 14.5029C3.30684 15.1995 2.66061 15.9129 2.52992 16.7696Z" stroke="#9EA8BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 21C8.45849 22.7252 10.0755 24 12 24C13.9245 24 15.5415 22.7252 16 21" stroke="#9EA8BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="21" cy="7" r="6" fill="#FE3030" stroke="#0D0F14" stroke-width="2" />
                </svg>
              </Link>
              <div className='relative'>
                <button 
                  onClick={toggleDropdown}
                  className='flex items-center space-x-2 text-[#8B95A9] hover:text-white'
                >
                  <img src={avatar} alt="Avatar" className='w-8 h-8 rounded-full' />
                  <span>{user.nickname}</span>
                </button>
                {isDropdownOpen && (
                  <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#181C25] border border-[#232833] z-50'>
                    <div className='py-1'>
                      <Link 
                        to="/profile" 
                        className='block px-4 py-2 text-sm text-[#8B95A9] hover:bg-[#232833] hover:text-white'
                      >
                        Профиль
                      </Link>
                      <Link 
                        to="/settings" 
                        className='block px-4 py-2 text-sm text-[#8B95A9] hover:bg-[#232833] hover:text-white'
                      >
                        Настройки
                      </Link>
                      <button 
                        className='block w-full text-left px-4 py-2 text-sm text-[#8B95A9] hover:bg-[#232833] hover:text-white'
                        onClick={() => {
                          // Add logout logic here
                          console.log('Logging out...')
                        }}
                      >
                        Выйти
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </header>
  )
}
