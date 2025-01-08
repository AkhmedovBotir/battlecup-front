import left from "../../assets/svg/left.svg";
import ranking from "../../assets/svg/ranking.svg";
import rank from "../../img/5+.png";
import menu05 from "../../assets/svg/menu-05.svg";
import rekurt from "../../img/bronze.png";
import team from "../../img/team.png";
export default function profileStatistics() {
  return (
    <div className='mt-6'>
      <div className='flex flex-row justify-between gap-4'>
        {/* Dota reyting */}
        <div className="flex-1 bg-[#12151B] border border-[#181C25]">
          <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
            <div className='flex items-center gap-2'>

              <span className='text-[#8B95A9]'>Рейтинг статистика</span>
            </div>

          </div>
          <div className='flex flex-row'>
            <div className="flex flex-col justify-evenly">
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row ">
                  <img src={ranking} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Рейтинг очки:</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <img src={rank} className='w-[28px] h-[20px]' />
                  <span className='text-[#BCC3D0] text-[15px]'>2565 pts</span>
                </div>
              </div>
              <div className='border-b border-[#181C25]'></div>
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row">
                  <img src={menu05} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Место в рейтинге</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <span className='text-[#BCC3D0] text-[15px]'>#2165</span>
                </div>
              </div>
              <div className="p-4 flex flex-row justify-between w-[21.6rem]">
                <div className="gap-2 flex flex-row">
                  <img src={menu05} className='w-[18px] h-[18px]' />
                  <span className='text-[#8993A6] text-[15px]'>Показатель Скилла</span>
                </div>
                <div className="gap-2 flex flex-row w-[30%]">
                  <span className='text-[#BCC3D0] text-[15px] border border-[#871313] px-2 rounded font-[600] text-[#871313]'>S 2.7</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full border-l border-[#181C25]'>
              <img src={rekurt} className='w-[101px] h-[101px]' />
              <div className='text-[#BD7D40] text-[15px] font-[700] bg-[#452910] px-[8px] py-[1px] rounded-[4px] mb-[14px]'>РЕКУРТ I</div>
            </div>
          </div>
        </div>

        {/* Komanda */}
        <div className="flex-1 bg-[#12151B] border border-[#181C25]">
          <div className='p-4 flex items-center justify-between border-b border-[#181C25]'>
            <div className='flex items-center gap-2'>

              <span className='text-[#8B95A9]'>Игровая статистика</span>
            </div>

          </div>
          <div className='flex items-center gap-3 p-4 h-[130px]'>
            
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}
