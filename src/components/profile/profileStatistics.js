'use client'

export default function profileStatistics() {
  const recentGames = [
    {
      hero: 'Pudge',
      result: 'ПОБЕДА',
      points: '+160',
      role: 'Mider',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24'
    },
    {
      hero: 'Abaddon',
      result: 'ПОРАЖЕНИЕ',
      points: '-60',
      role: 'Hardliner',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24'
    },
    {
      hero: 'Phantom Lancer',
      result: 'ПОРАЖЕНИЕ',
      points: '-60',
      role: 'Safeliner',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24'
    },
    {
      hero: 'Lycan',
      result: 'ПОБЕДА',
      points: '+160',
      role: 'Mider',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24'
    },
    {
      hero: 'Clinz',
      result: 'ПОБЕДА',
      points: '+160',
      role: 'Mider',
      kda: '52/9/21',
      match: 'XLTB',
      time: '38:24'
    }
  ];

  const popularHeroes = [
    {
      hero: 'Pudge',
      matches: 336,
      winrate: 82,
      kda: 8.67,
      lastPlayed: '2 часа назад'
    },
    {
      hero: 'Abaddon',
      matches: 336,
      winrate: 72,
      kda: 8.67,
      lastPlayed: '3 месяца назад'
    },
    {
      hero: 'Phantom Lancer',
      matches: 336,
      winrate: 63,
      kda: 8.67,
      lastPlayed: '06.01.2025'
    },
    {
      hero: 'Lycan',
      matches: 336,
      winrate: 52,
      kda: 8.67,
      lastPlayed: '06.01.2025'
    },
    {
      hero: 'Clinz',
      matches: 336,
      winrate: 42,
      kda: 8.67,
      lastPlayed: '06.01.2025'
    }
  ];

  const gameStats = {
    matches: {
      total: 575,
      wins: 453,
      mvp: 122,
      winrate: '78.78%'
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
                  <img src="/svg/ranking.svg" className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <img src="/img/5+.png" className='w-[28px] h-[20px]' />
                  <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                </div>
              </div>
              <div className='border-b border-[#181C25]'></div>
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row">
                  <img src="/svg/menu-05.svg" className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Место в рейтинге</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <span className='text-[#BCC3D0] text-[15px]'>#2165</span>
                </div>
              </div>
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row">
                  <img src="/svg/menu-05.svg" className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Показатель Скилла</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <span className='text-[#BCC3D0] text-[15px] border border-[#871313] px-2 rounded font-[600] text-[#871313]'>S 2.7</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full border-l border-[#181C25]'>
              <img src="/img/bronze.png" className='w-[101px] h-[101px]' />
              <div className='text-[#BD7D40] text-[15px] font-[700] bg-[#452910] px-[8px] py-[1px] rounded-[4px] mb-[14px]'>РЕКРУТ I</div>
            </div>
          </div>
        </div>

        {/* Game Stats */}
        <div className="flex-1 bg-[#12151B] border border-[#181C25] rounded-lg">
          <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
            <span className='text-[#8B95A9]'>Игровая статистика</span>
          </div>
          <div className='p-4'>
            <div className='grid grid-cols-4 gap-4'>
              {/* Matches */}
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>ИГРЫ</div>
                <div className='text-white text-lg'>{gameStats.matches.total}</div>
                <div className='text-[#8993A6] text-xs'>матчей</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.matches.wins}</div>
                <div className='text-[#8993A6] text-xs'>побед</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.matches.mvp}</div>
                <div className='text-[#8993A6] text-xs'>MVP</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.matches.winrate}</div>
                <div className='text-[#8993A6] text-xs'>винрейт</div>
              </div>

              {/* Kills */}
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>УБИЙСТВА</div>
                <div className='text-white text-lg'>{gameStats.kills.total}</div>
                <div className='text-[#8993A6] text-xs'>всего</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.kills.average}</div>
                <div className='text-[#8993A6] text-xs'>среднее</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.kills.record}</div>
                <div className='text-[#8993A6] text-xs'>рекорд</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.kills.kda}</div>
                <div className='text-[#8993A6] text-xs'>K/D/A</div>
              </div>

              {/* Assists */}
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>ПОМОЩЬ</div>
                <div className='text-white text-lg'>{gameStats.assists.total}</div>
                <div className='text-[#8993A6] text-xs'>всего</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.assists.average}</div>
                <div className='text-[#8993A6] text-xs'>среднее</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.assists.record}</div>
                <div className='text-[#8993A6] text-xs'>рекорд</div>
              </div>
              <div>
                <div className='text-[#8993A6] text-sm mb-1'>&nbsp;</div>
                <div className='text-white text-lg'>{gameStats.assists.kda}</div>
                <div className='text-[#8993A6] text-xs'>K/D/A</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Games */}
      <div className='mt-4 bg-[#12151B] border border-[#181C25] rounded-lg'>
        <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
          <span className='text-[#8B95A9]'>Последние игры</span>
        </div>
        <div className='p-4'>
          <div className='space-y-2'>
            {recentGames.map((game, index) => (
              <div key={index} className='flex items-center justify-between bg-[#0B0D10] rounded-lg p-3'>
                <div className='flex items-center gap-3'>
                  <img src={`/img/heroes/${game.hero.toLowerCase()}.png`} alt={game.hero} className='w-12 h-12 rounded-lg' />
                  <div>
                    <div className={`text-sm ${game.result === 'ПОБЕДА' ? 'text-[#20C867]' : 'text-[#F23B3B]'}`}>
                      {game.result}
                    </div>
                    <div className='text-[#8993A6] text-sm'>{game.points} pts</div>
                  </div>
                </div>
                <div className='flex items-center gap-6'>
                  <div className='flex items-center gap-2'>
                    <img src={`/img/roles/${game.role.toLowerCase()}.png`} alt={game.role} className='w-4 h-4' />
                    <span className='text-[#8993A6]'>{game.role}</span>
                  </div>
                  <div className='text-[#8993A6]'>{game.kda}</div>
                  <div className='text-[#8993A6]'>{game.match}</div>
                  <div className='text-[#8993A6]'>{game.time}</div>
                </div>
              </div>
            ))}
          </div>
          <button className='w-full mt-4 p-3 text-center text-[#8993A6] hover:text-white transition-colors border border-[#181C25] rounded-lg'>
            Просмотреть все игры
          </button>
        </div>
      </div>

      {/* Popular Heroes */}
      <div className='mt-4 bg-[#12151B] border border-[#181C25] rounded-lg'>
        <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
          <span className='text-[#8B95A9]'>Самые популярные герои</span>
        </div>
        <div className='p-4'>
          <div className='space-y-2'>
            {popularHeroes.map((hero, index) => (
              <div key={index} className='flex items-center justify-between bg-[#0B0D10] rounded-lg p-3'>
                <div className='flex items-center gap-3'>
                  <img src={`/img/heroes/${hero.hero.toLowerCase()}.png`} alt={hero.hero} className='w-12 h-12 rounded-lg' />
                  <div>
                    <div className='text-white'>{hero.hero}</div>
                    <div className='text-[#8993A6] text-sm'>{hero.matches} игр</div>
                  </div>
                </div>
                <div className='flex items-center gap-8'>
                  <div className='w-32'>
                    <div className='flex justify-between text-sm mb-1'>
                      <span className='text-[#8993A6]'>Винрейт</span>
                      <span className='text-white'>{hero.winrate}%</span>
                    </div>
                    <div className='h-1 bg-[#181C25] rounded-full'>
                      <div 
                        className='h-full bg-gradient-to-r from-[#20C867] to-[#42F88F] rounded-full'
                        style={{ width: `${hero.winrate}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className='text-[#8993A6]'>{hero.kda}</div>
                  <div className='text-[#8993A6] w-32 text-right'>{hero.lastPlayed}</div>
                </div>
              </div>
            ))}
          </div>
          <button className='w-full mt-4 p-3 text-center text-[#8993A6] hover:text-white transition-colors border border-[#181C25] rounded-lg'>
            Просмотреть всех героев
          </button>
        </div>
      </div>
    </div>
  )
}
