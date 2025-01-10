import ranking from "../../assets/svg/ranking.svg";
import rank from "../../img/5+.png";
import menu05 from "../../assets/svg/menu-05.svg";
import rekurt from "../../img/bronze.png";
import equal from "../../assets/svg/=.svg";
import avatar from "../../img/avatar.png";
import wards1 from "../../img/wards1.png";
import wards2 from "../../img/wards2.png";

import crownImg from '../../img/crown.png';
import butterflyImg from '../../img/butterfly.png';
import killerImg from '../../img/killer.png';
import supportImg from '../../img/support.png';

import { Link } from 'react-router-dom';

export default function ProfileStatistics() {
  const recentGames = [
    {
      hero: 'Pudge',
      heroImage: '/img/heroes/pudge.png',
      result: 'ПОБЕДА',
      points: '+160',
      role: 'Mider',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24',
      id: 1
    },
    {
      hero: 'Abaddon',
      heroImage: '/img/heroes/abaddon.png',
      result: 'ПОРАЖЕНИЕ',
      points: '-160',
      role: 'Hardliner',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24',
      id: 2
    },
    {
      hero: 'Phantom Lancer',
      heroImage: '/img/heroes/phantom_lancer.png',
      result: 'ПОКИНУЛ',
      points: '-160',
      role: 'Safeliner',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24',
      id: 3
    },
    {
      hero: 'Lycan',
      heroImage: '/img/heroes/lycan.png',
      result: 'ПОБЕДА',
      points: '+160',
      role: 'Mider',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24',
      id: 4
    },
    {
      hero: 'Clinkz',
      heroImage: '/img/heroes/clinkz.png',
      result: 'ПОБЕДА',
      points: '+160',
      role: 'Mider',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24',
      id: 5
    }
  ];

  const popularHeroes = [
    {
      hero: 'Pudge',
      matches: 336,
      winrate: 82,
      kda: 8.67,
      lastPlayed: '2 часа назад',
      pickrate: 50,
      lastMatchId: 1
    },
    {
      hero: 'Abaddon',
      matches: 336,
      winrate: 72,
      kda: 8.67,
      lastPlayed: '3 месяца назад',
      pickrate: 40,
      lastMatchId: 2
    },
    {
      hero: 'Phantom Lancer',
      matches: 336,
      winrate: 63,
      kda: 8.67,
      lastPlayed: '06.01.2025',
      pickrate: 30,
      lastMatchId: 3
    },
    {
      hero: 'Lycan',
      matches: 336,
      winrate: 52,
      kda: 8.67,
      lastPlayed: '06.01.2025',
      pickrate: 20,
      lastMatchId: 4
    },
    {
      hero: 'Clinkz',
      matches: 336,
      winrate: 42,
      kda: 8.67,
      lastPlayed: '06.01.2025',
      pickrate: 10,
      lastMatchId: 5
    }
  ];

  const gameStats = {
    matches: {
      total: 575,
      wins: 453,
      losses: 122,
      winrate: '78.78%',
    },
    kills: {
      total: 7139,
      average: 2549,
      record: 4231,
      kda: '7.31'
    },
    assists: {
      total: 12.42,
      average: 4.43,
      record: 7.36,
      kda: '37.15'
    }
  };

  return (
    <div className='mt-6'>
      <div className='flex flex-row justify-between gap-4'>
        {/* Dota reyting */}
        <div className="flex-1 bg-[#12151B] border border-[#181C25] rounded-lg">
          <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
            <span className='text-[#8B95A9]'>Рейтинг статистика</span>
          </div>
          <div className='flex flex-row'>
            <div className="flex flex-col justify-evenly">
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row">
                  <img src={ranking} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <img src={rank} className='w-[28px] h-[20px]' />
                  <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                </div>
              </div>
              <div className='border-b border-[#181C25]'></div>
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row">
                  <img src={menu05} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Место в рейтинге</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <span className='text-[#BCC3D0] text-[15px]'>#2165</span>
                </div>
              </div>
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row">
                  <img src={menu05} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Показатель Скилла</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <span className='text-[#BCC3D0] text-[15px] border border-[#871313] px-2 rounded font-[600] text-[#871313]'>S 2.7</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full border-l border-[#181C25]'>
              <img src={rekurt} className='w-[101px] h-[101px]' />
              <div className='text-[#BD7D40] text-[15px] font-[700] bg-[#452910] px-[8px] py-[1px] rounded-[4px] mb-[14px]'>РЕКРУТ I</div>
            </div>
          </div>
        </div>

        {/* Game Stats */}
        <div className="flex-1 bg-[#12151B] border border-[#181C25] rounded-lg">
          <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
            <span className='text-[#8B95A9]'>Игровая статистика</span>
          </div>
          <div className=''>
            <div className='flex flex-col'>
              {/* Games Row */}
              <div className='flex items-center px-4 py-[3px] border-b border-[#181C25]'>
                <div className='w-6 h-6 mr-4'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.31757 11.0731L6.62328 8.76521C4.8463 7.23665 4.84035 5.01835 4.6507 3.52277C6.59476 3.61503 8.10063 3.79103 9.412 4.89878L10.7839 6.45735L12.2684 8.12413M22.7002 21.4878L19.2412 17.988M16.3584 21.4878C16.3848 21.1702 16.5927 20.3468 17.5476 19.4645C18.4043 18.6729 20.2622 16.7759 21.097 15.9533C21.57 15.4874 22.3454 15.1605 22.7002 15.161M18.163 14.9428L19.7224 16.668M15.9557 16.8423L17.6989 18.3749M23.8718 20.977C24.8406 20.9789 25.6679 21.6944 25.6661 22.6626C25.6642 23.6307 24.8406 24.4796 23.8718 24.4778C22.903 24.476 22.1559 23.624 22.1578 22.6559C22.2203 21.6925 22.9329 21.1065 23.8718 20.977Z" stroke="#8993A6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.36194 21.4585L8.81291 18.0842M5.32186 15.1516C5.63971 15.1774 6.52586 15.3896 7.31969 16.3813C8.04853 17.2916 10.0144 19.0524 10.8391 19.885C11.3062 20.3568 11.6329 21.104 11.6329 21.4585M8.47527 16.6016L18.0874 5.44149C19.6516 3.69602 21.8376 3.65788 23.3376 3.49774C23.2071 5.43834 23.0014 6.93947 21.8674 8.22798L9.97455 18.5807M5.84057 22.7486C5.84057 23.7167 5.0552 24.5016 4.08639 24.5016C3.11759 24.5016 2.33221 23.7167 2.33221 22.7486C2.33221 21.7804 3.11759 20.9956 4.08639 20.9956C5.0552 20.9956 5.84057 21.7804 5.84057 22.7486Z" stroke="#8993A6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className='flex-1 grid grid-cols-4 text-center'>
                  <div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.matches.total}</div>
                    <div className='text-[#8993A6] text-xs'>ИГРЫ</div>
                  </div>
                  <div className='relative'>
                    <div className='absolute left-[-10px] top-[-5px] text-[#1B1E27] text-[32px]'>/</div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.matches.wins}</div>
                    <div className='text-[#8993A6] text-xs'>ПОБЕДЫ</div>
                  </div>
                  <div className='relative'>
                    <div className='absolute left-[-10px] top-[-5px] text-[#1B1E27] text-[32px]'>/</div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.matches.losses}</div>
                    <div className='text-[#8993A6] text-xs'>ПОРАЖЕНИ</div>
                  </div>
                  <div className="flex flex-row items-center py-1 px-3 border-l border-[#181C25]">
                    <img src={equal} className="w-[20px] h-[23px] mr-3" alt="" />
                    <div>
                      <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.matches.winrate}</div>
                      <div className='text-[#8993A6] text-xs'>ВИНРЕЙТ</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kills Row */}
              <div className='flex items-center px-4 py-[3px] border-t border-[#181C25]'>
                <div className='w-6 h-6 mr-4'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8333 19.8676L23.3333 24.5C22.6851 23.8518 21.5714 21.7507 22.3017 18.5316C23.2145 14.5076 24.9278 10.4611 18.5929 8.24036C16.3722 1.90557 12.3257 3.61872 8.30172 4.53159C5.08255 5.26188 2.98147 4.14815 2.33331 3.5L6.99998 14.0864" stroke="#8993A6" stroke-width="1.75" />
                    <path d="M5.83331 21H2.33331L5.83331 17.5H9.33331V21L5.83331 24.5V21Z" stroke="#8993A6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.33331 17.5L23.3333 3.5" stroke="#8993A6" stroke-width="1.75" stroke-linejoin="round" />
                    <path d="M19.8333 3.5H22.1666C22.7166 3.5 22.9916 3.5 23.1625 3.67086C23.3333 3.84171 23.3333 4.1167 23.3333 4.66667V7" stroke="#8993A6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div className='flex-1 grid grid-cols-4 text-center'>
                  <div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.kills.total}</div>
                    <div className='text-[#8993A6] text-xs'>УБИЙСТВ</div>
                  </div>
                  <div className='relative'>
                    <div className='absolute left-[-10px] top-[-5px] text-[#1B1E27] text-[32px]'>/</div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.kills.average}</div>
                    <div className='text-[#8993A6] text-xs'>СМЕРТЕЙ</div>
                  </div>
                  <div className='relative'>
                    <div className='absolute left-[-10px] top-[-5px] text-[#1B1E27] text-[32px]'>/</div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.kills.record}</div>
                    <div className='text-[#8993A6] text-xs'>ПОМОЩЬ</div>
                  </div>
                  <div className="flex flex-row items-center py-1 px-3 border-l border-[#181C25]">
                    <img src={equal} className="w-[20px] h-[23px] mr-3" alt="" />
                    <div>
                      <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.kills.kda}</div>
                      <div className='text-[#8993A6] text-xs'>~KDA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Average Row */}
              <div className='flex items-center px-4 py-[3px] border-t border-[#181C25]'>
                <div className='w-6 h-6 mr-4'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8333 19.8676L23.3333 24.5C22.6851 23.8518 21.5714 21.7507 22.3017 18.5316C23.2145 14.5076 24.9278 10.4611 18.5929 8.24036C16.3722 1.90557 12.3257 3.61872 8.30172 4.53159C5.08255 5.26188 2.98147 4.14815 2.33331 3.5L6.99998 14.0864" stroke="#8993A6" stroke-width="1.75" />
                    <path d="M5.83331 21H2.33331L5.83331 17.5H9.33331V21L5.83331 24.5V21Z" stroke="#8993A6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.33331 17.5L23.3333 3.5" stroke="#8993A6" stroke-width="1.75" stroke-linejoin="round" />
                    <path d="M19.8333 3.5H22.1666C22.7166 3.5 22.9916 3.5 23.1625 3.67086C23.3333 3.84171 23.3333 4.1167 23.3333 4.66667V7" stroke="#8993A6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div className='flex-1 grid grid-cols-4 text-center '>
                  <div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.assists.total}</div>
                    <div className='text-[#8993A6] text-xs'>~УБИЙСТВ</div>
                  </div>
                  <div className='relative'>
                    <div className='absolute left-[-10px] top-[-5px] text-[#1B1E27] text-[32px]'>/</div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.assists.average}</div>
                    <div className='text-[#8993A6] text-xs'>~СМЕРТЕЙ</div>
                  </div>
                  <div className='relative'>
                    <div className='absolute left-[-10px] top-[-5px] text-[#1B1E27] text-[32px]'>/</div>
                    <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.assists.record}</div>
                    <div className='text-[#8993A6] text-xs'>~ПОМОЩЬ</div>
                  </div>
                  <div className="flex flex-row items-center py-1 px-3 border-l border-[#181C25] ">
                    <img src={equal} className="w-[20px] h-[23px] mr-3" alt="" />
                    <div>
                      <div className='text-[#BCC3D0] text-[16px] font-[500]'>{gameStats.assists.kda}</div>
                      <div className='text-[#8993A6] text-xs'>~время</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Games */}
      <div className='mt-4 bg-[#12151B] border border-[#181C25] rounded-lg'>

        {/* Table Headers */}
        <div className='px-4 py-4 border-b border-[#181C25]'>
          <div className='grid grid-cols-[300px_1fr] gap-4'>
            <div className='text-[#9EA8BD] text-sm'>Последние игры</div>
            <div className='grid grid-cols-[160px_100px_120px_120px_80px_100px] items-center'>
              <div className='group relative'>
                <div className='text-[#8993A6] text-sm cursor-help'>Результат</div>
                <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                  <p className='text-[#D6E6FF] text-xs'>Результат вашей игры: победа, поражение или отмена</p>
                </div>
              </div>
              <div className='group relative'>
                <div className='text-[#8993A6] text-sm cursor-help'>Очки</div>
                <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                  <p className='text-[#D6E6FF] text-xs'>Количество очков, полученных за игру</p>
                </div>
              </div>
              <div className='group relative'>
                <div className='text-[#8993A6] text-sm cursor-help'>Роль</div>
                <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                  <p className='text-[#D6E6FF] text-xs'>Ваша роль в игре</p>
                </div>
              </div>
              <div className='group relative'>
                <div className='text-[#8993A6] text-sm cursor-help'>K/D/A</div>
                <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                  <p className='text-[#D6E6FF] text-xs'>Убийства/Смерти/Помощь в игре</p>
                </div>
              </div>
              <div className='group relative'>
                <div className='text-[#8993A6] text-sm cursor-help'>Мод</div>
                <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                  <p className='text-[#D6E6FF] text-xs'>Режим игры</p>
                </div>
              </div>
              <div className='group relative'>
                <div className='text-[#8993A6] text-sm text-right cursor-help'>Время</div>
                <div className='absolute right-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                  <p className='text-[#D6E6FF] text-xs'>Продолжительность игры</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className='p-2'>
          {recentGames.map((game, index) => (
            <Link key={index} to={`/matches/${game.id}`}>
              <div className='grid grid-cols-[300px_1fr] gap-4 items-center hover:bg-[#0B0D10] rounded-lg p-3 my-1 py-2 cursor-pointer border-b border-[#181C25] group'>
                {/* Hero */}
                <div className='flex items-center gap-3'>
                  <div className='relative w-[70px] h-[50px] rounded-lg overflow-hidden'>
                    <div
                      className='absolute inset-0 blur-sm opacity-50'
                      style={{
                        backgroundImage: `url(${avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className='relative z-10 w-full h-full flex items-center justify-center'>
                      <img
                        src={avatar}
                        alt={game.hero}
                        className='w-10 h-10 rounded-lg'
                      />
                    </div>
                  </div>
                  <span className='text-[#BCC3D0]'>{game.hero}</span>
                </div>

                {/* Game Details */}
                <div className='grid grid-cols-[160px_100px_120px_120px_80px_100px] items-center'>
                  {/* Result */}
                  <div>
                    <div className={`text-xs px-2 py-1 rounded-md inline-block ${game.result === 'ПОБЕДА'
                      ? 'text-[#20C867] bg-[#142218] border border-[#193D22]'
                      : game.result === 'ПОРАЖЕНИЕ'
                        ? 'text-[#F23B3B] bg-[#261314] border border-[#3D1F22]'
                        : 'text-[#8993A6] bg-[#181C25] border border-[#262C3B]'
                      }`}>
                      {game.result}
                    </div>
                  </div>

                  {/* Points */}
                  <div className={`text-sm ${game.points.includes('+') ? 'text-[#20C867]' : 'text-[#F23B3B]'}`}>
                    {game.points} pts
                  </div>

                  {/* Role */}
                  <div className='flex items-center gap-2'>
                    <img src={rank} alt={game.role} className='w-4 h-4' />
                    <span className='text-[#8993A6]'>{game.role}</span>
                  </div>

                  {/* KDA */}
                  <div className='text-[#8993A6] whitespace-nowrap'>
                    <span className='text-[#20C867]'>52</span>
                    <span className='text-[#8993A6]'> / </span>
                    <span className='text-[#F23B3B]'>9</span>
                    <span className='text-[#8993A6]'> / </span>
                    <span className='text-[#3B88F2]'>21</span>
                  </div>

                  {/* Mode */}
                  <div>
                    <div className='text-[#8993A6]'>{game.match}</div>
                    <div className='text-[#3B3F47] text-xs'>6.85</div>
                  </div>

                  {/* Time */}
                  <div className='text-right'>
                    <div className='text-[#8993A6]'>{game.time}</div>
                    <div className='text-[#3B3F47] text-xs'>5 ЧАСОВ НАЗАД</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button className='w-full my-4 border border-[#333A49] bg-gradient-to-t from-[#1B1F27] to-[#232833] hover:from-[#232833] hover:to-[#1B1F27] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'>
        Просмотреть все игры
      </button>

      {/* Popular Heroes */}
      <div className='mt-4 bg-[#12151B] border border-[#181C25] rounded-lg'>
        {/* Headers */}
        <div className='px-4 py-4 border-b border-[#181C25]'>
          <div className='grid grid-cols-[300px_100px_150px_150px_100px_1fr] gap-4 items-center'>
            <div className='text-[#9EA8BD] text-sm'>Самые популярные герои</div>
            <div className='group relative'>
              <div className='text-[#8993A6] text-sm cursor-help'>Игры</div>
              <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                <p className='text-[#D6E6FF] text-xs'>Общее количество игр на герое</p>
              </div>
            </div>
            <div className='group relative'>
              <div className='text-[#8993A6] text-sm cursor-help'>Пикрейт</div>
              <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                <p className='text-[#D6E6FF] text-xs'>Частота выбора героя в процентах</p>
              </div>
            </div>
            <div className='group relative'>
              <div className='text-[#8993A6] text-sm cursor-help'>Винрейт</div>
              <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                <p className='text-[#D6E6FF] text-xs'>Процент побед на данном герое</p>
              </div>
            </div>
            <div className='group relative'>
              <div className='text-[#8993A6] text-sm cursor-help'>~KDA</div>
              <div className='absolute left-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                <p className='text-[#D6E6FF] text-xs'>Среднее соотношение убийств/смертей/помощи</p>
              </div>
            </div>
            <div className='group relative'>
              <div className='text-[#8993A6] text-sm text-right cursor-help'>Последняя игра</div>
              <div className='absolute right-0 top-full mt-2 p-2 bg-[#1E2530] border border-[#2C3444] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-48'>
                <p className='text-[#D6E6FF] text-xs'>Время последней игры на герое</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='p-2'>
          {popularHeroes.map((hero, index) => (
            <Link key={index} to={`/matches/${hero.lastMatchId}`}>
              <div className='grid grid-cols-[300px_100px_150px_150px_100px_1fr] gap-4 items-center cursor-pointer hover:bg-[#0B0D10] rounded-lg p-3 mb-2 border-b border-[#181C25]'>
                {/* Hero */}
                <div className='flex items-center gap-3'>
                  <div className='relative w-[70px] h-[50px] rounded-lg overflow-hidden'>
                    <div
                      className='absolute inset-0 blur-sm opacity-50'
                      style={{
                        backgroundImage: `url(${avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className='relative z-10 w-full h-full flex items-center justify-center'>
                      <img src={avatar} alt={hero.hero} className='w-10 h-10 rounded-lg' />
                    </div>
                  </div>
                  <span className='text-[#BCC3D0]'>{hero.hero}</span>
                </div>

                {/* Games */}
                <div className='text-[#8993A6]'>{hero.matches}</div>

                {/* Pickrate */}
                <div className='flex flex-col gap-1'>
                  <div className='text-[#8993A6] text-center w-full'>{hero.pickrate}%</div>
                  <div className='h-1.5 w-full bg-[#181C25] rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-[#3B88F2] rounded-full'
                      style={{ width: `${hero.pickrate}%` }}
                    />
                  </div>
                </div>

                {/* Winrate */}
                <div className='flex flex-col gap-1'>
                  <div className='text-[#8993A6] text-center w-full'>{hero.winrate}%</div>
                  <div className='h-1.5 w-full bg-[#181C25] rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-[#20C867] rounded-full'
                      style={{ width: `${hero.winrate}%` }}
                    />
                  </div>
                </div>

                {/* KDA */}
                <div className='text-[#8993A6]'>{hero.kda}</div>

                {/* Last Played */}
                <div className='text-[#8993A6] text-sm text-right'>{hero.lastPlayed}</div>
              </div>
            </Link>
          ))}
        </div>

      </div>
      {/* View All Heroes Button */}
      <button className='w-full my-4 border border-[#333A49] bg-gradient-to-t from-[#1B1F27] to-[#232833] hover:from-[#232833] hover:to-[#1B1F27] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'>
        Просмотреть всех героев
      </button>

      {/* Stats Grid */}
      <div className='grid grid-cols-2 gap-4'>
        {/* Left Column */}
        <div className='bg-[#12151B] border border-[#181C25] rounded-lg p-4'>
          <h3 className='text-[#8993A6] text-sm border-b border-[#181C25] pb-3'>Разное статистика</h3>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8.625H9.00675" stroke="#8993A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.375 8.625C12.375 10.0747 10.864 11.25 9 11.25C7.13604 11.25 5.625 10.0747 5.625 8.625C5.625 7.17525 7.13604 6 9 6C10.864 6 12.375 7.17525 12.375 8.625Z" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M10.5 13.5C10.1135 13.732 9.58402 13.875 9 13.875C8.41598 13.875 7.88655 13.732 7.5 13.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M9 3C5.47919 3 2.625 5.85419 2.625 9.375C2.625 10.9314 3.18274 12.3575 4.10924 13.4644C4.55233 13.9937 4.875 14.6336 4.875 15.3239C4.875 15.9734 5.40155 16.5 6.05109 16.5H11.9489C12.5984 16.5 13.125 15.9734 13.125 15.3239C13.125 14.6336 13.4476 13.9937 13.8907 13.4644C14.8173 12.3575 15.375 10.9314 15.375 9.375C15.375 5.85419 12.5208 3 9 3Z" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M12 3.75C12.125 3.075 12.75 1.68 14.25 1.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M6 3.75C5.875 3.075 5.25 1.68 3.75 1.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                </svg>
                Покинутие игры
              </div>
              <span className='text-[#BCC3D0]'>20</span>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.40325 11.3203C2.16585 6.45725 4.49709 3.42233 9.00023 1.5C13.5035 3.42233 15.8341 6.45725 14.5967 11.3203C14.507 11.6728 14.5181 12.0472 14.6502 12.3855L15.6821 15.0285C16.0836 16.0568 14.5998 16.3013 13.9689 16.4341C12.233 16.7993 10.5501 15.6079 10.2697 13.8152C10.0718 12.5496 10.7875 12.3419 11.7229 11.8628C11.7229 11.8628 12.89 11.4641 12.89 10.2685C12.89 9.38798 12.1934 8.6742 11.3339 8.6742C10.7957 8.6742 10.3216 8.8305 9.85125 9.33878C9.3954 9.83145 9.16755 10.0778 9.0003 10.0778C8.83305 10.0778 8.60505 9.83145 8.1492 9.33885C7.67865 8.8305 7.20428 8.6742 6.6661 8.6742C5.80668 8.6742 5.10999 9.38798 5.10999 10.2685C5.10999 11.4641 6.27707 11.8628 6.27707 11.8628C7.21256 12.3419 7.92818 12.5496 7.73025 13.8152C7.44986 15.6079 5.76705 16.7993 4.03113 16.4341C3.40021 16.3013 1.91641 16.0568 2.31788 15.0285L3.34977 12.3855C3.48185 12.0472 3.49297 11.6728 3.40325 11.3203Z" stroke="#8993A6" stroke-width="1.125" stroke-linejoin="round" />
                  <path d="M7.5 15H10.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.99985 6H9.0066" stroke="#8993A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Максимум стрик побед
              </div>
              <span className='text-[#BCC3D0]'>127</span>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.40325 11.3203C2.16585 6.45725 4.49709 3.42233 9.00023 1.5C13.5035 3.42233 15.8341 6.45725 14.5967 11.3203C14.507 11.6728 14.5181 12.0472 14.6502 12.3855L15.6821 15.0285C16.0836 16.0568 14.5998 16.3013 13.9689 16.4341C12.233 16.7993 10.5501 15.6079 10.2697 13.8152C10.0718 12.5496 10.7875 12.3419 11.7229 11.8628C11.7229 11.8628 12.89 11.4641 12.89 10.2685C12.89 9.38798 12.1934 8.6742 11.3339 8.6742C10.7957 8.6742 10.3216 8.8305 9.85125 9.33878C9.3954 9.83145 9.16755 10.0778 9.0003 10.0778C8.83305 10.0778 8.60505 9.83145 8.1492 9.33885C7.67865 8.8305 7.20428 8.6742 6.6661 8.6742C5.80668 8.6742 5.10999 9.38798 5.10999 10.2685C5.10999 11.4641 6.27707 11.8628 6.27707 11.8628C7.21256 12.3419 7.92818 12.5496 7.73025 13.8152C7.44986 15.6079 5.76705 16.7993 4.03113 16.4341C3.40021 16.3013 1.91641 16.0568 2.31788 15.0285L3.34977 12.3855C3.48185 12.0472 3.49297 11.6728 3.40325 11.3203Z" stroke="#8993A6" stroke-width="1.125" stroke-linejoin="round" />
                  <path d="M7.5 15H10.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.99985 6H9.0066" stroke="#8993A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Текущий стрик побед
              </div>
              <span className='text-[#BCC3D0]'>127</span>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.40325 11.3203C2.16585 6.45725 4.49709 3.42233 9.00023 1.5C13.5035 3.42233 15.8341 6.45725 14.5967 11.3203C14.507 11.6728 14.5181 12.0472 14.6502 12.3855L15.6821 15.0285C16.0836 16.0568 14.5998 16.3013 13.9689 16.4341C12.233 16.7993 10.5501 15.6079 10.2697 13.8152C10.0718 12.5496 10.7875 12.3419 11.7229 11.8628C11.7229 11.8628 12.89 11.4641 12.89 10.2685C12.89 9.38798 12.1934 8.6742 11.3339 8.6742C10.7957 8.6742 10.3216 8.8305 9.85125 9.33878C9.3954 9.83145 9.16755 10.0778 9.0003 10.0778C8.83305 10.0778 8.60505 9.83145 8.1492 9.33885C7.67865 8.8305 7.20428 8.6742 6.6661 8.6742C5.80668 8.6742 5.10999 9.38798 5.10999 10.2685C5.10999 11.4641 6.27707 11.8628 6.27707 11.8628C7.21256 12.3419 7.92818 12.5496 7.73025 13.8152C7.44986 15.6079 5.76705 16.7993 4.03113 16.4341C3.40021 16.3013 1.91641 16.0568 2.31788 15.0285L3.34977 12.3855C3.48185 12.0472 3.49297 11.6728 3.40325 11.3203Z" stroke="#8993A6" stroke-width="1.125" stroke-linejoin="round" />
                  <path d="M7.5 15H10.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.99985 6H9.0066" stroke="#8993A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Лучший счёт
              </div>
              <div className='flex items-center gap-2'>
                <img src={avatar} alt="Pudge" className='w-6 h-6 rounded' />
                <span className='text-[#BCC3D0]'>Pudge</span>
                <div className="flex items-center ml-2 gap-1">
                  <span className='text-[#20C867]'>52</span>
                  <span className='text-[#475065]'>/</span>
                  <span className='text-[#FE3030]'>9</span>
                  <span className='text-[#475065]'>/</span>
                  <span className='text-[#3B88F2]'>21</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8.625H9.00675" stroke="#8993A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.375 8.625C12.375 10.0747 10.864 11.25 9 11.25C7.13604 11.25 5.625 10.0747 5.625 8.625C5.625 7.17525 7.13604 6 9 6C10.864 6 12.375 7.17525 12.375 8.625Z" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M10.5 13.5C10.1135 13.732 9.58402 13.875 9 13.875C8.41598 13.875 7.88655 13.732 7.5 13.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M9 3C5.47919 3 2.625 5.85419 2.625 9.375C2.625 10.9314 3.18274 12.3575 4.10924 13.4644C4.55233 13.9937 4.875 14.6336 4.875 15.3239C4.875 15.9734 5.40155 16.5 6.05109 16.5H11.9489C12.5984 16.5 13.125 15.9734 13.125 15.3239C13.125 14.6336 13.4476 13.9937 13.8907 13.4644C14.8173 12.3575 15.375 10.9314 15.375 9.375C15.375 5.85419 12.5208 3 9 3Z" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M12 3.75C12.125 3.075 12.75 1.68 14.25 1.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                  <path d="M6 3.75C5.875 3.075 5.25 1.68 3.75 1.5" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" />
                </svg>
                Нейтралов убито
              </div>
              <span className='text-[#BCC3D0]'>984</span>
            </div>
          </div>
          <div className="">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 11.8834L5.01431 14.3692C5.59318 14.7817 5.67115 15.6491 5.16413 16.1562C4.70569 16.6146 3.96242 16.6146 3.50398 16.1562C3.14256 15.7948 3.01884 15.209 3.22729 14.7727C2.79094 14.9812 2.20525 14.8574 1.84383 14.496C1.38539 14.0376 1.38539 13.2943 1.84383 12.8359C2.35085 12.3289 3.21831 12.4068 3.63085 12.9856L6.11653 10.5" stroke="#8993A6" stroke-width="1.125" stroke-linejoin="round" />
                  <path d="M9.4026 2.76142C11.1534 1.01063 13.6271 1.14986 15.2386 2.76142C16.5248 4.04756 16.8731 5.88278 16.0714 7.46144C14.74 5.69651 11.7434 7.04872 12.3041 9.26693C11.0679 8.75228 10.007 10.3415 10.8585 11.2974C9.07365 12.0239 7.29787 12.3286 6.48464 11.5154C4.87307 9.90383 7.6518 4.51221 9.4026 2.76142Z" stroke="#8993A6" stroke-width="1.125" stroke-linejoin="round" />
                </svg>
                Курьеров убито
              </div>
              <span className='text-[#BCC3D0]'>2165</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='bg-[#12151B] border border-[#181C25] rounded-lg p-4'>
          <h3 className='text-[#8993A6] text-sm border-b border-[#181C25] pb-3'>Разное статистика</h3>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.158 8.28375C16.386 8.60348 16.5 8.76338 16.5 9C16.5 9.23662 16.386 9.39652 16.158 9.71625C15.1334 11.1529 12.5169 14.25 9 14.25C5.48309 14.25 2.86657 11.1529 1.84203 9.71625C1.61401 9.39652 1.5 9.23662 1.5 9C1.5 8.76338 1.61401 8.60348 1.84203 8.28375C2.86657 6.84708 5.48309 3.75 9 3.75C12.5169 3.75 15.1334 6.84708 16.158 8.28375Z" stroke="#8993A6" stroke-width="1.125" />
                  <path d="M11.25 9C11.25 7.75732 10.2427 6.75 9 6.75C7.75732 6.75 6.75 7.75732 6.75 9C6.75 10.2427 7.75732 11.25 9 11.25C10.2427 11.25 11.25 10.2427 11.25 9Z" stroke="#8993A6" stroke-width="1.125" />
                </svg>
                Варды
              </div>
              <div className='flex items-center gap-2'>
                <div className="flex items-center gap-1">
                  <img src={wards1} alt="Pudge" className='w-6 h-6 rounded' />
                  <span className='text-[#D29F41]'>546</span>
                </div>
                <span className='text-[#475065] text-md font-bold'>/</span>
                <div className="flex items-center gap-1">
                  <img src={wards2} alt="Pudge" className='w-6 h-6 rounded' />
                  <span className='text-[#6A90C3]'>684</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.98988 7.11842L4.25784 5.63479C3.11549 4.65215 3.11167 3.2261 2.98975 2.26465C4.2395 2.32396 5.20756 2.4371 6.05059 3.14923L6.93249 4.15117L7.88685 5.22267M14.593 13.8136L12.3694 11.5637M10.5161 13.8136C10.5331 13.6094 10.6667 13.0801 11.2806 12.5129C11.8313 12.0041 13.0257 10.7846 13.5624 10.2557C13.8664 9.95618 14.3649 9.74603 14.593 9.7464M11.6762 9.60608L12.6787 10.7152M10.2572 10.8272L11.3779 11.8124M15.3462 13.4852C15.969 13.4864 16.5008 13.9464 16.4996 14.5688C16.4984 15.1912 15.969 15.7369 15.3462 15.7358C14.7234 15.7346 14.2431 15.1869 14.2443 14.5646C14.2845 13.9452 14.7426 13.5685 15.3462 13.4852Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.44695 13.7947L5.66543 11.6255M3.42118 9.74032C3.62552 9.7569 4.19518 9.89332 4.7055 10.5308C5.17404 11.116 6.43778 12.2479 6.96797 12.7832C7.26827 13.0865 7.47829 13.5668 7.47829 13.7947M5.44838 10.6724L11.6276 3.49809C12.6332 2.376 14.0384 2.35148 15.0027 2.24854C14.9189 3.49606 14.7866 4.46107 14.0576 5.2894L6.4122 11.9447M3.75464 14.6241C3.75464 15.2464 3.24976 15.751 2.62695 15.751C2.00415 15.751 1.49927 15.2464 1.49927 14.6241C1.49927 14.0017 2.00415 13.4971 2.62695 13.4971C3.24976 13.4971 3.75464 14.0017 3.75464 14.6241Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Double kills
              </div>
              <span className='text-[#BCC3D0]'>-</span>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.98988 7.11842L4.25784 5.63479C3.11549 4.65215 3.11167 3.2261 2.98975 2.26465C4.2395 2.32396 5.20756 2.4371 6.05059 3.14923L6.93249 4.15117L7.88685 5.22267M14.593 13.8136L12.3694 11.5637M10.5161 13.8136C10.5331 13.6094 10.6667 13.0801 11.2806 12.5129C11.8313 12.0041 13.0257 10.7846 13.5624 10.2557C13.8664 9.95618 14.3649 9.74603 14.593 9.7464M11.6762 9.60608L12.6787 10.7152M10.2572 10.8272L11.3779 11.8124M15.3462 13.4852C15.969 13.4864 16.5008 13.9464 16.4996 14.5688C16.4984 15.1912 15.969 15.7369 15.3462 15.7358C14.7234 15.7346 14.2431 15.1869 14.2443 14.5646C14.2845 13.9452 14.7426 13.5685 15.3462 13.4852Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.44695 13.7947L5.66543 11.6255M3.42118 9.74032C3.62552 9.7569 4.19518 9.89332 4.7055 10.5308C5.17404 11.116 6.43778 12.2479 6.96797 12.7832C7.26827 13.0865 7.47829 13.5668 7.47829 13.7947M5.44838 10.6724L11.6276 3.49809C12.6332 2.376 14.0384 2.35148 15.0027 2.24854C14.9189 3.49606 14.7866 4.46107 14.0576 5.2894L6.4122 11.9447M3.75464 14.6241C3.75464 15.2464 3.24976 15.751 2.62695 15.751C2.00415 15.751 1.49927 15.2464 1.49927 14.6241C1.49927 14.0017 2.00415 13.4971 2.62695 13.4971C3.24976 13.4971 3.75464 14.0017 3.75464 14.6241Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Triple kills
              </div>
              <span className='text-[#BCC3D0]'>-</span>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.98988 7.11842L4.25784 5.63479C3.11549 4.65215 3.11167 3.2261 2.98975 2.26465C4.2395 2.32396 5.20756 2.4371 6.05059 3.14923L6.93249 4.15117L7.88685 5.22267M14.593 13.8136L12.3694 11.5637M10.5161 13.8136C10.5331 13.6094 10.6667 13.0801 11.2806 12.5129C11.8313 12.0041 13.0257 10.7846 13.5624 10.2557C13.8664 9.95618 14.3649 9.74603 14.593 9.7464M11.6762 9.60608L12.6787 10.7152M10.2572 10.8272L11.3779 11.8124M15.3462 13.4852C15.969 13.4864 16.5008 13.9464 16.4996 14.5688C16.4984 15.1912 15.969 15.7369 15.3462 15.7358C14.7234 15.7346 14.2431 15.1869 14.2443 14.5646C14.2845 13.9452 14.7426 13.5685 15.3462 13.4852Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.44695 13.7947L5.66543 11.6255M3.42118 9.74032C3.62552 9.7569 4.19518 9.89332 4.7055 10.5308C5.17404 11.116 6.43778 12.2479 6.96797 12.7832C7.26827 13.0865 7.47829 13.5668 7.47829 13.7947M5.44838 10.6724L11.6276 3.49809C12.6332 2.376 14.0384 2.35148 15.0027 2.24854C14.9189 3.49606 14.7866 4.46107 14.0576 5.2894L6.4122 11.9447M3.75464 14.6241C3.75464 15.2464 3.24976 15.751 2.62695 15.751C2.00415 15.751 1.49927 15.2464 1.49927 14.6241C1.49927 14.0017 2.00415 13.4971 2.62695 13.4971C3.24976 13.4971 3.75464 14.0017 3.75464 14.6241Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Ultra kills
              </div>
              <span className='text-[#BCC3D0]'>-</span>
            </div>
          </div>
          <div className="border-b border-[#181C25]">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.98988 7.11842L4.25784 5.63479C3.11549 4.65215 3.11167 3.2261 2.98975 2.26465C4.2395 2.32396 5.20756 2.4371 6.05059 3.14923L6.93249 4.15117L7.88685 5.22267M14.593 13.8136L12.3694 11.5637M10.5161 13.8136C10.5331 13.6094 10.6667 13.0801 11.2806 12.5129C11.8313 12.0041 13.0257 10.7846 13.5624 10.2557C13.8664 9.95618 14.3649 9.74603 14.593 9.7464M11.6762 9.60608L12.6787 10.7152M10.2572 10.8272L11.3779 11.8124M15.3462 13.4852C15.969 13.4864 16.5008 13.9464 16.4996 14.5688C16.4984 15.1912 15.969 15.7369 15.3462 15.7358C14.7234 15.7346 14.2431 15.1869 14.2443 14.5646C14.2845 13.9452 14.7426 13.5685 15.3462 13.4852Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.44695 13.7947L5.66543 11.6255M3.42118 9.74032C3.62552 9.7569 4.19518 9.89332 4.7055 10.5308C5.17404 11.116 6.43778 12.2479 6.96797 12.7832C7.26827 13.0865 7.47829 13.5668 7.47829 13.7947M5.44838 10.6724L11.6276 3.49809C12.6332 2.376 14.0384 2.35148 15.0027 2.24854C14.9189 3.49606 14.7866 4.46107 14.0576 5.2894L6.4122 11.9447M3.75464 14.6241C3.75464 15.2464 3.24976 15.751 2.62695 15.751C2.00415 15.751 1.49927 15.2464 1.49927 14.6241C1.49927 14.0017 2.00415 13.4971 2.62695 13.4971C3.24976 13.4971 3.75464 14.0017 3.75464 14.6241Z" stroke="#8993A6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Rampages
              </div>
              <span className='text-[#BCC3D0]'>56</span>
            </div>
          </div>
          <div className="">
            <div className='flex items-center justify-between py-3'>
              <div className='flex items-center gap-2 text-[#8993A6]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.214 6.45481L16.0965 6.3402C14.7471 2.77846 10.8727 0.749814 7.09525 1.75844C3.07193 2.83271 0.682164 6.94568 1.75754 10.945C2.83293 14.9444 6.96623 17.3156 10.9896 16.2413C13.9768 15.4437 16.0635 12.9709 16.5 10.1132" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 5.99988V8.99986L10.5 10.4999" stroke="#8993A6" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Налетанные часы
              </div>
              <span className='text-[#BCC3D0]'>56</span>
            </div>
          </div>
        </div>

        {/* Game Modes */}
        <div className='bg-[#12151B] border border-[#181C25] rounded-lg p-4'>
          <h3 className='text-[#8993A6] text-sm mb-4'>Игровые моды</h3>
          <div className='space-y-3'>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='text-[#BCC3D0] font-medium'>APTB</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#3B88F2] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='text-[#BCC3D0] font-medium'>AP</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#F23B3B] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='text-[#BCC3D0] font-medium'>XLTB</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#9747FF] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='text-[#BCC3D0] font-medium'>XL</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#F23B3B] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='text-[#BCC3D0] font-medium'>SD</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#20C867] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='text-[#BCC3D0] font-medium'>AR</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#F2B93B] rounded-full'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div className='bg-[#12151B] border border-[#181C25] rounded-lg p-4'>
          <h3 className='text-[#8993A6] text-sm mb-4'>Роль</h3>
          <div className='space-y-3'>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="28" height="28" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_927_1064" transform="scale(0.0208333)" />
                      </pattern>
                      <image id="image0_927_1064" width="48" height="48" xlink:href="https://s3-alpha-sig.figma.com/img/f6eb/9710/36db8e74fd196f2af1c4ab0d6882c479?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPTOfrqUXgisGkYKOp7fLp00FgU8hju9ZJpbO9bbijy9r4zroT~oduc9na1AoGtfsj6fKOnUs3SdpsL-5r0lYD2kZXl0TGvBdRHqLdUYCbn0djEYT3bieMvaKT7EFI5BWZMOIlhygbxhG68dhxR4HxPR4WEfFeU1ULTGMHVys1sSJWbmGL2UyHfRXLDgQshp9CLYh9jjfEJbYGEtC8tBJh1h4MtNT5wggIo-Y-Zk1IntV9G7QSMdSz7l9XUB2pAKAJoVYaTJki6kGIPOX9sC8INKmtTV0nE~8vuavRCab1v8zH~fkMyY3e3vWCMAOhVNf35fQlpe-VsNXahqq~f1mw__" />
                    </defs>
                  </svg>
                  <span className='text-[#BCC3D0] font-medium'>Mider</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#F23B3B] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L2.66667 6V14H13.3333V6L8 2Z" stroke="#3B88F2" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span className='text-[#BCC3D0] font-medium'>Safeliner</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#3B88F2] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L2.66667 6V14H13.3333V6L8 2Z" stroke="#F2B93B" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span className='text-[#BCC3D0] font-medium'>Hardliner</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#F2B93B] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L2.66667 6V14H13.3333V6L8 2Z" stroke="#8993A6" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span className='text-[#BCC3D0] font-medium'>Roamer</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#8993A6] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L2.66667 6V14H13.3333V6L8 2Z" stroke="#F23B3B" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span className='text-[#BCC3D0] font-medium'>Pos 4</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#F23B3B] rounded-full'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-[#8993A6] text-sm'>
                <div className='flex items-center gap-2'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L2.66667 6V14H13.3333V6L8 2Z" stroke="#20C867" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span className='text-[#BCC3D0] font-medium'>Pos 5</span>
                </div>
                <span className='text-[#BCC3D0]'>68%</span>
              </div>
              <div className='h-1.5 bg-[#181C25] rounded-full overflow-hidden'>
                <div className='h-full w-[68%] bg-[#20C867] rounded-full'></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
        {/* Top Geroylar */}
        <div className='bg-[#12151B] border border-[#181C25] rounded-lg p-4'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-[#8993A6] text-base'>Игровые достижения</h3>
            <span className='text-[#8993A6] text-sm cursor-pointer hover:text-white transition-colors'>Все</span>
          </div>

          <div className='space-y-6'>
            <div className='grid grid-cols-2 gap-2'>
              {/* Eng yaxshi qahramon */}
              <div className="p-3 border border-[#181C25] rounded">
                <h4 className='text-[#8993A6] mb-2'>Лучший герой</h4>
                <div className='flex items-center gap-2'>
                  <img src={avatar} alt="Hero" className='w-10 h-10 rounded' />
                  <div>
                    <div className='text-[#BCC3D0] font-medium text-sm'>Murloc Nightcrawler</div>
                    <div className='text-[#8993A6] text-[10px] w-[100%]'>КОЭФФИЦИЕНТ СКИЛЛА: <span className='text-[#BCC3D0]'>9.33</span></div>
                  </div>
                </div>
              </div>

              {/* O'ldirishlar bo'yicha eng yaxshisi */}
              <div className="p-3 border border-[#181C25] rounded">
                <h4 className='text-[#8993A6] mb-2'>Лучший по убийствам</h4>
                <div className='flex items-center gap-2'>
                  <img src={avatar} alt="Hero" className='w-10 h-10 rounded' />
                  <div>
                    <div className='text-[#BCC3D0] font-medium text-sm'>Murloc Nightcrawler</div>
                    <div className='text-[#8993A6] text-[10px] w-[100%]'>СРЕДНЕЕ ЗНАЧЕНИЕ УБИЙСТВ: <span className='text-[#BCC3D0]'>25</span></div>
                  </div>
                </div>
              </div>

              {/* Assistlar bo'yicha eng yaxshisi */}
              <div className="p-3 border border-[#181C25] rounded">
                <h4 className='text-[#8993A6] mb-2'>Лучший по ассистам</h4>
                <div className='flex items-center gap-2'>
                  <img src={avatar} alt="Hero" className='w-10 h-10 rounded' />
                  <div>
                    <div className='text-[#BCC3D0] font-medium text-sm'>Murloc Nightcrawler</div>
                    <div className='text-[#8993A6] text-[10px] w-[100%]'>СРЕДНЕЕ ЗНАЧЕНИЕ АССИСТОВ: <span className='text-[#BCC3D0]'>28</span></div>
                  </div>
                </div>
              </div>

              {/* Eng uzoq o'yin */}
              <div className="p-3 border border-[#181C25] rounded">
                <h4 className='text-[#8993A6] mb-2'>Самая долгая игра</h4>
                <div className='flex items-center gap-2'>
                  <img src={avatar} alt="Hero" className='w-10 h-10 rounded' />
                  <div>
                    <div className='text-[#BCC3D0] font-medium text-sm'>Murloc Nightcrawler</div>
                    <div className='text-[#8993A6] text-[10px] w-[100%]'>ПРОДОЛЖИТЕЛЬНОСТЬ ИГРЫ: <span className='text-[#BCC3D0]'>67:13</span></div>
                  </div>
                </div>
              </div>

              {/* Eng yaxshi fermer */}
              <div className="p-3 border border-[#181C25] rounded">
                <h4 className='text-[#8993A6] mb-2'>Лучший фармер</h4>
                <div className='flex items-center gap-2'>
                  <img src={avatar} alt="Hero" className='w-10 h-10 rounded' />
                  <div>
                    <div className='text-[#BCC3D0] font-medium text-sm'>Murloc Nightcrawler</div>
                    <div className='text-[#8993A6] text-[10px] w-[100%]'>КРИПОВ НАФАРМИЛ: <span className='text-[#BCC3D0]'>897</span></div>
                  </div>
                </div>
              </div>

              {/* Eng yaxshi pusher */}
              <div className="p-3 border border-[#181C25] rounded">
                <h4 className='text-[#8993A6] mb-2'>Лучший пушер</h4>
                <div className='flex items-center gap-2'>
                  <img src={avatar} alt="Hero" className='w-10 h-10 rounded' />
                  <div>
                    <div className='text-[#BCC3D0] font-medium text-sm'>Murloc Nightcrawler</div>
                    <div className='text-[#8993A6] text-[10px] w-[100%]'>ПУШЕК СНЕСЕНО: <span className='text-[#BCC3D0]'>12</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* O'yin yutuqlari */}
        <div className='bg-[#12151B] border border-[#181C25] rounded-lg p-4'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-[#8993A6] text-base'>Игровые достижения</h3>
            <span className='text-[#8993A6] text-sm cursor-pointer hover:text-white transition-colors'>Все</span>
          </div>

          <div className='space-y-5'>
            {/* Tirik qolgan */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded bg-[#181C25] flex items-center justify-center'>
                  <img src={crownImg} alt="Achievement" className='w-8 h-8' />
                </div>
                <div>
                  <div className='text-[#F2B93B] font-medium text-sm'>Выживший</div>
                  <div className='text-[#8993A6] text-xs'>Выжит с 1 показателем здоровья</div>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-[#8993A6] text-xs'>ЭТО ДОСТИЖЕНИЕ ЕСТЬ У</div>
                <div className='text-[#BCC3D0] text-sm'>2% игроков</div>
              </div>
            </div>

            {/* Qotillik */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded bg-[#181C25] flex items-center justify-center'>
                  <img src={butterflyImg} alt="Achievement" className='w-8 h-8' />
                </div>
                <div>
                  <div className='text-[#F23B3B] font-medium text-sm'>Буйство</div>
                  <div className='text-[#8993A6] text-xs'>Сделать 2x rampage</div>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-[#8993A6] text-xs'>ЭТО ДОСТИЖЕНИЕ ЕСТЬ У</div>
                <div className='text-[#BCC3D0] text-sm'>2% игроков</div>
              </div>
            </div>

            {/* Birinchi qon */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded bg-[#181C25] flex items-center justify-center'>
                  <img src={killerImg} alt="Achievement" className='w-8 h-8' />
                </div>
                <div>
                  <div className='text-[#BCC3D0] font-medium text-sm'>Наживка</div>
                  <div className='text-[#8993A6] text-xs'>Отдать первую кровь противникам</div>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-[#8993A6] text-xs'>ЭТО ДОСТИЖЕНИЕ ЕСТЬ У</div>
                <div className='text-[#BCC3D0] text-sm'>2% игроков</div>
              </div>
            </div>

            {/* Mana */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded bg-[#181C25] flex items-center justify-center'>
                  <img src={supportImg} alt="Achievement" className='w-8 h-8' />
                </div>
                <div>
                  <div className='text-[#BCC3D0] font-medium text-sm'>Маны много не будеть</div>
                  <div className='text-[#8993A6] text-xs'>Пополнить ману союзников на 25 000</div>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-[#8993A6] text-xs'>ЭТО ДОСТИЖЕНИЕ ЕСТЬ У</div>
                <div className='text-[#BCC3D0] text-sm'>2% игроков</div>
              </div>
            </div>

            {/* Serial g'alaba */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded bg-[#181C25] flex items-center justify-center'>
                  <img src={crownImg} alt="Achievement" className='w-8 h-8' />
                </div>
                <div>
                  <div className='text-[#3B88F2] font-medium text-sm'>Серийный победитель</div>
                  <div className='text-[#8993A6] text-xs'>Победит 10 раз подряд</div>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-[#8993A6] text-xs'>ЭТО ДОСТИЖЕНИЕ ЕСТЬ У</div>
                <div className='text-[#BCC3D0] text-sm'>2% игроков</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
