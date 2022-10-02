import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChartBar = ({item}) => {
  return (
    <div className='w-full flex flex-row space-x-1'>
        {/* Text */}
        <div className='w-full flex flex-col justify-center flex-wrap'>
            <p className='text-sm md:text-md lg:text-sm font-bold text-gray-500'>Tasks in Progress</p>
            <div className='flex flex-row justify-between flex-wrap'>
                <p className={`font-bold text-lg md:text-2xl lg:text-lg ${item.textColor}`}>
                    210
                </p>
                <div className={`
                        flex items-center space-x-0.5                      
                        font-bold px-2 py-1 rounded-full text-red-700
                        ${item.bgColor} text-[0.7em]
                `}>
                    <span>23</span>
                    <FontAwesomeIcon icon={faArrowTrendUp} size='xs' />
                </div>
            </div>
            <p className='text-sm font-bold text-gray-500'>Current Month</p>
        </div>
        {/* Bar */}
        <div className='w-auto flex flex-row justify-between items-end space-x-2 md:space-x-5 lg:space-x-2'>
            {item?.content.map((item, i)=>{
                return(
                    <div key={i} className={`${item.color} p-2 md:p-4 lg:p-3 ${item.high} rounded-md`}>
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}

export default ChartBar