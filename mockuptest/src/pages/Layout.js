/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMoneyBillTransfer, faGauge, faAddressBook, faTools, faBook,
  faBox, faIdCard, faFileInvoice, faCalendarDay, faTruck
} from '@fortawesome/free-solid-svg-icons'
import Accordion from '../componets/Sidebar/Accordion'
import CardHelp from '../componets/Sidebar/CardHelp'
import HeaderProfile from './Dashboard/HeaderProfile'
import ModalLogout from './Dashboard/ModalLogout'
import { useNavigate } from 'react-router-dom'

const MaiNavigation = [
  { name: "Dashboard", icon: faGauge, content: [{name:'Index'},{name:'Child'}] }, 
  { name: "Transaction", icon: faMoneyBillTransfer, content: [{name:'Index'},{name:'Child'}]},
  { name: "Contacts", icon: faAddressBook, content: [{name:'Index'},{name:'Child'}]},
  { name: "Features", icon: faTools, content: [{name:'Index'},{name:'Child'}]},
  { name: "Library", icon: faBook, content: [{name:'Index'},{name:'Child'}]}
] 

const Settings = [
  { name: "Base Wallet", icon: faBox, content: [{name:'Index'},{name:'Child'}]}, 
  { name: "My Contacts", icon: faIdCard, content: [{name:'Index'},{name:'Child'}]},
  { name: "Invoice", icon: faFileInvoice, content: [{name:'Index'},{name:'Child'}]},
  { name: "Schedules", icon: faCalendarDay, content: [{name:'Index'},{name:'Child'}]}
] 


const Layout = ({children}) => {
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState(false);

  const handelModal = () =>{
    setIsLogout(prev => !prev)
  }

  const handleLogout = () =>{
    return navigate('/')
  }

  return (
    <>
      {isLogout && <ModalLogout handleLogout={handleLogout} handleModal={handelModal} />}
      <div className='flex flex-row min-h-screen'>
        <div className="flex flex-col w-18 md:w-64 min-h-screen px-4 bg-[#ebedf9] border-r border-gray-300 shadow-lg opacity-70 ">
            {/* Icon */}
            <h2 className="text-md md:text-xl font-semibold text-black text-center pt-6 space-x-5">
              <FontAwesomeIcon icon={faTruck} size="sm" />
              <span className='hidden md:inline'>Superfit</span>
            </h2>       
            {/*Navigation */}
            <div className="flex flex-col justify-between flex-1 mt-2">
              <nav>
                <div className='flex flex-col my-5 space-y-2'>
                  <div className='text-xs md:text-sm px-4 font-bold'>
                    Main <span className='hidden md:inline'>Navigation</span> 
                  </div>
                  {/* Main Navigation */}
                  <div className='text-xs md:text-sm pl-4 font-medium text-gray-600'>
                      {MaiNavigation.map((item,i) => {
                        return(<Accordion key={i} item={item}/>)
                      })}
                  </div>
                </div>
                {/* Setting & Schedules */}
                <div className='flex flex-col mt-8 space-y-3'>
                  <div className='text-xs px-4 font-bold'>
                    Settings <span className='hidden md:inline'>& Schedules</span> 
                  </div>
                  <div className='text-xs md:text-sm pl-4 font-medium text-gray-600'>
                      {Settings.map((item, i) => {
                        return(<Accordion key={i} item={item} />)
                      })}
                  </div>
                </div>
                {/* Card */}
                <CardHelp />
              </nav>
            </div>
        </div>
        {/* Content */}
        <div className='w-full max-h-full'>
          <HeaderProfile handleModal={handelModal} />
          <div className=''>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout

