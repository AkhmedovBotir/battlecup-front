import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../img/icon.png'
import countryData from '../data/countryPhoneCodes.json';

export default function Register() {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryData.countries[23]); // Default to Uzbekistan
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const phoneInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    // Yangi davlat kodi bilan raqamni qayta formatlash
    setPhoneNumber(country.code + ' ');
  };

  const formatPhoneNumber = (value, country) => {
    if (!value) return '';
    
    // Faqat raqamlarni qoldirish
    let numbers = value.replace(/\D/g, '');
    
    // Agar kod bilan boshlangan bo'lsa, kodni olib tashlash
    if (numbers.startsWith(country.code.replace(/\D/g, ''))) {
      numbers = numbers.slice(country.code.replace(/\D/g, '').length);
    }

    // Davlatga qarab formatlash
    let formatted = '';
    switch(country.code) {
      case '+998': // O'zbekiston
        if (numbers.length > 0) formatted += numbers.slice(0, 2);
        if (numbers.length > 2) formatted += ' ' + numbers.slice(2, 5);
        if (numbers.length > 5) formatted += ' ' + numbers.slice(5, 7);
        if (numbers.length > 7) formatted += ' ' + numbers.slice(7, 9);
        break;
      case '+7': // Rossiya, Qozog'iston
        if (numbers.length > 0) formatted += numbers.slice(0, 3);
        if (numbers.length > 3) formatted += ' ' + numbers.slice(3, 6);
        if (numbers.length > 6) formatted += ' ' + numbers.slice(6, 8);
        if (numbers.length > 8) formatted += ' ' + numbers.slice(8, 10);
        break;
      default: // Boshqa davlatlar uchun
        if (numbers.length > 0) formatted += numbers.slice(0, 3);
        if (numbers.length > 3) formatted += ' ' + numbers.slice(3, 6);
        if (numbers.length > 6) formatted += ' ' + numbers.slice(6, 9);
    }

    return formatted;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Agar input kod bilan boshlanmagan bo'lsa, kodini qo'shish
    const withCode = input.startsWith(selectedCountry.code) ? input : selectedCountry.code + ' ' + input;
    const formatted = selectedCountry.code + ' ' + formatPhoneNumber(withCode, selectedCountry);
    
    // Maksimal uzunlikni tekshirish
    const numbersOnly = formatted.replace(/\D/g, '');
    const maxLength = selectedCountry.code === '+998' ? 12 : 11;
    
    if (numbersOnly.length <= maxLength) {
      setPhoneNumber(formatted);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Backend bilan bog'lanish va xatoliklarni ko'rsatish logikasi
    try {
      // API call logic here
      setError('');
      // Telefon raqamni tasdiqlash sahifasiga o'tish
      navigate('/verify-phone', { state: { phone: phoneNumber } });
    } catch (err) {
      setError(err.message || 'Ошибка при регистрации');
    }
  }

  const filteredCountries = countryData.countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  return (
    <div className='text-center text-white h-screen flex flex-col items-center justify-center space-y-6'>
      <div className='bg-[#12151B] rounded-lg w-[400px] border border-[#181C25]'>
        <div className='flex items-center justify-center bg-[#0B0D10] rounded-t-lg p-[1.25rem]'>
          <img src={icon} alt="icon" className='w-10 h-10 mr-2' />
          <span className='text-white text-[1.5rem] font-bold uppercase'>
            battlecup<span className='text-[#4B5977]'>.net</span>
          </span>
        </div>
        <form onSubmit={handleSubmit} className="px-8 py-[1.25rem] space-y-[1.25rem]">
          <h1 className='text-2xl font-medium'>Регистрация</h1>

          {/* Error message */}
          {error && (
            <div className='border border-orange-800 bg-[#A12C1D] text-white p-3 rounded-md'>
              {error}
            </div>
          )}

          {/* Register form */}
          <div className='space-y-4'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.85164 16.1267C5.37792 17.0042 1.51392 18.7959 3.86736 21.0381C5.01699 22.1333 6.29739 22.9167 7.90716 22.9167H17.0928C18.7026 22.9167 19.983 22.1333 21.1326 21.0381C23.486 18.7959 19.6221 17.0042 18.1483 16.1267C14.6925 14.0689 10.3075 14.0689 6.85164 16.1267Z" stroke="#475065" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.1875 6.77087C17.1875 9.35971 15.0889 11.4584 12.5 11.4584C9.91117 11.4584 7.8125 9.35971 7.8125 6.77087C7.8125 4.18204 9.91117 2.08337 12.5 2.08337C15.0889 2.08337 17.1875 4.18204 17.1875 6.77087Z" stroke="#475065" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <input type="text" className='border-2 border-[#181C25] w-full pl-10 pr-4 py-3 bg-[#12151B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Логин' />
            </div>

            <div className='relative flex'>
              <div className='absolute inset-y-0 left-0 pl-2 flex items-center' ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='w-6 h-6 bg-[#1A1D21] focus:outline-none rounded-md overflow-hidden flex items-center'
                >
                  <img 
                    src={selectedCountry.flag} 
                    alt={selectedCountry.code}
                    className='w-full h-full object-cover'
                  />
                </button>
                {isDropdownOpen && (
                  <div className='absolute top-full left-0 mt-2 bg-[#12151B] border border-[#1F2937] rounded-xl overflow-hidden z-10 w-[320px] shadow-lg'>
                    <div className='p-3 sticky top-0 bg-[#12151B] border-b border-[#1F2937]'>
                      <div className='relative'>
                        <input 
                          type="text" 
                          value={searchQuery} 
                          onChange={(e) => setSearchQuery(e.target.value)} 
                          className='w-full p-2.5 pl-10 bg-[#1A1D21] border border-[#1F2937] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] text-white text-sm'
                          placeholder='Davlatni qidirish...'
                        />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className='overflow-y-auto max-h-[280px] py-2'>
                      {filteredCountries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => handleCountrySelect(country)}
                          className='w-full px-4 py-2.5 hover:bg-[#1A1D21] flex items-center gap-3 transition-all duration-200'
                        >
                          <img 
                            src={country.flag} 
                            alt={country.name}
                            className='w-7 h-7 object-cover rounded'
                          />
                          <div className='flex flex-col items-start'>
                            <span className='text-white text-sm font-medium'>{country.name}</span>
                            <span className='text-[#6B7280] text-xs'>{country.code}</span>
                          </div>
                        </button>
                      ))}
                      {filteredCountries.length === 0 && (
                        <div className='text-center py-4 text-gray-400 text-sm'>
                          Davlat topilmadi
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <input
                type="tel"
                ref={phoneInputRef}
                onChange={handlePhoneChange}
                value={phoneNumber}
                className='border-2 border-[#181C25] w-full pl-10 pr-4 py-3 bg-[#12151B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder={selectedCountry.code}
              />
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

            {/* Confirm Password */}
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
                type={showConfirmPassword ? "text" : "password"}
                className='border-2 border-[#181C25] w-full pl-10 pr-4 py-3 bg-[#12151B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Повторите пароль'
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-[#4B5977] hover:text-white transition-colors'
              >
                {showConfirmPassword ? (
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

          {/* Register button */}
          <button className='w-full border border-[#2576F0] bg-gradient-to-t from-[#153B73] to-[#1E498A] hover:from-[#1E498A] hover:to-[#153B73] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'>
            Продолжить
          </button>

          <div className='text-gray-400 text-sm flex items-center gap-3 before:content-[""] before:block before:h-[1px] before:flex-1 before:bg-[#181C25] after:content-[""] after:block after:h-[1px] after:flex-1 after:bg-[#181C25]'>
            или
          </div>

          {/* Login button */}
          <button
            onClick={() => navigate('/login')}
            type="button"
            className='w-full border border-[#333A49] bg-gradient-to-t from-[#1B1F27] to-[#232833] hover:from-[#232833] hover:to-[#1B1F27] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}
