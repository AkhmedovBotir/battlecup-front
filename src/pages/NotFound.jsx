import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0D10] flex items-center justify-center p-4 overflow-hidden">
      <div className="text-center relative">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3787FF] to-[#20C867] animate-pulse select-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#3787FF] to-transparent animate-scan"></div>
          </div>
          
          {/* Pudge Animation */}
          <div className="absolute -top-20 -right-20 animate-bounce">
            <div className="relative">
              <div className="w-32 h-32 bg-[#1A1D24] rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-28 h-28 bg-[#0B0D10] rounded-full flex items-center justify-center">
                  <span className="text-6xl">🎣</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 text-4xl animate-wiggle">🪝</div>
            </div>
          </div>
          
          {/* Creep Animation */}
          <div className="absolute bottom-0 left-0 animate-walk">
            <span className="text-4xl transform rotate-12">💀</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-4 animate-float">
          Страница потерялась в джунглях
        </h1>
        <p className="text-[#8B95A9] text-lg mb-8 max-w-md mx-auto">
          Возможно, её забрал Pudge, или она ушла фармить крипов.
          Давайте вернёмся на базу!
        </p>

        {/* Back to Home Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-black bg-gradient-to-r from-[#3787FF] to-[#20C867] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 group"
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
          <span>Телепорт на базу</span>
        </Link>
      </div>

      {/* Particle Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-2 h-2 bg-[#3787FF] rounded-full animate-firefly1"></div>
        <div className="absolute w-2 h-2 bg-[#20C867] rounded-full animate-firefly2"></div>
        <div className="absolute w-2 h-2 bg-[#3787FF] rounded-full animate-firefly3"></div>
      </div>
    </div>
  )
}
