import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBox } from '@fortawesome/free-solid-svg-icons'

const CardContent = () => {
  return (
    <>
      <div className='hidden lg:flex flex-row justify-around space-x-3 bg-[#ebedf9] h-24'></div>
        <div className='flex mt-5 lg:-mt-[6%]'>
          {/* container head over */}
          <div className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 px-8 gap-6'>
            {/* card 1 */}
            <div 
              className='
                w-full flex flex-col items-center rounded-lg bg-red-700 p-4 gap-6 space-y-8
                bg-gradient-to-r from-[#efe6db] to-[#d3d5f6] shadow-2xl border border-gray-200
              '
            >
              <div className='w-full px-4 flex flex-row justify-between items-center'>
                <p className='font-bold text-sm'>
                  Your Working Balance
                </p>
                <p className='text-xs text-slate-700 underline'>
                  Saving Account
                </p>
              </div>
              <div className='w-full px-4 flex flex-row justify-between items-end space-x-6'>
                <p className='font-bold text-xl'>
                  PKR 9,250,000
                </p>
                <p className='text-xs font-bold'>
                  <span>PKR</span> <FontAwesomeIcon icon={faChevronDown} size="xs" />
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div 
              className='
                w-full flex flex-col items-center rounded-lg bg-red-700 p-4 gap-6 space-y-6
                bg-gradient-to-r from-[#fcedd0] to-[#e0b8bf] shadow-2xl border border-gray-200
              '
            >
              <div className='w-full px-4 flex flex-row justify-between items-center'>
                <p className='font-bold text-sm'>
                  Your Working Balance
                </p>
                <p className='text-xs text-slate-700'>
                  <span className='bg-gray-400 px-2 py-0.5 rounded-full text-sm font-bold text-white'>
                          ?
                    </span>
                </p>
              </div>
              <div className='w-full px-4 flex flex-row justify-center items-center space-x-3'>
                  <div className='flex items-center justify-center bg-[#ebb5ab] rounded-full p-4 h-full'>
                    <FontAwesomeIcon icon={faBox} color='#8c271a' size='xl' />
                  </div>
                  <div className='w-full flex flex-col'>
                    <span className='text-xl font-bold text-rose-600'>4.28%</span> 
                    <span className='text-xs font-bold'>Your spanding increased</span> 
                  </div>
                </div>
            </div>
            {/* card 3 */}
            <div 
              className='
                w-full flex flex-col items-center rounded-lg bg-red-700 p-4 gap-3
                bg-gradient-to-r from-[#76a381] to-blue-400 shadow-2xl 
              '
            >
              <div className='w-full px-4 flex flex-row justify-between items-center'>
                <div className='relative flex flex-row'>
                  <div className='bg-gray-600 p-2.5 rounded-full ml-3'></div>
                  <div className='absolute left-0 bg-black p-2.5 rounded-full'></div>
                </div>
              </div>
              <div className='w-full px-4 flex flex-col'>
                <p className='font-normal text-[0.7rem]'>CARD NUMBER</p>
                <p className='font-bold text-2xl'>
                  3829 4820 4629 5025
                </p>
              </div>
              <div className='w-full px-4 mt-2 flex flex-col'>
                  <div className='flex flex-row justify-between'>
                    <div className='w-full flex flex-col'>
                      <span className='text-[0.5rem]'>CARD HOLDER NAME</span>
                      <span className='font-bold'>Anita Rose</span>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                      <span className='text-[0.5rem]'>VAID THRU</span>
                      <span className='font-bold'>09/17</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          {/* head 1  color*/}
          {/* bottom 2  empty*/}
          <div className='h-24 md:h-28 lg:h-24'></div>
        </div>
    </>
  )
}

export default CardContent