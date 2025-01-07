import React from 'react';
import Image from 'next/image';

const MatchList = () => {
  // Sample data - replace with actual data from your API
  const matches = [
    {
      hero: 'Pudge',
      result: 'ПОБЕДА',
      points: '+160 pts',
      role: 'Mider',
      kda: { kills: 52, deaths: 9, assists: 21 },
      matchId: 'XLTB',
      timestamp: '8 ЧАСОВ НАЗАД',
    },
    {
      hero: 'Abadon',
      result: 'ПОРАЖЕНИЕ',
      points: '-160 pts',
      role: 'Hardliner',
      kda: { kills: 52, deaths: 9, assists: 21 },
      matchId: 'XLTB',
      timestamp: '8 ЧАСОВ НАЗАД',
    },
    {
      hero: 'Phantom Lancer',
      result: 'ПОКИНУЛ',
      points: '-160 pts',
      role: 'Safeliner',
      kda: { kills: 52, deaths: 9, assists: 21 },
      matchId: 'XLTB',
      timestamp: '8 ЧАСОВ НАЗАД',
    },
    // Add more matches with the same pattern
  ];

  const getResultStyle = (result) => {
    switch (result) {
      case 'ПОБЕДА':
        return 'bg-[#193D3A] text-[#2EAE96] border border-[#2EAE96]';
      case 'ПОРАЖЕНИЕ':
        return 'bg-[#3D1919] text-[#AE2E2E] border border-[#AE2E2E]';
      case 'ПОКИНУЛ':
        return 'bg-[#1F1F1F] text-[#808080] border border-[#808080]';
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#0E1012] text-white">
      {/* Table Header */}
      <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr,1fr,1fr,1fr] px-6 py-3 text-[#808080] text-sm border-b border-[#1F1F1F]">
        <div>Последние игры</div>
        <div>Результат</div>
        <div>Очки</div>
        <div>Роль</div>
        <div>K/D/A</div>
        <div>Мод</div>
        <div>Время</div>
      </div>

      {/* Match List */}
      <div className="flex flex-col">
        {matches.map((match, index) => (
          <div 
            key={index} 
            className="grid grid-cols-[1.5fr,1fr,1fr,1fr,1fr,1fr,1fr] px-6 py-2 hover:bg-[#1F1F1F] items-center border-b border-[#1F1F1F]"
          >
            {/* Hero */}
            <div className="flex items-center gap-3">
              <div className="w-[46px] h-[46px] relative">
                <Image
                  src={`/heroes/${match.hero.toLowerCase().replace(' ', '_')}.png`}
                  alt={match.hero}
                  width={46}
                  height={46}
                  className="rounded"
                />
              </div>
              <span className="text-[15px]">{match.hero}</span>
            </div>

            {/* Result */}
            <div>
              <span className={`px-3 py-1 rounded-sm text-xs ${getResultStyle(match.result)}`}>
                {match.result}
              </span>
            </div>

            {/* Points */}
            <div className={`text-sm ${match.points.includes('+') ? 'text-[#2EAE96]' : 'text-[#AE2E2E]'}`}>
              {match.points}
            </div>

            {/* Role */}
            <div className="flex items-center gap-2">
              <Image
                src={`/roles/${match.role.toLowerCase()}.svg`}
                alt={match.role}
                width={16}
                height={16}
              />
              <span className="text-sm text-[#808080]">{match.role}</span>
            </div>

            {/* KDA */}
            <div className="text-sm">
              <span className="text-[#2EAE96]">{match.kda.kills}</span>
              <span className="text-[#808080]">/</span>
              <span className="text-[#AE2E2E]">{match.kda.deaths}</span>
              <span className="text-[#808080]">/</span>
              <span className="text-[#2EAE96]">{match.kda.assists}</span>
            </div>

            {/* Match ID */}
            <div className="text-[13px] text-[#808080]">{match.matchId}</div>

            {/* Time */}
            <div className="text-[13px] text-[#808080] uppercase">
              {match.timestamp}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button className="w-full py-3 text-center bg-[#1F1F1F] text-[#808080] hover:bg-[#2A2A2A] mt-4">
        Загрузить еще...
      </button>
    </div>
  );
};

export default MatchList;
