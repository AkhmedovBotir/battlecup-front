import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import heroIcons from '../data/heroIcons'

// Mock data for featured matches
const featuredMatches = [
  {
    id: 1,
    mode: 'ALLPICK MODE',
    duration: '33:20',
    date: '06.01.2025 22:06',
    teams: [
      {
        name: 'SENTINEL',
        score: 56,
        result: 'ПОБЕДА'
      },
      {
        name: 'SCOURGE',
        score: 42
      }
    ]
  },
  {
    id: 2,
    mode: 'ALLPICK MODE',
    duration: '45:15',
    date: '06.01.2025 21:30',
    teams: [
      {
        name: 'TEAM A',
        score: 48
      },
      {
        name: 'TEAM B',
        score: 52,
        result: 'ПОБЕДА'
      }
    ]
  }
]

// Mock data for top players
const topPlayers = [
  {
    id: 1,
    nickname: 'Player1',
    rating: 2565,
    hero: heroIcons.pudge,
    country: 'UZ',
    flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UZ.svg'
  },
  {
    id: 2,
    nickname: 'Player2',
    rating: 2480,
    hero: heroIcons.nyx,
    country: 'RU',
    flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg'
  },
  {
    id: 3,
    nickname: 'Player3',
    rating: 2350,
    hero: heroIcons.sf,
    country: 'KZ',
    flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KZ.svg'
  }
]

// Mock data for tournaments
const tournaments = [
  {
    id: 1,
    name: 'BattleCup Winter 2025',
    prize: '$1,000',
    participants: 128,
    status: 'REGISTRATION',
    date: '15.01.2025'
  },
  {
    id: 2,
    name: 'Weekly Tournament #45',
    prize: '$500',
    participants: 64,
    status: 'LIVE',
    date: '10.01.2025'
  },
  {
    id: 3,
    name: 'Pro League Season 3',
    prize: '$2,500',
    participants: 256,
    status: 'UPCOMING',
    date: '20.01.2025'
  }
]

export default function Home() {
  const user = {
    id: '864844',
    nickname: 'Uzoomak1',
    rank: 'General Manager',
    country: 'Uzbekistan',
    flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UZ.svg'
  }

  return (
    <>
      <Navbar user={user} />
      
      {/* Hero Section */}
      <div className='relative w-full h-[400px] overflow-hidden mb-10'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0D10]'></div>
        <div className='absolute inset-0 flex items-center justify-center text-center'>
          <div>
            <h1 className='text-5xl font-bold text-white mb-4'>BattleCup</h1>
            <p className='text-[#8993A6] text-xl mb-8'>Your Ultimate Gaming Tournament Platform</p>
            <div className='flex gap-4 justify-center'>
              <Link to="/tournaments" className='bg-[#2576F0] hover:bg-[#1B5AC3] text-white px-8 py-3 rounded-lg transition-colors'>
                Join Tournament
              </Link>
              <Link to="/register" className='bg-[#12151B] hover:bg-[#181C25] text-white px-8 py-3 rounded-lg transition-colors border border-[#333B4E]'>
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1335px] mx-auto px-4'>
        {/* Live Tournaments */}
        <div className='mb-10'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[#8993A6] text-xl'>Live Tournaments</h2>
            <Link to="/tournaments" className='text-[#2576F0] hover:text-[#1B5AC3] transition-colors'>
              View All
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {tournaments.map((tournament) => (
              <Link key={tournament.id} to={`/tournaments/${tournament.id}`}>
                <div className='bg-[#12151B] rounded-lg p-4 hover:bg-[#181C25] transition-colors cursor-pointer border border-[#181C25]'>
                  <div className='flex justify-between items-start mb-3'>
                    <h3 className='text-white font-bold'>{tournament.name}</h3>
                    <div className={`px-2 py-1 rounded text-xs ${
                      tournament.status === 'LIVE' ? 'bg-[#142218] text-[#20C867] border border-[#193D22]' :
                      tournament.status === 'UPCOMING' ? 'bg-[#1A1B26] text-[#3B88F2] border border-[#1F2A3D]' :
                      'bg-[#1A1B26] text-[#8993A6] border border-[#262C3B]'
                    }`}>
                      {tournament.status}
                    </div>
                  </div>
                  <div className='flex justify-between text-[#8993A6] text-sm mb-3'>
                    <div>Prize Pool: <span className='text-[#FFB342]'>{tournament.prize}</span></div>
                    <div>{tournament.participants} Teams</div>
                  </div>
                  <div className='text-[#59606F] text-sm'>Starts: {tournament.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Matches */}
        <div className='mb-10'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[#8993A6] text-xl'>Featured Matches</h2>
            <Link to="/matches" className='text-[#2576F0] hover:text-[#1B5AC3] transition-colors'>
              View All
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {featuredMatches.map((match) => (
              <Link key={match.id} to={`/matches/${match.id}`}>
                <div className='bg-[#12151B] rounded-lg p-4 hover:bg-[#181C25] transition-colors cursor-pointer border border-[#181C25]'>
                  <div className='flex justify-between items-center mb-2'>
                    <div className='text-[#BCC3D0]'>{match.mode}</div>
                    <div className='text-[#59606F]'>{match.date}</div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                      {match.teams[0].result && (
                        <div className='text-[#20C867] text-sm px-2 py-1 rounded bg-[#142218] border border-[#193D22]'>
                          {match.teams[0].result}
                        </div>
                      )}
                      <div className='text-[#20C867]'>
                        <span className='text-2xl font-bold'>{match.teams[0].name}</span>
                        <span className='text-3xl font-bold ml-3'>{match.teams[0].score}</span>
                      </div>
                    </div>
                    <div className='text-[#BCC3D0] font-bold'>{match.duration}</div>
                    <div className='flex items-center gap-4'>
                      <div className='text-[#F23B3B]'>
                        <span className='text-3xl font-bold mr-3'>{match.teams[1].score}</span>
                        <span className='text-2xl font-bold'>{match.teams[1].name}</span>
                      </div>
                      {match.teams[1].result && (
                        <div className='text-[#20C867] text-sm px-2 py-1 rounded bg-[#142218] border border-[#193D22]'>
                          {match.teams[1].result}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Top Players */}
        <div className='mb-10'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[#8993A6] text-xl'>Top Players</h2>
            <Link to="/leaderboard" className='text-[#2576F0] hover:text-[#1B5AC3] transition-colors'>
              View All
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {topPlayers.map((player) => (
              <Link key={player.id} to={`/profile/${player.id}`}>
                <div className='bg-[#12151B] rounded-lg p-4 hover:bg-[#181C25] transition-colors cursor-pointer border border-[#181C25]'>
                  <div className='flex items-center gap-4'>
                    <div className='relative w-[70px] h-[50px] rounded-lg overflow-hidden'>
                      <div
                        className='absolute inset-0 blur-sm opacity-50'
                        style={{
                          backgroundImage: `url(${player.hero})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div className='relative z-10 w-full h-full flex items-center justify-center'>
                        <img src={player.hero} alt={player.nickname} className='w-10 h-10 rounded-lg' />
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-2 mb-1'>
                        <img src={player.flag} alt={player.country} className='w-5 h-3' />
                        <span className='text-white font-bold'>{player.nickname}</span>
                      </div>
                      <div className='text-[#FFB342]'>{player.rating} pts</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-10'>
          <Link to="/matches">
            <div className='bg-[#12151B] rounded-lg p-6 hover:bg-[#181C25] transition-colors cursor-pointer text-center border border-[#181C25]'>
              <h3 className='text-white text-lg mb-2'>Recent Matches</h3>
              <p className='text-[#8993A6]'>View all recent matches</p>
            </div>
          </Link>
          <Link to="/tournaments">
            <div className='bg-[#12151B] rounded-lg p-6 hover:bg-[#181C25] transition-colors cursor-pointer text-center border border-[#181C25]'>
              <h3 className='text-white text-lg mb-2'>Tournaments</h3>
              <p className='text-[#8993A6]'>Join or create tournaments</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className='bg-[#12151B] rounded-lg p-6 hover:bg-[#181C25] transition-colors cursor-pointer text-center border border-[#181C25]'>
              <h3 className='text-white text-lg mb-2'>My Profile</h3>
              <p className='text-[#8993A6]'>View your statistics</p>
            </div>
          </Link>
          <Link to="/leaderboard">
            <div className='bg-[#12151B] rounded-lg p-6 hover:bg-[#181C25] transition-colors cursor-pointer text-center border border-[#181C25]'>
              <h3 className='text-white text-lg mb-2'>Leaderboard</h3>
              <p className='text-[#8993A6]'>See top players ranking</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
