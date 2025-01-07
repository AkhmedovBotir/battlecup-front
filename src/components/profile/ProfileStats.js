'use client'
import React from 'react'
import UserWall from './UserWall'

const posts = [
  {
    id: 1,
    author: {
      name: "Uzoomak1",
      avatar: "/img/avatar.png",
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
      avatar: "/img/avatar.png",
      badge: "/svg/mcdonalds.svg",
      status: "Сейчас в сети",
      timestamp: "вчера в 17:15"
    },
    content: "Человеку иногда надо вкусить немного безумия, чтобы осврешить вкус к жизни. Дота турниры дадут тебе все необходимые ощущения и напряжение, которое ты никогда не испытывал!"
  },
  {
    id: 3,
    author: {
      name: "Player-x",
      avatar: "/img/avatar.png",
      timestamp: "вчера в 17:15"
    },
    content: "Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни."
  },
  {
    id: 4,
    author: {
      name: "shunamehateyo",
      avatar: "/img/avatar.png",
      badge: "/svg/mcdonalds.svg",
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
                <img src="/svg/pin.svg" alt="Pin" />
              </button>
            )}
            <button>
              <img src="/svg/edit.svg" alt="Edit" />
            </button>
            <button>
              <img src="/svg/user-block.svg" alt="User Block" />
            </button>
            <button>
              <img src="/svg/alert.svg" alt="Alert" />
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
            <img src="/svg/reply.svg" alt="Reply" />
            Ответить
          </button>
          <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
            <img src="/svg/like.svg" alt="Like" />
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
                <img src="/svg/left.svg" alt="Left" />
              </button>
            </div>
            <div className='flex flex-row'>
              <div className="flex flex-col justify-evenly">
                <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                  <div className="gap-2 flex flex-row w-full">
                    <img src="/svg/menu-05.svg" className='w-[18px] h-[18px]' alt="Menu" />
                    <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                  </div>
                  <div className="gap-2 flex flex-row w-full">
                    <img src="/img/5+.png" className='w-[28px] h-[20px]' alt="Rating" />
                    <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                  </div>
                </div>
                <div className='border-b border-[#181C25]'></div>
                <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                  <div className="gap-2 flex flex-row w-full">
                    <img src="/svg/menu-05.svg" className='w-[18px] h-[18px]' alt="Menu" />
                    <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                  </div>
                  <div className="gap-2 flex flex-row w-full">
                    <img src="/img/5+.png" className='w-[28px] h-[20px]' alt="Rating" />
                    <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center w-full border-l border-[#181C25]'>
                <img src="/img/bronze.png" className='w-[101px] h-[101px]' alt="Bronze" />
                <div className='text-[#BD7D40] text-[15px] font-[700] bg-[#452910] px-[8px] py-[1px] rounded-[4px] mb-[14px]'>РЕКУРТ I</div>
              </div>
            </div>
          </div>

          {/* Komanda */}
          <div className="flex-1 bg-[#12151B] border border-[#181C25]">
            <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
              <div className='flex items-center gap-2'>
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5Z" stroke="#8B95A9" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.5 8.33333C8.42047 8.33333 9.16667 7.58714 9.16667 6.66667C9.16667 5.74619 8.42047 5 7.5 5C6.57953 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 6.57953 8.33333 7.5 8.33333Z" stroke="#8B95A9" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.33331 15.8333L7.08331 12.0833C7.31331 11.8533 7.68665 11.8533 7.91665 12.0833L10.4166 14.5833C10.6466 14.8133 11.02 14.8133 11.25 14.5833L13.3333 12.5C13.5633 12.27 13.9366 12.27 14.1666 12.5L16.6666 15" stroke="#8B95A9" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='text-[#8B95A9]'>Команда</span>
              </div>
              <button className='text-[#59606F] text-sm flex items-center gap-2'>
                Посмотреть
                <img src="/svg/left.svg" alt="Arrow Right" />
              </button>
            </div>
            <div className='flex items-center gap-3 p-4 h-[130px]'>
              <div className="w-[130px] flex flex-row items-center justify-center h-full">
                <img src="/img/team.png" alt="Team" className='w-[90px] rounded' />
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
                  <img src="/img/avatar.png" alt="Avatar" className='w-8 h-8 rounded-lg' />
                  <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                      <img src="/svg/mcdonalds.svg" alt="McDonalds" className='w-5 h-5' />
                      <span className='text-white text-sm'>shuname</span>
                    </div>
                    <span className='text-[#20C867] text-sm'>Сейчас в сети</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <img src="/img/avatar.png" alt="Avatar" className='w-8 h-8 rounded-lg' />
                  <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                      <img src="/svg/mcdonalds.svg" alt="McDonalds" className='w-5 h-5' />
                      <span className='text-white text-sm'>Uzoomak1</span>
                    </div>
                    <span className='text-[#59606F] text-sm'>Сегодня в 00:11</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <img src="/img/avatar.png" alt="Avatar" className='w-8 h-8 rounded-lg' />
                  <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                      <img src="/svg/mcdonalds.svg" alt="McDonalds" className='w-5 h-5' />
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
                  <img src="/img/crown.png" alt="Crown" className='w-10 h-10' />
                  <div className='flex-1'>
                    <div className='text-white text-sm'>Я король!</div>
                    <div className='text-[#59606F] text-sm'>Просто незаменимый, насколько ты крут!</div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <img src="/img/butterfly.png" alt="Butterfly" className='w-10 h-10' />
                  <div className='flex-1'>
                    <div className='text-white text-sm'>Верный друг</div>
                    <div className='text-[#59606F] text-sm'>Здесь самые легкие и приятные задания в игре</div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <img src="/img/killer.png" alt="Killer" className='w-10 h-10' />
                  <div className='flex-1'>
                    <div className='text-white text-sm'>Прирожденный убийца</div>
                    <div className='text-[#59606F] text-sm'>Лучший киллер</div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <img src="/img/support.png" alt="Support" className='w-10 h-10' />
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
