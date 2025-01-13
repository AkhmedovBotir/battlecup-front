import React from 'react';
import leftSvg from '../../assets/svg/left.svg';
import menu05Svg from '../../assets/svg/menu-05.svg';
import pinSvg from '../../assets/svg/pin.svg';
import editSvg from '../../assets/svg/edit.svg';
import userBlockSvg from '../../assets/svg/user-block.svg';
import alertSvg from '../../assets/svg/alert.svg';
import replySvg from '../../assets/svg/reply.svg';
import likeSvg from '../../assets/svg/like.svg';
import mcdonaldsSvg from '../../assets/svg/mcdonalds.svg';

import bronzeImg from '../../img/bronze.png';
import teamImg from '../../img/team.png';
import avatarImg from '../../img/avatar.png';
import ratingImg from '../../img/5+.png';
import crownImg from '../../img/crown.png';
import butterflyImg from '../../img/butterfly.png';
import killerImg from '../../img/killer.png';
import supportImg from '../../img/support.png';

import UserWall from './UserWall.jsx'

const posts = [
  {
    id: 1,
    author: {
      name: "Uzoomak1",
      avatar: avatarImg,
      status: "прикреплено",
      timestamp: "вчера в 17:15"
    },
    content: "Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни. Дота турниры дадут тебе все необходимые ощущения и напряжение, которое ты никогда не испытывал!",
    isPinned: true
  },
  {
    id: 2,
    author: {
      name: "shuname",
      avatar: avatarImg,
      badge: mcdonaldsSvg,
      status: "Сейчас в сети",
      timestamp: "вчера в 17:15"
    },
    content: "Человеку иногда надо вкусить немного безумия, чтобы осврешить вкус к жизни. Дота турниры дадут тебе все необходимые ощущения и напряжение, которое ты никогда не испытывал!"
  },
  {
    id: 3,
    author: {
      name: "Player-x",
      avatar: avatarImg,
      timestamp: "вчера в 17:15"
    },
    content: "Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни."
  },
  {
    id: 4,
    author: {
      name: "shunamehateyo",
      avatar: avatarImg,
      badge: mcdonaldsSvg,
      status: "прикреплено",
      timestamp: "вчера в 17:15"
    },
    banned: {
      until: "25.12.2024 16:55",
      reason: "Оскорбление"
    }
  }
]

export default function ProfileStats() {
  const renderPost = (post) => {
    return (
      <div key={post.id} className='bg-[#12151B] rounded-lg p-4'>
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center gap-2'>
            <img src={post.author.avatar} alt="Avatar" className='w-10 h-10 rounded-lg' />
            <div>
              <div className='flex items-center gap-2'>
                <span className='text-white'>{post.author.name}</span>
                {post.author.badge && <img src={post.author.badge} alt="Badge" className='w-4 h-4' />}
                {post.author.timestamp && <span className='text-[#8B95A9]'>• {post.author.timestamp}</span>}
              </div>
              {post.author.status && <span className='text-[#8B95A9] text-sm'>{post.author.status}</span>}
            </div>
          </div>
          <div className='flex items-center gap-2'>
            {post.isPinned || (
              <button>
                <img src={pinSvg} alt="Pin" />
              </button>
            )}
            <button>
              <img src={editSvg} alt="Edit" />
            </button>
            <button>
              <img src={userBlockSvg} alt="User Block" />
            </button>
            <button>
              <img src={alertSvg} alt="Alert" />
            </button>
          </div>
        </div>
        {post.banned ? (
          <div className='bg-[#12151B] rounded-lg p-4 mb-4'>
            <div className='flex items-center gap-2 mb-2'>
              <img src={post.author.avatar} alt="Avatar" className='w-6 h-6 rounded-lg' />
              <span className='text-white'>@{post.author.name}</span>
              <span className='text-[#8B95A9]'>Получил бан за этот сообщение</span>
            </div>
            <div className='text-[#8B95A9] text-sm'>
              Забанен до: {post.banned.until}
              <br />
              Причина бана: {post.banned.reason}
            </div>
          </div>
        ) : (
          <p className='text-[#D6E6FF] mb-4'>{post.content}</p>
        )}
        <div className='flex items-center gap-4'>
          <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
            <img src={replySvg} alt="Reply" />
            Ответить
          </button>
          <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
            <img src={likeSvg} alt="Like" />
            Нравится
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='my-6 flex flex-row gap-4'>

      {/* Main Content */}
      <div className='flex-1'>
        {/* Top Cards */}
        <div className='flex flex-row justify-between gap-4'>
          {/* Dota reyting */}
          <div className="flex-1 bg-[#12151B] border border-[#181C25]">
            <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
              <div className='flex items-center gap-2'>
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.65538 7.90931L4.73089 6.26084C3.46162 5.16901 3.45737 3.58451 3.3219 2.51624C4.71052 2.58214 5.78614 2.70785 6.72283 3.4991L7.70272 4.61237L8.76312 5.80293M16.2144 15.3484L13.7437 12.8485M11.6845 15.3484C11.7034 15.1215 11.8519 14.5334 12.534 13.9032C13.1459 13.3378 14.473 11.9828 15.0693 11.3952C15.4071 11.0624 15.961 10.8289 16.2144 10.8293M12.9735 10.6734L14.0874 11.9057M11.3969 12.0302L12.642 13.1249M17.0513 14.9835C17.7433 14.9849 18.3342 15.496 18.3329 16.1875C18.3315 16.879 17.7433 17.4854 17.0513 17.4841C16.3593 17.4828 15.8256 16.8743 15.827 16.1828C15.8716 15.4946 16.3806 15.076 17.0513 14.9835Z" stroke="#8993A6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.82999 15.3275L6.29496 12.9172M3.80135 10.8226C4.02839 10.841 4.66135 10.9926 5.22838 11.7009C5.74898 12.3511 7.15313 13.6088 7.74223 14.2036C8.07589 14.5406 8.30925 15.0742 8.30925 15.3275M6.05379 11.8582L12.9196 3.88674C14.0369 2.63998 15.5983 2.61274 16.6697 2.49835C16.5765 3.88449 16.4296 4.95673 15.6196 5.87709L7.1247 13.2719M4.17186 16.249C4.17186 16.9405 3.61089 17.5011 2.91888 17.5011C2.22688 17.5011 1.66589 16.9405 1.66589 16.249C1.66589 15.5574 2.22688 14.9968 2.91888 14.9968C3.61089 14.9968 4.17186 15.5574 4.17186 16.249Z" stroke="#8993A6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='text-[#8B95A9]'>Дота рейтинг</span>
              </div>
              <button className='text-[#59606F] text-sm flex items-center gap-2'>
                Вся статистика
                <img src={leftSvg} alt="Left" />
              </button>
            </div>
            <div className='flex flex-row'>
              <div className="flex flex-col justify-evenly">
                <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                  <div className="gap-2 flex flex-row w-full">
                    <img src={menu05Svg} className='w-[18px] h-[18px]' alt="Menu" />
                    <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                  </div>
                  <div className="gap-2 flex flex-row w-full">
                    <img src={ratingImg} className='w-[28px] h-[20px]' alt="Rating" />
                    <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                  </div>
                </div>
                <div className='border-b border-[#181C25]'></div>
                <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                  <div className="gap-2 flex flex-row w-full">
                    <img src={menu05Svg} className='w-[18px] h-[18px]' alt="Menu" />
                    <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                  </div>
                  <div className="gap-2 flex flex-row w-full">
                    <img src={ratingImg} className='w-[28px] h-[20px]' alt="Rating" />
                    <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center w-full border-l border-[#181C25]'>
                <img src={bronzeImg} className='w-[101px] h-[101px]' alt="Bronze" />
                <div className='text-[#BD7D40] text-[15px] font-[700] bg-[#452910] px-[8px] py-[1px] rounded-[4px] mb-[14px]'>РЕКУРТ I</div>
              </div>
            </div>
          </div>

          {/* Komanda */}
          <div className="flex-1 bg-[#12151B] border border-[#181C25]">
            <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
              <div className='flex items-center gap-2'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6666 7.08335C11.6666 8.0038 10.9205 8.75002 9.99998 8.75002C9.07948 8.75002 8.33331 8.0038 8.33331 7.08335C8.33331 6.16288 9.07948 5.41669 9.99998 5.41669C10.9205 5.41669 11.6666 6.16288 11.6666 7.08335Z" stroke="#8993A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.99171 11.3735C7.46773 11.6806 6.09386 12.3078 6.93063 13.0925C7.33939 13.4758 7.79464 13.75 8.36702 13.75H11.633C12.2054 13.75 12.6607 13.4758 13.0694 13.0925C13.9062 12.3078 12.5324 11.6806 12.0084 11.3735C10.7796 10.6533 9.22043 10.6533 7.99171 11.3735Z" stroke="#8993A6" stroke-width="1.25" stroke-linejoin="round" />
                  <path d="M17.5 9.31944V6.90026C17.5 5.53359 17.5 4.85025 17.1632 4.40443C16.8265 3.9586 16.0651 3.74215 14.5423 3.30927C13.5018 3.01352 12.5847 2.65721 11.8519 2.33193C10.8528 1.88844 10.3533 1.66669 10 1.66669C9.64667 1.66669 9.14717 1.88844 8.14809 2.33193C7.41532 2.65721 6.4982 3.01351 5.45778 3.30927C3.93494 3.74215 3.17352 3.9586 2.83676 4.40443C2.5 4.85025 2.5 5.53359 2.5 6.90026V9.31944C2.5 14.0071 6.71897 16.8196 8.82833 17.9329C9.33425 18.1999 9.58717 18.3334 10 18.3334C10.4128 18.3334 10.6657 18.1999 11.1717 17.9329C13.281 16.8196 17.5 14.0071 17.5 9.31944Z" stroke="#8993A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className='text-[#8B95A9]'>Команда</span>
              </div>
              <button className='text-[#59606F] text-sm flex items-center gap-2'>
                Посмотреть
                <img src={leftSvg} alt="Arrow Right" />
              </button>
            </div>
            <div className='flex items-center gap-3 p-4 h-[130px]'>
              <div className="w-[130px] flex flex-row items-center justify-center h-full">
                <img src={teamImg} alt="Team" className='w-[90px] rounded' />
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

        <div className='g-3 flex flex-row justify-between my-5'>
          {/* Left Sidebar */}
          <div className='w-[260px] flex flex-col gap-4'>
            {/* Friends Section */}
            <div className='bg-[#12151B] border border-[#181C25] rounded-lg'>
              <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
                <div className='flex items-center gap-2'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.49996 9.16667C9.34091 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34091 2.5 7.49996 2.5C5.65901 2.5 4.16663 3.99238 4.16663 5.83333C4.16663 7.67428 5.65901 9.16667 7.49996 9.16667Z" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.5 17.5V15.8333C2.5 14.9493 2.85119 14.1014 3.47631 13.4763C4.10143 12.8512 4.94928 12.5 5.83333 12.5H9.16667C10.0507 12.5 10.8986 12.8512 11.5237 13.4763C12.1488 14.1014 12.5 14.9493 12.5 15.8333V17.5" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.3334 2.73333C13.9255 2.89827 14.4551 3.24614 14.852 3.72607C15.2489 4.20599 15.4941 4.79323 15.5567 5.41336C15.6193 6.03349 15.4962 6.65931 15.2018 7.21395C14.9074 7.76859 14.4547 8.22791 13.9 8.52499" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 17.5V15.8333C17.4949 15.2167 17.2571 14.6223 16.8255 14.1491C16.3939 13.676 15.7951 13.3508 15.1333 13.2333" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className='text-[#8B95A9]'>Друзья 215</span>
                </div>
                <button className='text-[#59606F] text-sm'>
                  Все
                </button>
              </div>
              <div className='p-4 space-y-4'>
                <div className='flex items-center gap-2'>
                  <img src={avatarImg} alt="Avatar" className='w-8 h-8 rounded-lg' />
                  <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                      <img src={mcdonaldsSvg} alt="McDonalds" className='w-5 h-5' />
                      <span className='text-white text-sm'>shuname</span>
                    </div>
                    <span className='text-[#20C867] text-sm'>Сейчас в сети</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={avatarImg} alt="Avatar" className='w-8 h-8 rounded-lg' />
                  <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                      <img src={mcdonaldsSvg} alt="McDonalds" className='w-5 h-5' />
                      <span className='text-white text-sm'>Uzoomak1</span>
                    </div>
                    <span className='text-[#59606F] text-sm'>Сегодня в 00:11</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={avatarImg} alt="Avatar" className='w-8 h-8 rounded-lg' />
                  <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                      <img src={mcdonaldsSvg} alt="McDonalds" className='w-5 h-5' />
                      <span className='text-white text-sm'>AZ4ATOSTOBOI</span>
                    </div>
                    <span className='text-[#59606F] text-sm'>Сегодня в 00:11</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards Section */}
            <div className='bg-[#12151B] border border-[#181C25] rounded-lg'>
              <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
                <div className='flex items-center gap-2'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0001 12.5C13.2217 12.5 15.8334 9.88832 15.8334 6.66667C15.8334 3.44501 13.2217 0.833336 10.0001 0.833336C6.77842 0.833336 4.16675 3.44501 4.16675 6.66667C4.16675 9.88832 6.77842 12.5 10.0001 12.5Z" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.84159 11.575L5.83325 19.1667L9.99992 16.6667L14.1666 19.1667L13.1583 11.5667" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className='text-[#8B95A9]'>Награды</span>
                </div>
                <button className='text-[#59606F] text-sm'>
                  Все
                </button>
              </div>
              <div className='p-4 space-y-4'>
                <div className='flex items-center gap-3'>
                  <img src={crownImg} alt="Crown" className='w-10 h-10' />
                  <div className='flex-1'>
                    <div className='text-white text-sm'>Я король!</div>
                    <div className='text-[#59606F] text-sm'>Просто незаменимый, насколько ты крут!</div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <img src={butterflyImg} alt="Butterfly" className='w-10 h-10' />
                  <div className='flex-1'>
                    <div className='text-white text-sm'>Верный друг</div>
                    <div className='text-[#59606F] text-sm'>Здесь самые легкие и приятные задания в игре</div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <img src={killerImg} alt="Killer" className='w-10 h-10' />
                  <div className='flex-1'>
                    <div className='text-white text-sm'>Прирожденный убийца</div>
                    <div className='text-[#59606F] text-sm'>Лучший киллер</div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <img src={supportImg} alt="Support" className='w-10 h-10' />
                  <div className='flex-1'>
                    <div className='text-white text-sm'>Сапорт</div>
                    <div className='text-[#59606F] text-sm'>Топ 1 сапорт</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Posts Section */}
          <div className='w-[750px]'>
            <UserWall />
          </div>
        </div>
      </div>
    </div>
  )
}
