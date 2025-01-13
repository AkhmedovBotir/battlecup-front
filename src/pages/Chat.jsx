import React from 'react'
import icon from "../assets/svg/sword2.svg"
import heroIcon from "../img/avatar.png"

const Chat = () => {
  const messages = [
    {
      time: '00:00',
      type: 'system',
      text: 'Shortest load by Term$_ was 3.27 seconds'
    },
    {
      time: '00:00',
      type: 'system',
      text: 'Longest load by URANIA, was 12.62 seconds'
    },
    {
      time: '00:00',
      type: 'system',
      text: 'Your load time was 3.36 seconds'
    },
    {
      time: '00:00',
      type: 'system',
      text: 'Your GameID is: #76355038'
    },
    {
      time: '00:05',
      type: 'sentinel',
      player: 'TheSystem',
      text: 'Berite kogo ugodno'
    },
    {
      time: '00:05',
      type: 'sentinel',
      player: 'shuname',
      text: 'ya mid'
    },
    {
      time: '00:05',
      type: 'sentinel',
      player: 'TheSystem',
      text: 'ok sli'
    },
    {
      time: '00:05',
      type: 'scourge',
      player: 'Uzoomak1',
      text: 'kupite ward'
    },
    {
      time: '00:05',
      type: 'all chat',
      player: 'TheSystem',
      text: 'vam ne vygrat'
    },
    {
      time: '00:05',
      type: 'all chat',
      player: 'Uzoomak1',
      text: 'eto tochno'
    },
    {
      time: '00:05',
      type: 'host bot',
      text: 'Queen of pain was banned.'
    },
    {
      time: '00:05',
      type: 'host bot',
      text: 'Weaver was banned.'
    },
    {
      time: '00:05',
      type: 'host bot',
      text: 'Bristlehum was banned.'
    },
    {
      time: '00:05',
      type: 'scourge',
      text: `НАЧАЛО ИГРЫ`
    },
    {
      time: '00:05',
      type: 'scourge',
      player: 'Uzoomak1',
      text: 'eto tochno'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Uzoomak1',
      text: 'purchased an Observer Ward'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Uzoomak1',
      text: 'purchased an Observer Ward'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: '',
      icon: '423'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Uzoomak1',
      text: '',
      icon: '423'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: 'achieved DOUBLEKILL'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: 'achieved TRIPLEKILL'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: 'achieved ULTRAKILL'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: 'achieved RAMPAGE'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: 'achieved RAMPAGE'
    },
    {
      time: '00:00',
      type: 'system',
      player: 'shuname',
      text: 'has paused the game'
    },
    {
      time: '00:00',
      type: 'system',
      player: 'Maga_4',
      text: 'has resumed the game'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: 'destroyed bottom T1 tower'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Maga_4',
      text: 'destroyed top T2 tower'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'TheSystem',
      text: 'Drew First Blood',
      icon: '423'
    },
    {
      time: '00:05',
      type: 'game log',
      text: 'Have slain Roshan',
      additional: {
        player1: 'shuname',
        player2: 'Подобрал Aegis'
      }
    },
    {
      time: '00:05',
      type: 'game log',
      text: 'Have slain Roshan',
      additional: {
        player1: 'Maga_4',
        player2: 'Подобрал Aegis'
      }
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Maga_4',
      text: 'Подобрал руну Двойного Урона'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Maga_4',
      text: 'Подобрал руну Ускорения'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Maga_4',
      text: 'Подобрал руну Регенерации'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Maga_4',
      text: 'Подобрал руну Иллюзий'
    },
    {
      time: '00:05',
      type: 'host bot',
      player: 'Maga_4',
      text: 'left the game'
    },
    {
      time: '00:05',
      type: 'host bot',
      player: 'TheSystem',
      text: 'reconnected to game'
    },
    {
      time: '00:05',
      type: 'game log',
      player: 'Maga_4',
      text: 'destroyed top range rax'
    },
    {
      time: '00:00',
      type: 'system',
      text: 'Sentinel has won the game !!!'
    }
  ];

  const getMessageStyle = (type) => {
    switch(type) {
      case 'system':
        return 'text-[#8993A6] border-[#8993A6]';
      case 'sentinel':
        return 'text-[#20C867] border-[#20C867]';
      case 'scourge':
        return 'text-[#C23C2A] border-[#C23C2A]';
      case 'all chat':
        return 'text-[#3787FF] border-[#3787FF]';
      case 'host bot':
        return 'text-[#C2B02A] border-[#C2B02A]';
      case 'game log':
        return 'text-[#8993A6] border-[#8993A6]';
      default:
        return 'text-white border-white';
    }
  };

  const getTypeBackground = (type) => {
    switch(type) {
      default:
        return '';
    }
  };

  const getPlayerIcon = (type, player) => {
    const playerHeroes = {
      'TheSystem': 'pudge',
      'shuname': 'lina',
      'Uzoomak1': 'crystal',
      'Maga_4': 'axe'
    };

    const hero = playerHeroes[player] || '';
    
    if (player) {
      return (
        <div className="relative">
          <img 
            src={heroIcon} 
            alt={hero} 
            className="w-5 h-5 rounded-sm"
          />
          {type === 'sentinel' && (
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#20C867] rounded-full border border-[#12151B]" />
          )}
          {type === 'scourge' && (
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#C23C2A] rounded-full border border-[#12151B]" />
          )}
        </div>
      );
    }
    return null;
  };

  const getTypeDisplay = (type) => {
    switch(type) {
      case 'system':
        return 'System';
      case 'sentinel':
        return 'Sentinel';
      case 'scourge':
        return 'Scourge';
      case 'all chat':
        return 'All Chat';
      case 'host bot':
        return 'Host Bot';
      case 'game log':
        return 'Game Log';
      default:
        return type;
    }
  };

  const getAchievementStyle = (text) => {
    if (text.includes('DOUBLEKILL')) return 'text-[#4D88FF]';
    if (text.includes('TRIPLEKILL')) return 'text-[#FFB800]';
    if (text.includes('ULTRAKILL')) return 'text-[#FF00FF]';
    if (text.includes('RAMPAGE')) return 'text-[#FF0000]';
    return '';
  };

  const getGameStartStyle = (text) => {
    if (text === 'НАЧАЛО ИГРЫ') {
      return (
        <div className="flex items-center pl-28 gap-2 w-full -mx-4 px-4 py-1">
          <img src={icon} alt="sword" className="w-4 h-4" />
          <span className="text-[#fff] font-bold tracking-wider">{text}</span>
        </div>
      );
    }
    return <span>{text}</span>;
  };

  const getItemStyle = (text) => {
    if (text.includes('Observer Ward')) {
      return (
        <div className="flex items-center gap-1">
          <span>{text.replace('Observer Ward', '')}</span>
          <img src={icon} alt="ward" className="w-4 h-4" />
          <span>Observer Ward</span>
        </div>
      );
    }
    return text;
  };

  const getBattleStyle = (text) => {
    const parts = text.split(' ');
    if (parts.includes('423')) {
      const players = text.split('/');
      return (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <img src={heroIcon} alt="hero" className="w-5 h-5 rounded-sm" />
            <span className="text-[#20C867]">{players[0]}</span>
          </div>
          <span className="text-[#8993A6]">/</span>
          <div className="flex items-center gap-1">
            <img src={heroIcon} alt="hero" className="w-5 h-5 rounded-sm" />
            <span className="text-[#C23C2A]">{players[1]}</span>
          </div>
          <span className="text-[#FFB800]">➜ 423</span>
        </div>
      );
    }
    return text;
  };

  const getVictoryStyle = (text) => {
    if (text.includes('has won the game')) {
      return (
        <span className="text-[#20C867] font-bold">{text}</span>
      );
    }
    return text;
  };

  const getMessageBackground = (message) => {
    if (message.text === 'НАЧАЛО ИГРЫ') return '';
    if (message.text.includes('Have slain Roshan')) return 'bg-[#181C25]';
    if (message.text.includes('destroyed')) return 'bg-[#181C25]';
    if (message.text.includes('Drew First Blood')) return 'bg-[#181C25]';
    return '';
  };

  return (
    <div className="max-w-[1064px] mx-auto min-h-screen bg-[#0A0C10]">
      <div className="">
        {/* Messages list */}
        <div className="bg-[#12151B] rounded-lg">
          <div className="space-y-0.5 font-mono text-[13px]">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-center gap-2 hover:bg-[#1A1D24] px-4 py-[7px] cursor-pointer border-b border-[#181C25] ${getMessageBackground(message)}`}>
                {message.text !== 'НАЧАЛО ИГРЫ' && (
                  <>
                    <span className="text-[#8993A6] min-w-[45px] font-medium">{message.time}</span>
                    <span className={getMessageStyle(message.type) + ' min-w-[80px] font-medium tracking-wider border px-1.5 py-0.5 rounded text-center text-[12px] ' + getTypeBackground(message.type)}>
                      {getTypeDisplay(message.type)}
                    </span>
                  </>
                )}
                {message.player && message.text !== 'НАЧАЛО ИГРЫ' && !message.text.includes('423') && (
                  <>
                    <span className="flex items-center">
                      {getPlayerIcon(message.type, message.player)}
                    </span>
                    <span className={getMessageStyle(message.type).split(' ')[0] + ' font-medium'}>
                      {message.player}{message.text && ':'}
                    </span>
                  </>
                )}
                <span className={
                  message.text.includes('achieved') 
                    ? getAchievementStyle(message.text.split('achieved ')[1])
                    : message.type === 'system' || message.type === 'game log' ? 'text-[#8993A6]' : 'text-white w-full'
                }>
                  {message.text === 'НАЧАЛО ИГРЫ' 
                    ? getGameStartStyle(message.text)
                    : message.text.includes('423')
                      ? getBattleStyle(message.text)
                      : message.text.includes('has won the game')
                        ? getVictoryStyle(message.text)
                        : getItemStyle(message.text)
                  }
                </span>
                {message.icon && !message.text.includes('423') && (
                  <span className="text-[#FFB800]">➜ {message.icon}</span>
                )}
                {message.additional && (
                  <span className={getMessageStyle(message.type).split(' ')[0]}>
                    <span className="text-white"> → </span>
                    {message.additional.player1}
                    <span className="text-[#8993A6]"> {message.additional.player2}</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
