"use client"
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0D10] flex items-center justify-center p-4 overflow-hidden">
      <div className="text-center relative">
        {/* Floating Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-[#20C867]/20 to-[#42F88F]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#20C867]/20 to-[#42F88F]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

        {/* 404 Animation */}
        <div className="relative mb-8 select-none">
          {/* Glitch Effect Layers */}
          <div className="absolute inset-0 text-[200px] font-bold text-[#20C867]/30 animate-glitch" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}>404</div>
          <div className="absolute inset-0 text-[200px] font-bold text-[#42F88F]/30 animate-glitch" style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)', animationDelay: '-0.5s' }}>404</div>
          
          {/* Main Text */}
          <div className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20C867] to-[#42F88F] animate-pulse relative">
            404
          </div>

          {/* Scan Line */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#42F88F] to-transparent animate-scan"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#42F88F]/30 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-[#20C867]/30 rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
            Страница не найдена
          </h1>
          <p className="text-[#8B95A9] text-lg mb-8 max-w-md mx-auto">
            Возможно, она была перемещена или удалена.
            Попробуйте начать с главной страницы.
          </p>

          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-black bg-gradient-to-r from-[#20C867] to-[#42F88F] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <svg 
              className="w-5 h-5 transform transition-transform group-hover:-translate-x-1 relative z-10" 
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
            <span className="relative z-10">Вернуться на главную</span>
          </Link>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0B0D10]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  )
}
