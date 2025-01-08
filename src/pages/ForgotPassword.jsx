import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../img/icon.png'
import countryData from '../data/countryPhoneCodes.json'

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryData.countries[23]); // O'zbekiston
  const [phoneNumber, setPhoneNumber] = useState(countryData.countries[23].code + ' ');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    // Yangi davlat kodi bilan raqamni qayta formatlash
    setPhoneNumber(country.code + ' ');
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Telefon raqamni tozalash va tekshirish
      const cleanPhone = phoneNumber.replace(/\D/g, '');
      if (cleanPhone.length < 10) {
        setError('Telefon raqam noto\'g\'ri kiritilgan');
        return;
      }

      // Telefon raqamni saqlash
      setPhone(phoneNumber);
      console.log('Sending code to:', phoneNumber);
      
      // Keyingi bosqichga o'tish
      setStep(2);
      setError('');
      // Timer'ni boshlash
      setTimer(60);
    } catch (err) {
      setError('Xatolik yuz berdi. Qaytadan urinib ko\'ring');
    }
  };

  const filteredCountries = countryData.countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const verificationCode = code.join('');
      if (verificationCode.length !== 6) {
        setError('Kodni to\'liq kiriting');
        return;
      }

      console.log('Verifying code:', verificationCode);
      setStep(3);
      setError('');
    } catch (err) {
      setError('Kod noto\'g\'ri. Qaytadan urinib ko\'ring');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to update password
      navigate('/profile');
    } catch (err) {
      setError('Ошибка при обновлении пароля');
    }
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Avtomatik keyingi maydonga o'tish
    if (value !== '' && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace bosilganda oldingi maydonga qaytish
    if (e.key === 'Backspace' && index > 0 && code[index] === '') {
      document.getElementById(`code-${index - 1}`).focus();
    }
  };

  return (
    <div className='text-center text-white h-screen flex flex-col items-center justify-center space-y-6'>
      <div className='bg-[#12151B] rounded-lg w-[400px] border border-[#181C25]'>
        <div className='flex items-center justify-center bg-[#0B0D10] rounded-t-lg p-[1.25rem]'>
          <img src={icon} alt="icon" className='w-10 h-10 mr-2' />
          <span className='text-white text-[1.5rem] font-bold uppercase'>
            battlecup<span className='text-[#4B5977]'>.net</span>
          </span>
        </div>

        {error && (
          <div className='border border-orange-800 bg-[#A12C1D] text-white p-3 rounded-md mx-8 mt-5'>
            {error}
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handlePhoneSubmit} className="px-8 py-[1.25rem] space-y-[1.25rem]">
            <h1 className='text-2xl font-medium'>Восстановление пароля</h1>
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
                placeholder={selectedCountry.code + ' '}
                onFocus={(e) => {
                  if (!phoneNumber) {
                    setPhoneNumber(selectedCountry.code + ' ');
                  }
                }}
              />
            </div>

            <button
              type="submit"
              className='w-full border border-[#2576F0] bg-gradient-to-t from-[#153B73] to-[#1E498A] hover:from-[#1E498A] hover:to-[#153B73] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'
            >
              Отправить код
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCodeSubmit} className="px-8 py-[1.25rem] space-y-[1.25rem]">
            <h1 className='text-2xl font-medium'>Подтверждение</h1>
            <div className='space-y-4'>
              <div className='text-[#475065] text-sm'>
                мы отправили код подтверждения на<br />
                ваш номер телефона:
              </div>
              <div className='text-white'>{phoneNumber}</div>

              <div className='flex justify-center gap-2 items-center'>
                {code.map((digit, index) => (
                  <React.Fragment key={index}>
                    <input
                      id={`code-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className='w-10 h-12 text-center bg-[#12151B] border-2 border-[#181C25] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
                    />
                    {index === 2 && (
                      <span className='text-[#475065] text-2xl'>-</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className='text-[#475065] text-sm'>
                Повторно отправить код подтверждения<br />
                можно через {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </div>
            </div>

            <button
              type="submit"
              className='w-full border border-[#2576F0] bg-gradient-to-t from-[#153B73] to-[#1E498A] hover:from-[#1E498A] hover:to-[#153B73] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'
            >
              Подтвердить
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="px-8 py-[1.25rem] space-y-[1.25rem]">
            <h1 className='text-2xl font-medium'>Новый пароль</h1>
            <div className='space-y-4'>
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
                  placeholder='Новый пароль'
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 12C15.5 13.6569 14.1569 15 12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12Z" stroke="#475065" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 5C7.77164 5 3.75043 7.94288 2.55078 12C3.75043 16.0571 7.77164 19 12.5 19C17.2284 19 21.2496 16.0571 22.4492 12C21.2496 7.94288 17.2284 5 12.5 5Z" stroke="#475065" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
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
                  type={showConfirmPassword ? "text" : "password"}
                  className='border-2 border-[#181C25] w-full pl-10 pr-4 py-3 bg-[#12151B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Повторите пароль'
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 12C15.5 13.6569 14.1569 15 12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12Z" stroke="#475065" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 5C7.77164 5 3.75043 7.94288 2.55078 12C3.75043 16.0571 7.77164 19 12.5 19C17.2284 19 21.2496 16.0571 22.4492 12C21.2496 7.94288 17.2284 5 12.5 5Z" stroke="#475065" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className='w-full border border-[#2576F0] bg-gradient-to-t from-[#153B73] to-[#1E498A] hover:from-[#1E498A] hover:to-[#153B73] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'
            >
              Сохранить
            </button>
          </form>
        )}
      </div>

      <button
        onClick={() => navigate(-1)}
        className='text-[#475065] hover:text-white'
      >
        назад
      </button>
    </div>
  )
}
