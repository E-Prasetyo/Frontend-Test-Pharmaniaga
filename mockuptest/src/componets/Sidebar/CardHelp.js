import React from 'react'

const CardHelp = () => {
  return (
    <>
        <div className='hidden md:inline-block relative pt-1 mt-8 my-6'>
            <div className='flex justify-center items-center'>
                <div className='absolute top-0 bg-white rounded-full p-2'>
                    <span className='bg-orange-600 px-2 py-0.5 rounded-full text-sm font-bold text-white'>
                        ?
                    </span>
                </div>
                <div 
                    className='
                        flex justify-center items-center mt-3 p-3 rounded-lg
                        bg-gradient-to-r from-[#76a381] to-blue-400 shadow-2xl
                    '
                >
                    <div className='flex flex-col py-6 text-center space-y-5'>
                        <div className='font-bold'>Help Center</div>
                        <div className='text-xs font-medium'>
                        Having trouble in  Fitti. Please contact us for more questions
                        </div>
                        <button className='bg-white rounded-lg font-bold text-sm p-1'>
                        Go To Help Center
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='sm:hidden mt-10'>
            <button className='
                bg-white rounded-lg font-bold text-xs p-1 
                bg-gradient-to-r from-[#76a381] to-blue-400 shadow-2xl
            '>
                Go To Help Center
            </button>
        </div>
       
</>
  )
}

export default CardHelp