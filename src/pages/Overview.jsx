import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import sword2 from '../assets/svg/sword2.svg';
import danger from '../assets/svg/danger.svg';

// Hero icons
const heroIcons = {
  pudge: 'https://static.wikia.nocookie.net/wowpedia/images/4/4d/BTNAbomination.png',
  nyx: 'https://static.wikia.nocookie.net/wowpedia/images/f/f6/BTNNerubianQueen.png',
  sf: 'https://static.wikia.nocookie.net/wowpedia/images/c/c3/BTNHeroDreadLord.png',
  bara: 'https://static.wikia.nocookie.net/wowpedia/images/3/3f/BTNTauren.png',
  abaddon: 'https://static.wikia.nocookie.net/wowpedia/images/1/13/BTNHeroDeathKnight.png'
};

// Lane icons
const laneIcons = {
  top: 'https://static.wikia.nocookie.net/wowpedia/images/2/23/BTNArcaniteMelee.png',
  mid: 'https://static.wikia.nocookie.net/wowpedia/images/3/3f/BTNAdvancedStrengthOfTheMoon.png',
  bot: 'https://static.wikia.nocookie.net/wowpedia/images/1/1c/BTNAdvancedMoonArmor.png',
  jungle: 'https://static.wikia.nocookie.net/wowpedia/images/5/55/BTNForestTrollTrapper.png',
  roaming: 'https://static.wikia.nocookie.net/wowpedia/images/5/51/BTNScout.png'
};

// Status icons
const statusIcons = {
  sword: sword2,
  skull: danger
};

// Item icons
const itemIcons = {
  item1: 'https://static.wikia.nocookie.net/wowpedia/images/8/87/BTNSteelMelee.png',
  item2: 'https://static.wikia.nocookie.net/wowpedia/images/5/54/BTNPeriapt.png',
  item3: 'https://static.wikia.nocookie.net/wowpedia/images/2/2b/BTNBoots.png',
  item4: 'https://static.wikia.nocookie.net/wowpedia/images/7/79/BTNGauntletsOfOgrePower.png',
  item5: 'https://static.wikia.nocookie.net/wowpedia/images/4/4f/BTNRingVioletSpider.png',
  item6: 'https://static.wikia.nocookie.net/wowpedia/images/0/00/BTNStaffOfSanctuary.png'
};

// Flag icons
const flagIcons = {
  ru: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg',
  kz: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KZ.svg'
};

// Player colors
const playerColors = ['#FF5722', '#FFC107', '#9C27B0', '#009688', '#3F51B5'];

// Mock data
const matchData = [
  {
    id: 0,
    duration: '33:20',
    date: '06.01.2025 22:06',
    mode: 'ALLPICK MODE',
    teams: [
      {
        id: 0,
        name: 'SENTINEL',
        score: 56,
        result: 'ПОБЕДА',
        players: [
          {
            hero: heroIcons.pudge,
            heroName: 'Pudge',
            nickname: 'shuname',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.top,
            laneName: 'TOP',
            level: 1,
            xp: 150,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            statusIcon: statusIcons.sword,
            color: playerColors[0]
          },
          {
            hero: heroIcons.nyx,
            heroName: 'Nyx Assassin',
            nickname: 'TheSystem',
            countryFlag: flagIcons.kz,
            country: 'Kazakhstan',
            lane: laneIcons.mid,
            laneName: 'MID',
            level: 5,
            xp: 1800,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[1]
          },
          {
            hero: heroIcons.sf,
            heroName: 'Shadow Fiend',
            nickname: 'Uzoomak1',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.bot,
            laneName: 'BOT',
            level: 10,
            xp: 5700,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[2]
          },
          {
            hero: heroIcons.bara,
            heroName: 'Spirit Breaker',
            nickname: 'Player-X',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.jungle,
            laneName: 'JUNGLE',
            level: 15,
            xp: 12500,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[3]
          },
          {
            hero: heroIcons.abaddon,
            heroName: 'Abaddon',
            nickname: 'Maga_4',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.roaming,
            laneName: 'ROAMING',
            level: 20,
            xp: 21500,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[4]
          }
        ],
        totalKills: 85,
        totalDeaths: 89,
        totalAssists: 98,
        totalLastHits: 102,
        totalDenies: 266,
        totalNeutralKills: 106,
        averageGPM: '2.4K',
        averageXPM: '3.3K',
        totalHeroDamage: '94.6K',
        totalTowerDamage: '22K',
        totalNetworth: '72.0K',
        totalObserverWards: 26,
        totalSentryWards: 56
      },
      {
        id: 1,
        name: 'SCOURGE',
        score: 56,
        players: [
          {
            hero: heroIcons.pudge,
            heroName: 'Pudge',
            nickname: 'shuname',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.top,
            laneName: 'TOP',
            level: 25,
            xp: 33000,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[0]
          },
          {
            hero: heroIcons.nyx,
            heroName: 'Nyx Assassin',
            nickname: 'TheSystem',
            countryFlag: flagIcons.kz,
            country: 'Kazakhstan',
            lane: laneIcons.mid,
            laneName: 'MID',
            level: 15,
            xp: 13000,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[1]
          },
          {
            hero: heroIcons.sf,
            heroName: 'Shadow Fiend',
            nickname: 'Uzoomak1',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.bot,
            laneName: 'BOT',
            level: 0,
            xp: 0,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[2]
          },
          {
            statusIcon: statusIcons.skull,
            hero: heroIcons.bara,
            heroName: 'Spirit Breaker',
            nickname: 'Player-X',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.jungle,
            laneName: 'JUNGLE',
            level: 10,
            xp: 5600,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[3]
          },
          {
            hero: heroIcons.abaddon,
            heroName: 'Abaddon',
            nickname: 'Maga_4',
            countryFlag: flagIcons.ru,
            country: 'Russia',
            lane: laneIcons.roaming,
            laneName: 'ROAMING',
            level: 25,
            xp: 35000,
            kills: 25,
            deaths: 25,
            assists: 25,
            lastHits: 25,
            denies: 25,
            neutralKills: 253,
            gpm: 253,
            xpm: '8.9K',
            heroDamage: '8.9K',
            towerDamage: '7.2K',
            networth: '7.2K',
            items: [itemIcons.item1, itemIcons.item2, itemIcons.item3, itemIcons.item4, itemIcons.item5, itemIcons.item6],
            observerWards: 23,
            sentryWards: 56,
            color: playerColors[4]
          }
        ],
        totalKills: 85,
        totalDeaths: 89,
        totalAssists: 98,
        totalLastHits: 102,
        totalDenies: 266,
        totalNeutralKills: 106,
        averageGPM: '2.4K',
        averageXPM: '3.3K',
        totalHeroDamage: '94.6K',
        totalTowerDamage: '22K',
        totalNetworth: '72.0K',
        totalObserverWards: 26,
        totalSentryWards: 56
      }
    ]
  }
];

// Level progress component
const LevelProgress = ({ level, xp }) => {
  const levelRanges = [
    { min: 0, max: 199 },
    { min: 200, max: 499 },
    { min: 500, max: 899 },
    { min: 900, max: 1399 },
    { min: 1400, max: 1999 },
    { min: 2000, max: 2599 },
    { min: 2600, max: 3199 },
    { min: 3200, max: 4399 },
    { min: 4400, max: 5399 },
    { min: 5400, max: 5999 },
    { min: 6000, max: 8199 },
    { min: 8200, max: 8999 },
    { min: 9000, max: 10399 },
    { min: 10400, max: 11899 },
    { min: 11900, max: 13499 },
    { min: 13500, max: 15199 },
    { min: 15200, max: 16999 },
    { min: 17000, max: 18899 },
    { min: 18900, max: 20899 },
    { min: 20900, max: 22999 },
    { min: 23000, max: 25199 },
    { min: 25200, max: 27499 },
    { min: 27500, max: 29899 },
    { min: 29900, max: 32399 },
    { min: 32400, max: Infinity }
  ];

  const currentRange = levelRanges[level - 1] || { min: 0, max: 0 };
  const nextRange = levelRanges[level] || { min: currentRange.max + 1, max: Infinity };
  const remainingXP = nextRange.min - xp;

  const percentage = (level / 25) * 100;
  const degrees = (percentage / 100) * 360;

  const getProgressColor = () => {
    if (percentage === 0) return '#59606F';

    if (percentage <= 50) {
      const hue = 60;
      const saturation = percentage * 2;
      const lightness = 100 - (percentage * 0.6);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    } else {
      const hue = 60 - ((percentage - 50) * 1.2);
      const saturation = 100;
      const lightness = 70 - ((percentage - 50) * 0.8);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
  };

  const getGradient = () => {
    if (percentage === 0) return '#59606F';
    const progressColor = getProgressColor();
    return `conic-gradient(${progressColor} ${degrees}deg, #59606F ${degrees}deg)`;
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip className='custom-tooltip bg-[#12151B] border border-[#8993A6] rounded-lg'>
          <div className='p-2 text-center'>
            <div className='text-white'>{level}-daraja</div>
            <div className='text-[#8993A6] text-sm'>
              Joriy XP: {xp}
            </div>
            <div className='text-[#8993A6] text-sm'>
              Oraliq: {currentRange.min} - {currentRange.max} XP
            </div>
            {level < 25 && (
              <>
                <div className='text-[#8993A6] text-sm'>
                  Keyingi daraja: {nextRange.min} XP
                </div>
                <div className='text-[#8993A6] text-sm'>
                  Qoldi: {remainingXP} XP
                </div>
              </>
            )}
          </div>
        </Tooltip>
      }
    >
      <div className='relative w-8 h-8 flex items-center justify-center cursor-help'>
        <div
          className='absolute w-full h-full rounded-full'
          style={{
            background: getGradient(),
            padding: '2px'
          }}
        >
          <div className='w-full h-full bg-[#12151B] rounded-full flex items-center justify-center'>
            <span className='text-white'>{level}</span>
          </div>
        </div>
      </div>
    </OverlayTrigger>
  );
};

export const Overview = () => {
  const QuestionIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#8993A6] hover:text-white transition-colors"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );

  const LevelTooltip = () => (
    <Tooltip className='custom-tooltip bg-[#12151B] border border-[#8993A6] rounded-lg'>
      <div className='p-3'>
        <div className='font-bold mb-2 text-white'>Daraja yo'llari:</div>
        <div className='grid grid-cols-2 gap-2 text-[#8993A6]'>
          <div>1-daraja: 0 - 199</div>
          <div>14-daraja: 10400 - 11899</div>
          <div>2-daraja: 200 - 499</div>
          <div>15-daraja: 11900 - 13499</div>
          <div>3-daraja: 500 - 899</div>
          <div>16-daraja: 13500 - 15199</div>
          <div>4-daraja: 900 - 1399</div>
          <div>17-daraja: 15200 - 16999</div>
          <div>5-daraja: 1400 - 1999</div>
          <div>18-daraja: 17000 - 18899</div>
          <div>6-daraja: 2000 - 2599</div>
          <div>19-daraja: 18900 - 20899</div>
          <div>7-daraja: 2600 - 3199</div>
          <div>20-daraja: 20900 - 22999</div>
          <div>8-daraja: 3200 - 4399</div>
          <div>21-daraja: 23000 - 25199</div>
          <div>9-daraja: 4400 - 5399</div>
          <div>22-daraja: 25200 - 27499</div>
          <div>10-daraja: 5400 - 5999</div>
          <div>23-daraja: 27500 - 29899</div>
          <div>11-daraja: 6000 - 8199</div>
          <div>24-daraja: 29900 - 32399</div>
          <div>12-daraja: 8200 - 8999</div>
          <div>25-daraja: 32400+</div>
          <div>13-daraja: 9000 - 10399</div>
        </div>
      </div>
    </Tooltip>
  );

  return (
    <>
      {/* Tables */}
      <div className=''>
        {matchData[0].teams.map((team) => (
          <div key={team.id} className='bg-[#12151B] rounded-lg overflow-hidden my-5'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-[#12151B] border border-[#181C25] text-[#8993A6] text-sm'>
                  <tr>
                    <th className='py-3 px-4 text-left'>{team.name}</th>
                    <th className='py-3 px-4 text-center'>LANE</th>
                    <th className='py-3 px-2 text-center relative group'>
                      LVL
                      <OverlayTrigger
                        placement="right"
                        overlay={LevelTooltip()}
                      >
                        <span className='relative ml-2 bottom-[-2px] inline-flex items-center cursor-help'>
                          <QuestionIcon />
                        </span>
                      </OverlayTrigger>
                    </th>
                    <th className='py-3 px-2 text-center'>K</th>
                    <th className='py-3 px-2 text-center'>D</th>
                    <th className='py-3 px-2 text-center'>A</th>
                    <th className='py-3 px-2 text-center'>LH</th>
                    <th className='py-3 px-2 text-center'>DN</th>
                    <th className='py-3 px-2 text-center'>NK</th>
                    <th className='py-3 px-2 text-center'>GPM</th>
                    <th className='py-3 px-2 text-center'>XPM</th>
                    <th className='py-3 px-2 text-center'>HD</th>
                    <th className='py-3 px-2 text-center'>TD</th>
                    <th className='py-3 px-2 text-center'>NW</th>
                    <th className='py-3 px-2 text-center'>ITEMS</th>
                    <th className='py-3 px-4 text-center'>WARDS</th>
                  </tr>
                </thead>
                <tbody className='text-white'>
                  {team.players.map((player, index) => (
                    <tr key={index} className='border-t border-[#181C25] hover:bg-[#181C25]'>
                      <td className='py-2 px-4'>
                        <div className='flex items-center relative left-1'>
                          <div className='relative'>
                            <div
                              className='absolute w-1 h-12 rounded-l-sm'
                              style={{
                                backgroundColor: player.color,
                                left: '-0.5rem',
                                top: '0'
                              }}
                            />
                            <img src={player.hero} alt={player.heroName} className='w-12 h-12 rounded' />
                          </div>
                          <div className='ml-1'>
                            <div className='flex items-center'>
                              {player.countryFlag && (
                                <img src={player.countryFlag} alt={player.country} className='w-4 h-3 mx-1' />
                              )}
                              <span className='text-white'>{player.nickname}</span>
                              {player.statusIcon && (
                                <img src={player.statusIcon} alt="Status" className='w-4 h-4 ml-1' />
                              )}
                            </div>
                            <div className='text-[#8993A6] text-xs'>{player.heroName}</div>
                          </div>
                        </div>
                      </td>
                      <td className='py-2 px-4 text-center'>
                        <div className='flex items-center justify-center gap-1'>
                          <img src={player.lane} alt={player.laneName} className='w-8 h-8' />
                        </div>
                      </td>
                      <td className='py-2 px-2 text-center'>
                        <div className='flex justify-center'>
                          <LevelProgress level={player.level} xp={player.xp} />
                        </div>
                      </td>
                      <td className='py-2 px-2 text-center text-[#20C867]'>{player.kills}</td>
                      <td className='py-2 px-2 text-center text-[#F23B3B]'>{player.deaths}</td>
                      <td className='py-2 px-2 text-center text-[#2576F0]'>{player.assists}</td>
                      <td className='py-2 px-2 text-center'>{player.lastHits}</td>
                      <td className='py-2 px-2 text-center'>{player.denies}</td>
                      <td className='py-2 px-2 text-center'>{player.neutralKills}</td>
                      <td className='py-2 px-2 text-center'>{player.gpm}</td>
                      <td className='py-2 px-2 text-center'>{player.xpm}</td>
                      <td className='py-2 px-2 text-center'>{player.heroDamage}</td>
                      <td className='py-2 px-2 text-center'>{player.towerDamage}</td>
                      <td className='py-2 px-2 text-center text-[#FFB342]'>{player.networth}</td>
                      <td className='py-2 px-2'>
                        <div className='flex gap-1 justify-center'>
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className='w-8 h-8 bg-[#0D0F13] rounded'>
                              {player.items[i] && (
                                <img src={player.items[i]} alt="Item" className='w-8 h-8' />
                              )}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className='py-2 px-4'>
                        <div className='flex gap-1 justify-center'>
                          <div className='bg-[#1B1F27] rounded px-1 text-[#FFB342]'>{player.observerWards}</div>
                          <div className='bg-[#1B1F27] rounded px-1 text-[#2576F0]'>{player.sentryWards}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr className='border border-[#181C25] bg-[#0F1216]'>
                    <td className='py-2 px-4 text-[#8993A6]'>ИТОГО</td>
                    <td className='py-2 px-2'></td>
                    <td className='py-2 px-2'></td>
                    <td className='py-2 px-2 text-center text-[#20C867]'>{team.totalKills}</td>
                    <td className='py-2 px-2 text-center text-[#F23B3B]'>{team.totalDeaths}</td>
                    <td className='py-2 px-2 text-center text-[#2576F0]'>{team.totalAssists}</td>
                    <td className='py-2 px-2 text-center'>{team.totalLastHits}</td>
                    <td className='py-2 px-2 text-center'>{team.totalDenies}</td>
                    <td className='py-2 px-2 text-center'>{team.totalNeutralKills}</td>
                    <td className='py-2 px-2 text-center'>{team.averageGPM}</td>
                    <td className='py-2 px-2 text-center'>{team.averageXPM}</td>
                    <td className='py-2 px-2 text-center'>{team.totalHeroDamage}</td>
                    <td className='py-2 px-2 text-center'>{team.totalTowerDamage}</td>
                    <td className='py-2 px-2 text-center text-[#FFB342]'>{team.totalNetworth}</td>
                    <td className='py-2 px-2'></td>
                    <td className='py-2 px-2'>
                      <div className='flex gap-1 justify-center'>
                        <div className='bg-[#1B1F27] rounded px-1 text-[#FFB342]'>{team.totalObserverWards}</div>
                        <div className='bg-[#1B1F27] rounded px-1 text-[#2576F0]'>{team.totalSentryWards}</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Ban Information */}
      <div className='mt-10'>
        <div className='border border-[#181C25] flex items-center gap-4 mb-4 bg-[#12151B] rounded-lg p-4'>
          <span className='text-[#8993A6]'>БАНЫ</span>
          <div className='flex gap-2'>
            {[heroIcons.pudge, heroIcons.nyx, heroIcons.sf, heroIcons.bara, heroIcons.abaddon].map((hero, index) => (
              <img key={index} src={hero} alt="Banned Hero" className='w-12 h-10 rounded' />
            ))}
          </div>
        </div>
        <div className='flex items-center gap-4 text-[#8993A6] text-sm my-2 bg-[#12151B] rounded-lg p-4'>
          <div className='flex items-center gap-2'>
            <span>Хост:</span>
            <span className='text-white'>shuname</span>
          </div>
          <div className='flex items-center gap-2'>
            <span>Карта:</span>
            <span className='text-white'>Dota 6.85 BCN</span>
          </div>
          <div className='flex items-center gap-2'>
            <span>Хостбот:</span>
            <span className='text-white'>BattleCup-Game-Bot #UZ1</span>
          </div>
        </div>
      </div>
    </>
  );
};