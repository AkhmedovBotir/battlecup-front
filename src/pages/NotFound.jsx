import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0D10] flex items-center justify-center p-4">
      <div className="text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20C867] to-[#42F88F] animate-pulse">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#42F88F] to-transparent animate-scan"></div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Страница не найдена
        </h1>
        <p className="text-[#8B95A9] text-lg mb-8 max-w-md mx-auto">
          Возможно, она была перемещена или удалена.
          Попробуйте начать с главной страницы.
        </p>

        {/* Back to Home Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-black bg-gradient-to-r from-[#20C867] to-[#42F88F] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity group"
        >
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 12H5M5 12L12 19M5 12L12 5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span>Вернуться на главную</span>
        </Link>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0B0D10]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  )
}
