import left from '../../assets/svg/left.svg';
import ranking from '../../assets/svg/ranking.svg';
import rank from '../../img/5+.png';
import menu05 from '../../assets/svg/menu-05.svg';
import rekurt from '../../img/bronze.png';
import team from '../../img/team.png';
export default function ProfileStats() {
  return (
    <div className='mt-6'>
      <div className='flex flex-row justify-between gap-4'>
        {/* Dota reyting */}
        <div className="flex-1 bg-[#12151B] border border-[#181C25]">
          <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
            <div className='flex items-center gap-2'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.65538 7.90931L4.73089 6.26084C3.46162 5.16901 3.45737 3.58451 3.3219 2.51624C4.71052 2.58214 5.78614 2.70785 6.72283 3.4991L7.70272 4.61237L8.76312 5.80293M16.2144 15.3484L13.7437 12.8485M11.6845 15.3484C11.7034 15.1215 11.8519 14.5334 12.534 13.9032C13.1459 13.3378 14.473 11.9828 15.0693 11.3952C15.4071 11.0624 15.961 10.8289 16.2144 10.8293M12.9735 10.6734L14.0874 11.9057M11.3969 12.0302L12.642 13.1249M17.0513 14.9835C17.7433 14.9849 18.3342 15.496 18.3329 16.1875C18.3315 16.879 17.7433 17.4854 17.0513 17.4841C16.3593 17.4828 15.8256 16.8743 15.827 16.1828C15.8716 15.4946 16.3806 15.076 17.0513 14.9835Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.82999 15.3275L6.29496 12.9172M3.80135 10.8226C4.02839 10.841 4.66135 10.9926 5.22838 11.7009C5.74898 12.3511 7.15313 13.6088 7.74223 14.2036C8.07589 14.5406 8.30925 15.0742 8.30925 15.3275M6.05379 11.8582L12.9196 3.88674C14.0369 2.63998 15.5983 2.61274 16.6697 2.49835C16.5765 3.88449 16.4296 4.95673 15.6196 5.87709L7.1247 13.2719M4.17186 16.249C4.17186 16.9405 3.61089 17.5011 2.91888 17.5011C2.22688 17.5011 1.66589 16.9405 1.66589 16.249C1.66589 15.5574 2.22688 14.9968 2.91888 14.9968C3.61089 14.9968 4.17186 15.5574 4.17186 16.249Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className='text-[#8B95A9]'>Дота рейтинг</span>
            </div>
            <button className='text-[#59606F] text-sm flex items-center gap-2'>
              Вся статистика
              <img src={left} />
            </button>
          </div>
          <div className='flex flex-row'>
            <div className="flex flex-col justify-evenly">
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row w-full">
                  <img src={ranking} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                </div>
                <div className="gap-2 flex flex-row w-full">
                  <img src={rank} className='w-[28px] h-[20px]' />
                  <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                </div>
              </div>
              <div className='border-b border-[#181C25]'></div>
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row w-full">
                  <img src={menu05} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                </div>
                <div className="gap-2 flex flex-row w-full">
                  <img src={rank} className='w-[28px] h-[20px]' />
                  <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full border-l border-[#181C25]'>
              <img src={rekurt} className='w-[101px] h-[101px]' />
              <div className='text-[#BD7D40] text-[15px] font-[700] bg-[#452910] px-[8px] py-[1px] rounded-[4px] mb-[14px]'>РЕКУРТ I</div>
            </div>
          </div>
        </div>

        {/* Komanda */}
        <div className="flex-1 bg-[#12151B] border border-[#181C25]">
          <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
            <div className='flex items-center gap-2'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5Z" stroke="#8B95A9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 8.33333C8.42047 8.33333 9.16667 7.58714 9.16667 6.66667C9.16667 5.74619 8.42047 5 7.5 5C6.57953 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 6.57953 8.33333 7.5 8.33333Z" stroke="#8B95A9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.33331 15.8333L7.08331 12.0833C7.31331 11.8533 7.68665 11.8533 7.91665 12.0833L10.4166 14.5833C10.6466 14.8133 11.02 14.8133 11.25 14.5833L13.3333 12.5C13.5633 12.27 13.9366 12.27 14.1666 12.5L16.6666 15" stroke="#8B95A9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className='text-[#8B95A9]'>Команда</span>
            </div>
            <button className='text-[#59606F] text-sm flex items-center gap-2'>
              Посмотреть
              <img src={left} />
            </button>
          </div>
          <div className='flex items-center gap-3 p-4 h-[130px]'>
            <div className="w-[130px] flex flex-row items-center justify-center h-full">
              <img src={team} alt="Team" className='w-[90px] rounded' />
            </div>
            <div className='h-full'>
              <div className='flex items-center gap-2'>
                <img src="https://flagcdn.com/w20/ua.png" alt="UA" className='w-4 h-3' />
                <span className='text-white justify-between'>BattleCup Team <span className='text-[#8993A6]'>Тег: <span className='text-[#DEE5FF]'>[BCT]</span></span></span>
              </div>
              <div className='text-sm text-[#8B95A9] py-2'>Рейтинг команды: <span className='text-[#BCC3D0]'> 2565 pts</span></div>
              <div className='text-sm text-[#8B95A9]'>Участники: 7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
