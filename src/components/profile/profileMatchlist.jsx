import React from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from "../../img/avatar.png";
import miderIcon from "../../img/5+.png";
import hardlinerIcon from "../../img/icon.png";
import safelinerIcon from "../../img/bronze.png";

const MatchList = () => {
  const navigate = useNavigate();
  
  // Sample data - replace with actual data from your API
  const matches = [
    {
      id: '1234',
      hero: 'Pudge',
      result: 'ПОБЕДА',
      points: '+160 pts',
      role: 'Mider',
      kda: {
        kills: 52,
        deaths: 9,
        assists: 21
      },
      mode: {
        name: 'XLTB',
        rating: '6.85'
      },
      time: '38:24',
      timeAgo: '5 ЧАСОВ НАЗАД'
    },
    {
      id: '5678',
      hero: 'Abadon',
      result: 'ПОРАЖЕНИЕ',
      points: '-160 pts',
      role: 'Hardliner',
      kda: {
        kills: 52,
        deaths: 9,
        assists: 21
      },
      mode: {
        name: 'XLTB',
        rating: '6.85'
      },
      time: '38:24',
      timeAgo: '5 ЧАСОВ НАЗАД'
    },
    {
      id: '9012',
      hero: 'Phantom Lancer',
      result: 'ПОКИНУЛ',
      points: '-160 pts',
      role: 'Safeliner',
      kda: {
        kills: 52,
        deaths: 9,
        assists: 21
      },
      mode: {
        name: 'XLTB',
        rating: '6.85'
      },
      time: '38:24',
      timeAgo: '5 ЧАСОВ НАЗАД'
    }
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Mider':
        return miderIcon;
      case 'Hardliner':
        return hardlinerIcon;
      case 'Safeliner':
        return safelinerIcon;
      default:
        return miderIcon;
    }
  };

  return (
    <div>
      <div className='bg-[#12151B] border border-[#181C25] rounded-lg'>
        <div className='p-4'>
          <div className='px-4 py-4 border-b border-[#181C25]'>
            <div className='grid grid-cols-[1fr,1fr] gap-4'>
              <div className='text-[#9EA8BD] text-sm'>Последние игры</div>
              <div className='grid grid-cols-[1fr,0.8fr,1fr,0.5fr,0.8fr,0.8fr] items-center'>
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

          {matches.map((match, index) => (
            <div 
              key={index} 
              className='grid grid-cols-[2fr,1fr,0.8fr,1fr,0.5fr,0.8fr,0.8fr] items-center rounded-lg p-3 my-1 py-2 cursor-pointer border-b border-[#181C25] hover:bg-[#0B0D10] transition-colors'
              onClick={() => navigate(`/matches/${match.id}`)}
            >
              <div className='flex items-center gap-3 p-2'>
                <img src={avatar} alt={match.hero} className='w-12 h-12 rounded' />
                <span className='text-[#BCC3D0]'>{match.hero}</span>
              </div>
              <div>
                <div className={`text-xs px-2 py-1 rounded-md inline-block ${match.result === 'ПОБЕДА'
                  ? 'text-[#20C867] bg-[#142218] border border-[#193D22]'
                  : match.result === 'ПОРАЖЕНИЕ'
                    ? 'text-[#F23B3B] bg-[#261314] border border-[#3D1F22]'
                    : 'text-[#8993A6] bg-[#181C25] border border-[#262C3B]'
                  }`}>
                  {match.result}
                </div>
              </div>
              <div className={match.result === 'ПОБЕДА' ? 'text-[#20C867]' : match.result === 'ПОРАЖЕНИЕ' ? 'text-[#F23B3B]' : 'text-[#8993A6]'}>
                {match.points}
              </div>
              <div className='text-[#8993A6] flex items-center gap-2'>
                <img src={getRoleIcon(match.role)} alt={match.role} className="w-4 h-4" />
                {match.role}
              </div>
              <div className='text-[#BCC3D0]'>
                <span className='text-[#20C867]'>{match.kda.kills}</span> /
                <span className='text-[#F23B3B]'>{match.kda.deaths}</span> /
                <span className='text-[#20C867]'>{match.kda.assists}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[#BCC3D0] text-center'>{match.mode.name}</span>
                <span className='text-[#8993A6] text-xs text-center'>{match.mode.rating}</span>
              </div>
              <div className='flex flex-col items-end'>
                <span className='text-[#BCC3D0]'>{match.time}</span>
                <span className='text-[#8993A6] text-xs'>{match.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='w-full my-4 border border-[#333A49] bg-gradient-to-t from-[#1B1F27] to-[#232833] hover:from-[#232833] hover:to-[#1B1F27] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300'>
        Загрузить еще...
      </button>
    </div>
  )
};

export default MatchList;
