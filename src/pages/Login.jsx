import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../img/icon.png'

export default function Login() {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Backend bilan bog'lanish va xatoliklarni ko'rsatish logikasi
    try {
      // API call logic here
      setError('');
    } catch (err) {
      setError(err.message || 'Такой логин не существует!');
    }
  }

  return (
    <div className='text-center text-white h-screen flex flex-col items-center justify-center space-y-6'>
      <div className='bg-[#12151B] rounded-lg w-[400px] border border-[#181C25]'>
        <div className='flex items-center justify-center bg-[#0B0D10] rounded-t-lg p-[1.25rem]'>
          <img src={icon} alt="icon" className='w-10 h-10 mr-2' /> <span className='text-white text-[1.5rem] font-bold uppercase'>battlecup<span className='text-[#4B5977]'>.net</span></span>
        </div>
        <form onSubmit={handleSubmit} className="px-8 py-[1.25rem] space-y-[1.25rem]">
          <h1 className='text-2xl font-medium'>Войти</h1>

          {/* Error message */}
          {error && (
            <div className='border border-orange-800 bg-[#A12C1D] text-white p-3 rounded-md'>
              {error}
            </div>
          )}

          {/* Login form */}
          <div className='space-y-4'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.85164 16.1267C5.37792 17.0042 1.51392 18.7959 3.86736 21.0381C5.01699 22.1333 6.29739 22.9167 7.90716 22.9167H17.0928C18.7026 22.9167 19.983 22.1333 21.1326 21.0381C23.486 18.7959 19.6221 17.0042 18.1483 16.1267C14.6925 14.0689 10.3075 14.0689 6.85164 16.1267Z" stroke="#475065" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.1875 6.77087C17.1875 9.35971 15.0889 11.4584 12.5 11.4584C9.91117 11.4584 7.8125 9.35971 7.8125 6.77087C7.8125 4.18204 9.91117 2.08337 12.5 2.08337C15.0889 2.08337 17.1875 4.18204 17.1875 6.77087Z" stroke="#475065" stroke-width="2" />
                </svg>

              </div>
              <input type="text" className='border-2 border-[#181C25] w-full pl-10 pr-4 py-3 bg-[#12151B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Логин' />
            </div>

            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.44547 19.6299C4.67972 21.3698 6.12081 22.7328 7.87448 22.8134C9.35012 22.8813 10.8491 22.9167 12.4998 22.9167C14.1506 22.9167 15.6495 22.8813 17.1251 22.8134C18.8789 22.7328 20.3199 21.3698 20.5542 19.6299C20.7071 18.4945 20.8332 17.3308 20.8332 16.1458C20.8332 14.9608 20.7071 13.7972 20.5542 12.6618C20.3199 10.9219 18.8789 9.55884 17.1251 9.47822C15.6495 9.41039 14.1506 9.375 12.4998 9.375C10.8491 9.375 9.35012 9.41039 7.87448 9.47822C6.12081 9.55884 4.67972 10.9219 4.44547 12.6618C4.2926 13.7972 4.1665 14.9608 4.1665 16.1458C4.1665 17.3308 4.2926 18.4945 4.44547 19.6299Z" stroke="#475065" stroke-width="1.5625" />
                  <path d="M7.8125 9.37498V6.77081C7.8125 4.18198 9.91117 2.08331 12.5 2.08331C15.0889 2.08331 17.1875 4.18198 17.1875 6.77081V9.37498" stroke="#475065" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.6665 16.1354V16.1454" stroke="#475065" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 16.1354V16.1454" stroke="#475065" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.3335 16.1354V16.1454" stroke="#475065" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <input
                type={showPassword ? "text" : "password"}
                className='border-2 border-[#181C25] w-full pl-10 pr-4 py-3 bg-[#12151B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Пароль'
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-[#4B5977] hover:text-white transition-colors'
              >
                {showPassword ? (
                  <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me and Forgot password */}
          <div className='flex items-center justify-between text-sm'>
            <label className='flex items-center justify-center space-x-2 cursor-pointer'>
              <div className="relative">
                <input type="checkbox" className='peer cursor-pointer appearance-none w-5 h-5 border border-[#4B5977] rounded bg-[#1A1D21] checked:bg-[#2B5CE7] checked:border-[#2B5CE7] focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <svg className="absolute w-5 h-5 pointer-events-none hidden peer-checked:block top-0 left-0 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className='text-[#4B5977]'>Запомнить меня</span>
            </label>
            <a href="/forgot-password" className='text-[#4B5977] hover:text-white transition-colors'>Забыли пароль?</a>
          </div>

          {/* Login button */}
          <button className='w-full border border-[#2576F0] bg-gradient-to-t from-[#153B73] to-[#1E498A] hover:from-[#1E498A] hover:to-[#153B73] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300' onClick={() => navigate('/profile')}>
            Войти на сайт
          </button>

          <div className='text-gray-400 text-sm flex items-center gap-3 before:content-[""] before:block before:h-[1px] before:flex-1 before:bg-[#181C25] after:content-[""] after:block after:h-[1px] after:flex-1 after:bg-[#181C25]'>
            или
          </div>

          {/* Register button */}
          <button 
            onClick={() => navigate('/register')}
            type="button"
            className='w-full border border-[#333A49] bg-gradient-to-t from-[#1B1F27] to-[#232833] hover:from-[#232833] hover:to-[#1B1F27] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'
          >
            Зарегистрируйтесь
          </button>

          {/* Back button */}
        </form>
      </div>
      <button className='text-gray-400 hover:text-white flex items-center justify-center space-x-1' onClick={() => navigate('/')}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.75 5.5C13.75 5.5 8.25001 9.55066 8.25 11C8.24999 12.4494 13.75 16.5 13.75 16.5" stroke="#475065" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>Назад</span>
      </button>
    </div>
  )
}
