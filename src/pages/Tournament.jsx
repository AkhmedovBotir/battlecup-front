import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function Tournament() {
  const { tournamentId } = useParams();
  const [tournament, setTournament] = useState(null);

  // Tournament data fetching logic...

  useSEO({
    title: tournament ? 
      `${tournament.name} - ${tournament.prize_pool} so'm mukofot fondi` : 
      'Turnir tafsilotlari',
    description: tournament ? 
      `${tournament.name} - ${tournament.start_date} dan ${tournament.end_date} gacha. Mukofot fondi: ${tournament.prize_pool} so'm. Ishtirokchilar soni: ${tournament.participants_count}. ${tournament.description}` :
      'BattleCup platformasidagi Dota 2 turniri tafsilotlari',
    keywords: \`dota 2, tournament, ${tournament?.name}, battlecup, prize pool, cyber sport\`,
    image: tournament?.banner_image,
    type: 'article',
    publishedTime: tournament?.start_date,
    modifiedTime: tournament?.last_updated,
    section: 'tournaments',
    canonicalPath: \`/tournaments/${tournamentId}\`
  });

  return (
    <div className="min-h-screen bg-[#0A0C10]">
      {tournament ? (
        <div className="max-w-7xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-white mb-4">{tournament.name}</h1>
          <div className="bg-[#12151B] rounded-lg p-6">
            {/* Tournament content */}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#20C867]"></div>
        </div>
      )}
    </div>
  );
}
