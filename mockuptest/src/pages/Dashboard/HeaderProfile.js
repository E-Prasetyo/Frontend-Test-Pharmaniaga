import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSearch, faInbox, faFile, faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons'
import profile from '../../assets/profile.png'

const HeaderProfile = ({handleModal}) => {
  return (
    <div className='w-full flex flex-row justify-between items-start p-5 bg-[#ebedf9]'>
            <div 
                className='
                    hidden w-full md:inline-block lg:inline-flex justify-between items-center px-2
                    md:space-y-3 md:space-x-2
                '
            >
                <div className='bg-white rounded-md px-2 py-1 space-x-3 text-gray-400'>
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                    <input 
                        className='bg-transparent max-w-sm' 
                        type="text" 
                        placeholder='Search' 
                    />

                </div>
                <div className='flex flex-row space-x-2'>
                    <FontAwesomeIcon 
                        className='p-1 hover:bg-slate-400 hover:rounded-full' 
                        icon={faFile} size="md"    
                    />
                    <FontAwesomeIcon 
                        className='p-1 hover:bg-slate-400 hover:rounded-full'
                        icon={faInbox} size="md" 
                    />
                    <FontAwesomeIcon 
                        className='py-1 px-2 hover:bg-slate-400 hover:rounded-full'
                        icon={faEllipsisVertical} size="md"
                    />
                </div>
            </div>
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='w-full flex flex-row justify-center text-gray-500'>
                    <p className='w-full text-md text-end'>
                        <span className='hover:underline hover:text-black'>Wallet</span>
                    </p>
                    <p className='w-full text-md text-center'>
                        <span className='hover:underline hover:text-black'>Invoice</span>
                    </p>
                </div>
                <div className='w-full flex flex-row justify-end items-center space-x-2 '>
                    <p className='text-gray-500'>Hi, Name</p>
                    <div  
                        className='w-8 h-8 rounded-lg'
                        onClick={handleModal}
                    >
                        <img 
                            className='w-full h-full rounded-lg'
                            src={profile}
                            alt=''
                        /> 
                    </div>
                </div>

            </div>
    </div>
  )
}

export default HeaderProfile