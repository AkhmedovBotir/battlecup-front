import React from 'react';
import plusIcon from "../assets/svg/plus.svg"

// Hero icons
const heroIcons = {
  pudge: 'https://static.wikia.nocookie.net/wowpedia/images/4/4d/BTNAbomination.png',
  nyx: 'https://static.wikia.nocookie.net/wowpedia/images/f/f6/BTNNerubianQueen.png',
  sf: 'https://static.wikia.nocookie.net/wowpedia/images/c/c3/BTNHeroDreadLord.png',
  bara: 'https://static.wikia.nocookie.net/wowpedia/images/3/3f/BTNTauren.png',
  abaddon: 'https://static.wikia.nocookie.net/wowpedia/images/1/13/BTNHeroDeathKnight.png'
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

const formatTime = (minutes) => {
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
};

const generateTimelineItems = (playerItems) => {
  return Array(25).fill(null).map((_, index) => {
    if (index < playerItems.length && playerItems[index] !== null) {
      const item = playerItems[index];
      if (item.type === 'plus') {
        return { type: 'plus' };
      }
      return {
        type: 'item',
        icon: item.icon,
        time: item.time,
        isPowerful: item.isPowerful
      };
    }
    return null;
  });
};

const PlayStyleTimeline = () => {
  const timelineData = [
    {
      team: 'SENTINEL',
      players: [
        {
          name: 'shuname',
          hero: 'pudge',
          country: 'ru',
          color: playerColors[0],
          items: generateTimelineItems([
            { type: 'item', icon: 'item1', time: 0 },
            { type: 'plus' },
            { type: 'item', icon: 'item2', time: 8, isPowerful: true },
            null,
            { type: 'item', icon: 'item3', time: 15 },
            { type: 'plus' },
            { type: 'item', icon: 'item4', time: 21, isPowerful: true },
            null,
            { type: 'item', icon: 'item5', time: 25 },
            { type: 'plus' },
            null,
            { type: 'item', icon: 'item1', time: 38 },
            { type: 'plus' },
            { type: 'item', icon: 'item2', time: 45 }
          ])
        },
        {
          name: 'TheSystem',
          hero: 'nyx',
          country: 'kz',
          color: playerColors[1],
          items: generateTimelineItems([
            { type: 'item', icon: 'item6', time: 2 },
            null,
            { type: 'item', icon: 'item2', time: 7, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item4', time: 13 },
            null,
            { type: 'item', icon: 'item1', time: 19 },
            { type: 'plus' },
            null,
            { type: 'item', icon: 'item5', time: 33, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item2', time: 39 },
            null,
            { type: 'item', icon: 'item4', time: 46 }
          ])
        },
        {
          name: 'Uzoomak1',
          hero: 'sf',
          country: 'ru',
          color: playerColors[2],
          items: generateTimelineItems([
            { type: 'item', icon: 'item3', time: 1 },
            { type: 'plus' },
            { type: 'item', icon: 'item5', time: 6, isPowerful: true },
            null,
            { type: 'plus' },
            { type: 'item', icon: 'item6', time: 20, isPowerful: true },
            null,
            { type: 'item', icon: 'item1', time: 27 },
            { type: 'plus' },
            { type: 'item', icon: 'item4', time: 34 },
            null,
            { type: 'item', icon: 'item3', time: 41 },
            { type: 'plus' },
            { type: 'item', icon: 'item5', time: 48 }
          ])
        },
        {
          name: 'Player-X',
          hero: 'bara',
          country: 'ru',
          color: playerColors[3],
          items: generateTimelineItems([
            { type: 'item', icon: 'item4', time: 3, isPowerful: true },
            null,
            { type: 'item', icon: 'item1', time: 9 },
            { type: 'plus' },
            { type: 'item', icon: 'item6', time: 16, isPowerful: true },
            null,
            { type: 'item', icon: 'item3', time: 24 },
            { type: 'plus' },
            { type: 'item', icon: 'item5', time: 28 },
            null,
            { type: 'item', icon: 'item2', time: 35 },
            { type: 'plus' },
            { type: 'item', icon: 'item4', time: 42 }
          ])
        },
        {
          name: 'Maga_4',
          hero: 'abaddon',
          country: 'ru',
          color: playerColors[4],
          items: generateTimelineItems([
            { type: 'item', icon: 'item5', time: 4 },
            { type: 'plus' },
            { type: 'item', icon: 'item3', time: 10, isPowerful: true },
            null,
            { type: 'plus' },
            { type: 'item', icon: 'item2', time: 23 },
            null,
            { type: 'item', icon: 'item6', time: 29, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item4', time: 36 },
            null,
            { type: 'item', icon: 'item5', time: 43 },
            { type: 'plus' },
            { type: 'item', icon: 'item3', time: 50 }
          ])
        }
      ]
    },
    {
      team: 'SCOURGE',
      players: [
        {
          name: 'shuname',
          hero: 'pudge',
          country: 'ru',
          color: playerColors[0],
          items: generateTimelineItems([
            { type: 'item', icon: 'item2', time: 2 },
            null,
            { type: 'item', icon: 'item6', time: 8, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item3', time: 15 },
            null,
            { type: 'item', icon: 'item5', time: 21, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item1', time: 28 },
            null,
            { type: 'item', icon: 'item4', time: 35 },
            { type: 'plus' },
            { type: 'item', icon: 'item2', time: 42 },
            null,
            { type: 'item', icon: 'item6', time: 49 }
          ])
        },
        {
          name: 'TheSystem',
          hero: 'nyx',
          country: 'kz',
          color: playerColors[1],
          items: generateTimelineItems([
            { type: 'item', icon: 'item4', time: 3, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item1', time: 9 },
            null,
            { type: 'item', icon: 'item6', time: 16 },
            { type: 'item', icon: 'item2', time: 22, isPowerful: true },
            null,
            { type: 'item', icon: 'item5', time: 29 },
            { type: 'plus' },
            null,
            { type: 'item', icon: 'item4', time: 43 },
            { type: 'plus' },
            { type: 'item', icon: 'item1', time: 50 }
          ])
        },
        {
          name: 'Uzoomak1',
          hero: 'sf',
          country: 'ru',
          color: playerColors[2],
          items: generateTimelineItems([
            { type: 'item', icon: 'item3', time: 4 },
            null,
            { type: 'item', icon: 'item5', time: 10, isPowerful: true },
            { type: 'item', icon: 'item1', time: 17 },
            null,
            { type: 'item', icon: 'item4', time: 23, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item2', time: 30 },
            null,
            { type: 'plus' },
            { type: 'item', icon: 'item3', time: 44 },
            { type: 'item', icon: 'item5', time: 51 }
          ])
        },
        {
          name: 'Player-X',
          hero: 'bara',
          country: 'ru',
          color: playerColors[3],
          items: generateTimelineItems([
            { type: 'item', icon: 'item6', time: 5, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item2', time: 11 },
            null,
            { type: 'item', icon: 'item3', time: 24, isPowerful: true },
            null,
            { type: 'item', icon: 'item1', time: 31 },
            { type: 'plus' },
            null,
            { type: 'item', icon: 'item6', time: 45 },
            { type: 'plus' }
          ])
        },
        {
          name: 'Maga_4',
          hero: 'abaddon',
          country: 'ru',
          color: playerColors[4],
          items: generateTimelineItems([
            { type: 'item', icon: 'item1', time: 6 },
            null,
            { type: 'item', icon: 'item4', time: 12, isPowerful: true },
            { type: 'plus' },
            { type: 'item', icon: 'item6', time: 19, isPowerful: true },
            null,
            { type: 'plus' },
            { type: 'item', icon: 'item5', time: 32 },
            null,
            { type: 'item', icon: 'item3', time: 39 },
            { type: 'plus' },
            { type: 'item', icon: 'item1', time: 46 },
            null
          ])
        }
      ]
    }
  ];

  return (
    <div className="">
      {timelineData.map((teamData, teamIndex) => (
        <div key={teamIndex} className="my-5 bg-[#12151B] p-4 rounded-lg">
          {/* Timeline Numbers */}
          <div className="flex">
            <h3 className="text-white text-lg mb-4 w-[200px]">{teamData.team}</h3>
            <div className="flex-1 grid grid-cols-25 gap-0">
              {Array(25).fill(null).map((_, index) => (
                <div key={index} className="h-6 flex items-center justify-center">
                  <span className="text-[#8993A6] text-xs">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Players */}
          <div className="space-y-[2px]">
            {teamData.players.map((player, playerIndex) => (
              <div key={playerIndex} className="relative">
                <div className="flex justify-between items-center">
                  {/* Player Info */}
                  <div className="w-[200px] flex items-center gap-2 p-2 ">
                    <div className="relative">
                      <div
                        className="absolute w-1 h-12 rounded-l-sm"
                        style={{
                          backgroundColor: player.color,
                          left: '-0.5rem',
                          top: '0'
                        }}
                      />
                      <img
                        src={heroIcons[player.hero]}
                        alt={player.hero}
                        className="w-12 h-12 rounded"
                      />
                    </div>
                    <div className="ml-1">
                      <div className="flex items-center">
                        <img
                          src={flagIcons[player.country]}
                          alt={player.country}
                          className="w-4 h-3 mx-1"
                        />
                        <span className="text-white">{player.name}</span>
                      </div>
                      <div className="text-[#8993A6] text-xs capitalize">
                        {player.hero.replace('_', ' ')}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Grid */}
                  <div className="flex-1 grid grid-cols-25 gap-2">
                    {player.items.map((item, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 flex items-center justify-center relative ${
                          !item 
                            ? 'border border-[#1A1D24] rounded-md bg-[#0D0F13]' 
                            : item.type === 'plus'
                            ? 'bg-black rounded-md'
                            : ''
                        }`}
                      >
                        {item?.type === 'item' ? (
                          <>
                            <img
                              src={itemIcons[item.icon]}
                              alt={item.icon}
                              className={`w-[36px] h-[33px] rounded ${item.isPowerful ? 'border-2 border-[#3893FF]' : ''}`}
                            />
                            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2">
                              <span className={`text-[10px] px-0.5 py-0.3 rounded ${
                                item.isPowerful 
                                  ? 'bg-[#3893FF] text-white' 
                                  : 'bg-black/80 text-[#8993A6]'
                              }`}>
                                {formatTime(item.time)}
                              </span>
                            </div>
                          </>
                        ) : item?.type === 'plus' ? (
                          <img src={plusIcon} alt="plus" className="w-[22px] h-[22px]" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayStyleTimeline;
