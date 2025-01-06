import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../img/icon.png'

const countries = {
  uz: {
    name: 'Uzbekistan',
    code: '+998',
    flag: 'https://flagcdn.com/w40/uz.png',
    format: '## ###-##-##'
  },
  ru: {
    name: 'Russia',
    code: '+7',
    flag: 'https://flagcdn.com/w40/ru.png',
    format: '### ###-##-##'
  },
  kz: {
    name: 'Kazakhstan',
    code: '+7',
    flag: 'https://flagcdn.com/w40/kz.png',
    format: '### ###-##-##'
  }
};

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('uz');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const phoneInputRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(0);


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
    // Cursor pozitsiyasini tiklash
    if (phoneInputRef.current) {
      phoneInputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [cursorPosition, phoneNumber]);
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const formatPhoneNumber = (value) => {
    const country = countries[selectedCountry];
    
    // Faqat raqamlarni qoldirish
    const numbers = value.replace(/\D/g, '');
    const format = country.format;
    let result = '';
    let formatIndex = 0;
    let numberIndex = 0;

    while (formatIndex < format.length && numberIndex < numbers.length) {
      if (format[formatIndex] === '#') {
        result += numbers[numberIndex];
        numberIndex++;
      } else {
        result += format[formatIndex];
      }
      formatIndex++;
    }

    return result;
  };

  const handlePhoneChange = (e) => {
    const input = e.target;
    const selectionStart = input.selectionStart;
    const previousValue = input.value;
    const countryCode = countries[selectedCountry].code;

    // Agar input bo'sh bo'lsa yoki kod bilan boshlanmasa
    if (!input.value || !input.value.startsWith(countryCode)) {
      input.value = countryCode + ' ';
      setPhoneNumber(countryCode + ' ');
      setCursorPosition(countryCode.length + 1);
      return;
    }

    let value = input.value.replace(/\D/g, '');
    if (value.startsWith(countryCode.replace(/\D/g, ''))) {
      value = value.slice(countryCode.replace(/\D/g, '').length);
    }

    const formattedNumber = countryCode + ' ' + formatPhoneNumber(value);
    setPhoneNumber(formattedNumber);

    // Cursor pozitsiyasini saqlash
    const addedChars = formattedNumber.length - previousValue.length;
    const newPosition = Math.max(countryCode.length + 1, selectionStart + addedChars);
    setCursorPosition(newPosition);
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    try {
      const fullPhone = countries[selectedCountry].code + phoneNumber.replace(/\D/g, '');
      console.log('Sending code to:', fullPhone);
      setStep(2);
      setError('');
    } catch (err) {
      setError('Ошибка при отправке кода');
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to verify code
      setStep(3);
      setError('');
    } catch (err) {
      setError('Неверный код');
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
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
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
                    src={countries[selectedCountry].flag}
                    alt={selectedCountry}
                    className='w-full h-full object-cover'
                  />
                </button>
                {isDropdownOpen && (
                  <div className='absolute top-full left-0 mt-1 bg-[#1A1D21] border border-[#181C25] rounded-md overflow-hidden z-10 w-48'>
                    {Object.entries(countries).map(([code, country]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setSelectedCountry(code);
                          setIsDropdownOpen(false);
                        }}
                        className='w-full px-3 py-2 hover:bg-[#232833] flex items-center gap-3'
                      >
                        <img
                          src={country.flag}
                          alt={code}
                          className='w-6 h-6 object-cover rounded-sm'
                        />
                        <span className='text-white text-sm'>{country.name}</span>
                        <span className='text-[#475065] text-sm ml-auto'>{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                ref={phoneInputRef}
                onChange={handlePhoneChange}
                value={phoneNumber || countries[selectedCountry].code + ' '}
                className='border-2 border-[#181C25] w-full pl-10 pr-4 py-3 bg-[#12151B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder={countries[selectedCountry].code + ' ' + formatPhoneNumber('')}
                onFocus={(e) => {
                  if (!phoneNumber) {
                    setPhoneNumber(countries[selectedCountry].code + ' ');
                    setCursorPosition(countries[selectedCountry].code.length + 1);
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
              <div className='text-white'>{phone}</div>

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
