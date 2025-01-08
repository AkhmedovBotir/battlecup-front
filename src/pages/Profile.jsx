import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import banner from '../img/banner.png'
import avatar from '../img/avatar.png'
import Navbar from '../components/Navbar'
import ProfileStats from '../components/profile/ProfileStats'
import rankBadge from '../assets/svg/rank-badge.svg'
import onlineStatus from '../assets/svg/online-status.svg'
import userAdd from '../assets/svg/user-add.svg'
import back from "../assets/svg/back.svg"
import mail from "../assets/svg/mail.svg"
import menu from "../assets/svg/menu.svg"
import copy from "../assets/svg/copy.svg"
import telegram from "../assets/svg/telegram.svg"
import instagram from "../assets/svg/instagram.svg"
import whatsapp from "../assets/svg/whatsapp.svg"
import vk from "../assets/svg/vk.svg"
import ProfileStatistics from '../components/profile/profileStatistics'

export default function Profile() {
    const user = {
        id: '864844',
        nickname: 'Uzoomak1',
        rank: 'General Manager',
        country: 'Uzbekistan',
        gender: 'Мужской',
        age: '29 лет',
        registrationDate: '12.08.2024',
        timeOnSite: '3 года',
        rating: '2565 pts',
        team: 'BattleCup Team',
        teamRating: '2565 pts',
        teamTag: '[BCT]',
        teamMembers: '7',
        flag: 'https://flagcdn.com/w40/uz.png',

    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className='min-h-screen bg-[#0B0D10]'>
            {/* Header */}
            <Navbar user={user} />

            {/* Profile */}
            <div className='w-[1062px] mx-auto px-4'>
                {/* Back and Title */}
                <div className='flex items-center justify-between py-3'>
                    <Link to="/" className='text-[#8B95A9] hover:text-white flex items-center space-x-2'>
                        <img src={back} />
                        <span>назад</span>
                    </Link>
                    <h1 className='text-white w-full text-center'>Профиль пользователя — {user.nickname}</h1>
                </div>

                {/* Profile Card */}
                <div className='bg-[#12151B] rounded-lg overflow-hidden mt-4 border border-[#181C25]'>
                    {/* Banner and Avatar */}
                    <div className='relative h-[205px]'>
                        <div className='w-full h-full' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    </div>

                    {/* User Info */}
                    <div className='px-8 flex flex-row space-y-4'>
                        <div className='relative mt-[-5rem]'>
                            <div className='relative'>
                                <img src={avatar} alt="Avatar" className='w-[10.625rem] h-[10.625rem] rounded-lg border-4 border-[#12151B]' />
                            </div>
                        </div>
                        <div className='flex items-end h-full justify-between w-full'>
                            <div className='flex flex-col items-start ml-[1.5rem]'>
                                <div className='flex flex-row space-y-1 items-center'>
                                    <img src={user.flag} alt="Country" className='w-[1.25rem] h-[1.063rem] rounded' />
                                    <h1 className='text-white text-[1.25rem] px-2 mt-0'>{user.nickname}</h1>
                                    <div className='flex items-center space-x-1 mx-3'>
                                        <img src={rankBadge} alt="Rank Badge" />
                                        <p className='text-transparent bg-clip-text bg-gradient-to-t from-[#FE3030] to-[#FFB342] font-medium'>
                                            {user.rank}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2 mt-[14px]'>
                                    <img src={onlineStatus} alt="Online Status" />
                                    <p className='text-[#20C867] text-gradient-to-r from-[#153B73] to-[#1E498A]'>Сейчас в сети</p>
                                </div>
                            </div>
                            <div className='flex items-center h-full space-x-3'>
                                <button className='border border-[#2576F0] bg-gradient-to-t from-[#153B73] to-[#1E498A] hover:from-[#1E498A] hover:to-[#153B73] text-[#fff] font-medium py-3 px-4 rounded-md transition-all duration-300 flex gap-2 flex-row items-center'>
                                    <img src={userAdd} alt="" />
                                    Добавить в друзья
                                </button>
                                <button
                                    type="button"
                                    className='border border-[#333A49] bg-gradient-to-t from-[#1B1F27] to-[#232833] hover:from-[#232833] hover:to-[#1B1F27] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300 flex gap-2 flex-row items-center'
                                >
                                    <img src={mail} />
                                    Сообщение
                                </button>
                                <div className='relative'>
                                    <button
                                        type="button"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className='border border-[#333A49] bg-gradient-to-t from-[#1B1F27] to-[#232833] hover:from-[#232833] hover:to-[#1B1F27] text-[#D6E6FF] font-medium py-3 px-4 rounded-md transition-all duration-300 flex gap-2 flex-row items-center'
                                    >
                                        Ещё
                                        <img src={menu} alt="Menu" className='text-white' />
                                    </button>
                                        {isMenuOpen && (
                                            <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg border border-[#333A49] bg-[#1A1D26] ring-1 ring-black ring-opacity-5'>
                                                <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                                                    <button
                                                        className='block w-full px-4 py-2 text-sm text-[#D6E6FF] hover:bg-[#232833] text-left'
                                                        role='menuitem'
                                                    >
                                                        Заблокировать
                                                    </button>
                                                    <button
                                                        className='block w-full px-4 py-2 text-sm text-[#D6E6FF] hover:bg-[#232833] text-left'
                                                        role='menuitem'
                                                    >
                                                        Пожаловаться
                                                    </button>
                                                    <button
                                                        className='block w-full px-4 py-2 text-sm text-[#FF4D4D] hover:bg-[#232833] text-left'
                                                        role='menuitem'
                                                    >
                                                        В черный список
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-5 mt-10 h-0 border-b border-[#181C25]'></div>

                    {/* User Stats */}
                    <div className='flex items-center justify-between px-6 py-4 space-x-8'>
                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>ID номер</span>
                            <div className='flex items-center'>
                                <span className='text-[#BCC3D0]'>{user.id}</span>
                                <button className='hover:bg-[#232833] p-1 rounded-md transition-colors'>
                                    <img src={copy} alt="copy" />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>Имя</span>
                            <span className='text-[#BCC3D0]'>{user.nickname}</span>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>Местоположение</span>
                            <div className='flex items-center'>
                                <img src={user.flag} alt="Country" className='w-4 h-4 rounded mr-2' />
                                <span className='text-[#BCC3D0]'>{user.country}</span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>Пол</span>
                            <span className='text-[#BCC3D0]'>{user.gender}</span>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>Возраст</span>
                            <span className='text-[#BCC3D0]'>{user.age}</span>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>Регистрация</span>
                            <span className='text-[#BCC3D0]'>{user.registrationDate}</span>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>На сайте</span>
                            <span className='text-[#BCC3D0]'>{user.timeOnSite}</span>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-[#8B95A9]'>Ссылки</span>
                            <div className='flex items-center space-x-2'>
                                <a href="#" className='text-[#229ED9] hover:opacity-80 transition-opacity'>
                                    <img src={telegram} alt="Telegram" />
                                </a>
                                <a href="#" className='text-[#E4405F] hover:opacity-80 transition-opacity'>
                                    <img src={instagram} alt="Instagram" />
                                </a>
                                <a href="#" className='text-[#25D366] hover:opacity-80 transition-opacity'>
                                    <img src={whatsapp} alt="WhatsApp" />
                                </a>
                                <a href="#" className='text-[#0077FF] hover:opacity-80 transition-opacity'>
                                    <img src={vk} alt="VK" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className='flex justify-around mt-8 border border-[#181C25] bg-[#12151B]'>
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`py-5 ${activeTab === 'profile' ? 'text-white border-b-2 border-[#2576F0]' : 'text-[#8B95A9]'} hover:text-white -mb-[2px]`}
                    >
                        Профиль
                    </button>
                    <button
                        onClick={() => setActiveTab('dota')}
                        className={`py-5 ${activeTab === 'dota' ? 'text-white border-b-2 border-[#2576F0]' : 'text-[#8B95A9]'} hover:text-white -mb-[2px]`}
                    >
                        Дота статистика
                    </button>
                    <button
                        onClick={() => setActiveTab('matches')}
                        className={`py-5 ${activeTab === 'matches' ? 'text-white border-b-2 border-[#2576F0]' : 'text-[#8B95A9]'} hover:text-white -mb-[2px]`}
                    >
                        Матчлист
                    </button>
                    <button
                        onClick={() => setActiveTab('awards')}
                        className={`py-5 ${activeTab === 'awards' ? 'text-white border-b-2 border-[#2576F0]' : 'text-[#8B95A9]'} hover:text-white -mb-[2px]`}
                    >
                        Награды
                    </button>
                    <button
                        onClick={() => setActiveTab('forums')}
                        className={`py-5 ${activeTab === 'forums' ? 'text-white border-b-2 border-[#2576F0]' : 'text-[#8B95A9]'} hover:text-white -mb-[2px]`}
                    >
                        Форумы
                    </button>
                </div>

                {/* Tab Content */}
                <div className='mt-6'>
                    {activeTab === 'profile' && <ProfileStats />}
                    {activeTab === 'dota' && <ProfileStatistics />}
                    {activeTab === 'matches' && <div className='text-white'>O'yinlar ro'yxati tez orada...</div>}
                    {activeTab === 'awards' && <div className='text-white'>Mukofotlar tez orada...</div>}
                    {activeTab === 'forums' && <div className='text-white'>Forum postlari tez orada...</div>}
                </div>
            </div>
        </div>
    )
}