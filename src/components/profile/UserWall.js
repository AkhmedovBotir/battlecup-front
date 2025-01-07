import React from 'react';

const posts = [
  {
    id: 1,
    author: {
      name: "shunamehateyo",
      avatar: "/img/avatar.png",
      badge: "/svg/mcdonalds.svg",
      isPinned: true,
      timestamp: "вчера в 17:15"
    },
    content: "Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни. Дота турниры дадут тебе все необходимые ощущения и напряжение, которое ты никогда не испытывал!",
    replies: [
      {
        id: 2,
        author: {
          name: "Uzoomak1",
          avatar: "/img/avatar.png",
          country: "ru",
          timestamp: "вчера в 17:15"
        },
        replyTo: {
          name: "shuname",
          avatar: "/img/avatar.png",
          badge: "/svg/mcdonalds.svg"
        },
        content: "Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни. Дота турниры дадут тебе все необходимые ощущения и напряжение, которое ты никогда не испытывал!",
        likes: 1,
        replies: [
          {
            id: 3,
            author: {
              name: "Player-x",
              avatar: "/img/avatar.png",
              badge: "/svg/duck.svg",
              timestamp: "вчера в 17:15"
            },
            content: "Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    author: {
      name: "shunamehateyo",
      avatar: "/img/avatar.png",
      badge: "/svg/mcdonalds.svg",
      timestamp: "вчера в 17:15"
    },
    banned: {
      until: "25.12.2024 16:55",
      reason: "Оскорбление"
    }
  }
];

export default function UserWall() {
  const renderReply = (reply, level = 0) => {
    return (
      <div key={reply.id} className='relative'>
        <div className='flex items-start gap-3 group'>
          <div className='absolute left-5 top-[52px] bottom-0 w-[2px] bg-[#181C25] group-last:hidden'></div>
          <img src={reply.author.avatar} alt="Avatar" className='w-[46px] h-[46px] rounded-lg' />
          <div className='flex-1'>
            <div className='flex items-center gap-2 mb-1'>
              <div className='flex items-center gap-2'>
                {reply.author.badge && <img src={reply.author.badge} alt="Badge" className='w-4 h-4' />}
                <span className='text-white'>{reply.author.name}</span>
                {reply.author.country && (
                  <img src={`/img/${reply.author.country}.png`} alt="Country" className='w-4 h-3' />
                )}
              </div>
              <div className='flex items-center gap-3 ml-auto'>
                <button>
                  <img src="/svg/edit.svg" alt="Edit" className='w-4 h-4' />
                </button>
                <button>
                  <img src="/svg/delete.svg" alt="Delete" className='w-4 h-4' />
                </button>
                <button>
                  <img src="/svg/user-block.svg" alt="Block" className='w-4 h-4' />
                </button>
                <button>
                  <img src="/svg/alert.svg" alt="Alert" className='w-4 h-4' />
                </button>
              </div>
            </div>

            {reply.replyTo && (
              <div className='flex items-center gap-2 text-sm mb-2'>
                <img src="/svg/reply-small.svg" alt="Reply" className='w-4 h-4' />
                <img src={reply.replyTo.avatar} alt="Reply Avatar" className='w-4 h-4 rounded' />
                {reply.replyTo.badge && <img src={reply.replyTo.badge} alt="Badge" className='w-3 h-3' />}
                <span className='text-[#8B95A9]'>{reply.replyTo.name}</span>
              </div>
            )}

            <p className='text-[#D6E6FF] mb-2'>{reply.content}</p>

            <div className='flex items-center justify-between text-sm'>
              <div className='flex items-center gap-2'>
                <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
                  <img src="/svg/reply.svg" alt="Reply" />
                  Ответить
                </button>
                <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
                  <img src="/svg/like.svg" alt="Like" />
                  Нравится {reply.likes && <span className='text-[#2576F0]'>{reply.likes}</span>}
                </button>
              </div>
              <span className='text-[#8B95A9]'>{reply.author.timestamp}</span>
            </div>

            {reply.replies && reply.replies.length > 0 && (
              <div className='mt-4 space-y-4'>
                {reply.replies.map(subReply => renderReply(subReply, level + 1))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderPost = (post) => {
    return (
      <div key={post.id} className='bg-[#12151B] rounded-lg p-4 mb-4'>
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center gap-3'>
            <img src={post.author.avatar} alt="Avatar" className='w-[46px] h-[46px] rounded-lg' />
            <div>
              <div className='flex items-center gap-2'>
                {post.author.badge && <img src={post.author.badge} alt="Badge" className='w-4 h-4' />}
                <span className='text-white'>{post.author.name}</span>
                {post.author.isPinned && (
                  <div className='flex items-center gap-1 text-[#8B95A9] text-sm'>
                    <img src="/svg/pin.svg" alt="Pin" className='w-4 h-4' />
                    прикреплено
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button>
              <img src="/svg/edit.svg" alt="Edit" className='w-4 h-4' />
            </button>
            <button>
              <img src="/svg/delete.svg" alt="Delete" className='w-4 h-4' />
            </button>
            <button>
              <img src="/svg/user-block.svg" alt="Block" className='w-4 h-4' />
            </button>
            <button>
              <img src="/svg/alert.svg" alt="Alert" className='w-4 h-4' />
            </button>
          </div>
        </div>

        {post.banned ? (
          <>
            <div className='bg-[#291311] flex items-center gap-4 border border-[#461C19] rounded-lg p-4'>
              <img src="/svg/user-block-red.svg" alt="Banned" className='w-[40px] h-[40px]' />
              <div>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-[#8B95A9]'>@{post.author.name} Получил бан за этот сообщение</span>
              </div>
              <div className='text-[#8B95A9] text-sm'>
                Забанен до: {post.banned.until}
                  <span className='ml-4'>Причина бана: {post.banned.reason}</span>
                </div>
              </div>
            </div>

            <p className='text-[#D6E6FF] mb-4'>{post.content}</p>
            <div className='flex items-center justify-between gap-4 mb-4 text-sm'>
              <div className='flex items-center justify-between gap-2'>
                <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
                  <img src="/svg/reply.svg" alt="Reply" />
                  Ответить
                </button>
                <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
                  <img src="/svg/like.svg" alt="Like" />
                  Нравится {post.likes && <span className='text-[#2576F0]'>{post.likes}</span>}
                </button>
              </div>
              <span className='text-[#8B95A9]'>{post.author.timestamp}</span>
            </div>

            {post.replies && post.replies.length > 0 && (
              <div className='space-y-4 ml-5'>
                {post.replies.map(reply => renderReply(reply))}
              </div>
            )}
          </>
        ) : (
          <>
            <p className='text-[#D6E6FF] mb-4'>{post.content}</p>
            <div className='flex items-center justify-between gap-4 mb-4 text-sm'>
              <div className='flex items-center justify-between gap-2'>
                <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
                  <img src="/svg/reply.svg" alt="Reply" />
                  Ответить
                </button>
                <button className='flex items-center gap-2 text-[#8B95A9] hover:text-white transition-colors'>
                  <img src="/svg/like.svg" alt="Like" />
                  Нравится {post.likes && <span className='text-[#2576F0]'>{post.likes}</span>}
                </button>
              </div>
              <span className='text-[#8B95A9]'>{post.author.timestamp}</span>
            </div>

            {post.replies && post.replies.length > 0 && (
              <div className='space-y-4 ml-5'>
                {post.replies.map(reply => renderReply(reply))}
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className='bg-[#12151B] border border-[#181C25] rounded-lg'>
      <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
        <div className='flex items-center gap-2'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 10.0003C17.5 14.1423 14.142 17.5003 10 17.5003C5.858 17.5003 2.5 14.1423 2.5 10.0003C2.5 5.85833 5.858 2.50033 10 2.50033" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3333 10.0003C13.3333 11.841 11.8407 13.3337 10 13.3337C8.15933 13.3337 6.66667 11.841 6.66667 10.0003C6.66667 8.15967 8.15933 6.66699 10 6.66699" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.1666 2.5V5.83333H17.4999" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 2.5L14.1667 5.83333" stroke="#8993A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className='text-[#8B95A9]'>Стена пользователя</span>
        </div>
      </div>

      <div className='p-4'>
        <div className='flex items-center gap-3 mb-4'>
          <img src="/img/avatar.png" alt="Avatar" className='w-[46px] h-[46px] rounded-lg' />
          <div className='flex-1'>
            <input
              type="text"
              placeholder="Что у вас нового?"
              className='w-full bg-[#0B0D10] border border-[#181C25] rounded-lg px-4 py-2 text-[#8B95A9] focus:outline-none focus:border-[#2576F0]'
            />
          </div>
          <button className='bg-[#2576F0] text-white px-4 py-2 rounded-lg hover:bg-[#1b5fd8] transition-colors'>
            Отправить
          </button>
        </div>

        <div className='space-y-4'>
          {posts.map(renderPost)}
        </div>
      </div>
    </div>
  );
}
