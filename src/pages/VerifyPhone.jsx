import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import confetti from 'canvas-confetti'
import icon from '../img/icon.png'

export default function VerifyPhone() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState('');
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [buttonText, setButtonText] = useState('Завершить регистрацию');
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone || '';

  const fireSalute = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const bottom = buttonRect.bottom;

    // Salyut effekti
    const count = 200;
    const defaults = {
      origin: { x: centerX / window.innerWidth, y: bottom / window.innerHeight },
      spread: 80,
      startVelocity: 30,
      ticks: 50,
      zIndex: 0,
      colors: ['#2576F0', '#153B73', '#1E498A', '#D6E6FF', '#ffffff']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setCanResend(true);
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    try {
      setError('');
      setButtonText('Успешно!');
      fireSalute();
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Ошибка при подтверждении');
    }
  };

  const handleResendCode = async () => {
    if (!canResend || isResending) return;
    
    setIsResending(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      
      // Reset states
      setTimer(60);
      setCanResend(false);
      setCode(['', '', '', '', '', '']);
      setError('');
    } catch (err) {
      setError('Ошибка при отправке кода');
    } finally {
      setIsResending(false);
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
        <form onSubmit={handleSubmit} className="px-8 py-[1.25rem] space-y-[1.25rem]">
          <h1 className='text-2xl font-medium'>Подтверждение аккаунта</h1>

          {error && (
            <div className='border border-orange-800 bg-[#A12C1D] text-white p-3 rounded-md'>
              {error}
            </div>
          )}

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
              {timer > 0 ? (
                <>
                  Повторно отправить код подтверждения<br />
                  можно через {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                </>
              ) : (
                <button
                  onClick={handleResendCode}
                  disabled={isResending}
                  className={`text-[#2576F0] hover:text-[#153B73] transition-colors ${isResending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isResending ? 'Отправка...' : 'Отправить код повторно'}
                </button>
              )}
            </div>
          </div>

          <div className='relative'>
            <button 
              ref={buttonRef}
              type="submit"
              className='w-full border border-[#2576F0] bg-gradient-to-t from-[#153B73] to-[#1E498A] hover:from-[#1E498A] hover:to-[#153B73] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={() => navigate(-1)}
        className='text-[#475065] hover:text-white'
      >
        отменить регистрацию
      </button>
    </div>
  )
}
