import React, { useState } from 'react';
import avatarImg from '../../img/avatar.png';
import banUserImg from '../../assets/svg/user-block.svg';

// SVG imports
import pinSvg from '../../assets/svg/pin.svg';
import editSvg from '../../assets/svg/edit.svg';
import userBlockSvg from '../../assets/svg/user-block.svg';
import alertSvg from '../../assets/svg/alert.svg';
import replySvg from '../../assets/svg/reply.svg';
import likeSvg from '../../assets/svg/like.svg';
import mcdonaldsSvg from '../../assets/svg/mcdonalds.svg';
import attachedSvg from '../../assets/svg/mcdonalds.svg';

export default function UserWall() {
  const [newPost, setNewPost] = useState('');

  const posts = [
    {
      id: 1,
      author: {
        name: "Uzoomak1",
        avatar: avatarImg,
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
        avatar: avatarImg,
        badge: mcdonaldsSvg,
        status: "Сейчас в сети",
        timestamp: "вчера в 17:15"
      },
      content: "Человеку иногда надо вкусить немного безумия, чтобы осврешить вкус к жизни. Дота турниры дадут тебе все необходимые ощущения и напряжение, которое ты никогда не испытывал!"
    },
    {
      id: 3,
      author: {
        name: "Player-x",
        avatar: avatarImg,
        timestamp: "вчера в 17:15"
      },
      content: "Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни."
    },
    {
      id: 4,
      author: {
        name: "shunamehateyo",
        avatar: avatarImg,
        badge: mcdonaldsSvg,
        status: "прикреплено",
        timestamp: "вчера в 17:15"
      },
      banned: {
        until: "25.12.2024 16:55",
        reason: "Оскорбление"
      }
    }
  ];

  const renderPost = (post) => {
    return (
      <div key={post.id} className='bg-[#12151B] rounded-lg p-4 mb-4'>
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center gap-2'>
            <img src={post.author.avatar} alt="Avatar" className='w-10 h-10 rounded-lg' />
            <div>
              <div className='flex items-center gap-2'>
                <span className='text-white'>{post.author.name}</span>
                {post.author.badge && <img src={post.author.badge} alt="Badge" className='w-4 h-4' />}
                {post.isPinned && <img src={attachedSvg} alt="Attached" className='w-4 h-4' />}
                {post.author.timestamp && <span className='text-[#8B95A9]'>• {post.author.timestamp}</span>}
              </div>
              {post.author.status && <span className='text-[#8B95A9] text-sm'>{post.author.status}</span>}
            </div>
          </div>
          <div className='flex items-center gap-2'>
            {!post.isPinned && (
              <button>
                <img src={pinSvg} alt="Pin" className='w-5 h-5' />
              </button>
            )}
            <button>
              <img src={editSvg} alt="Edit" className='w-5 h-5' />
            </button>
            <button>
              <img src={userBlockSvg} alt="User Block" className='w-5 h-5' />
            </button>
            <button>
              <img src={alertSvg} alt="Alert" className='w-5 h-5' />
            </button>
          </div>
        </div>
        {post.banned ? (
          <div className='bg-[#0B0D10] rounded-lg p-4 mb-4'>
            <div className='flex items-center gap-2 mb-2'>
              <img src={banUserImg} alt="Ban" className='w-6 h-6' />
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
            <img src={replySvg} alt="Reply" className='w-5 h-5' />
            Ответить
          </button>
          <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
            <img src={likeSvg} alt="Like" className='w-5 h-5' />
            Нравится
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='space-y-4'>
      {/* New Post Input */}
      <div className='bg-[#12151B] rounded-lg p-4'>
        <div className='flex gap-3'>
          <img src={avatarImg} alt="Your Avatar" className='w-10 h-10 rounded-lg' />
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder='Что у вас нового?'
            className='flex-1 bg-[#0B0D10] rounded-lg p-3 text-white placeholder-[#59606F] resize-none min-h-[40px]'
          />
        </div>
        <div className='flex justify-end mt-3'>
          <button className='bg-[#1A64F3] text-white px-4 py-2 rounded-lg hover:bg-[#1557D9] transition-colors'>
            Отправить
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map(renderPost)}
    </div>
  );
}
