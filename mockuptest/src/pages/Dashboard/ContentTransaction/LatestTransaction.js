import { 
    faSearch, faSliders, faPaperPlane,
    faArrowCircleLeft, faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const data= [
    {
        date: "Mon, Mar 2",
        content:[
            {title: "Payment sent to Shakir", price:"$560.00", icon: faArrowCircleRight},
            {title: "Sllary from Redwhale", price:"$12.600.00", icon: faArrowCircleLeft},
            {title: "Mone sent to wise.com", price:"$3.000.00", icon: faPaperPlane}
        ]
    },
    {
        date: "Mon, Mar 1",
        content:[
            {title: "Payment sent to Shakir", price:"$560.00", icon: faArrowCircleRight},
            {title: "Sllary from Redwhale", price:"$12.600.00", icon: faArrowCircleLeft}
        ]
    }

]

const LatestTransaction = () => {
  return (
    <>
        <div className='md:col-span-2 rounded-md bg-[#f9faff] p-4'>
            <div  className='flex flex-row justify-between items-center'>
                <div className='font-bold text-xs'>Latest Transactions</div>
                <div className='font-bold text-xs text-gray-400 space-x-5'>
                    <FontAwesomeIcon icon={faSearch}/>
                    <FontAwesomeIcon icon={faSliders}/>
                </div>
            </div>
            {data?.map((item,i)=>{
                return(
                    <div key={i} className='my-2 space-y-2'>
                        <div className='text-slate-400 font-medium text-[0.7rem]'>
                            {item.date}
                        </div>
                        {item?.content.map((itm,idx)=>{
                            return(
                                <div key={idx} className='flex flex-row justify-between items-center'>
                                    <div className='w-full flex flex-row items-center space-x-3'>
                                        <div className='bg-blue-200 px-2 py-1 rounded-md'>
                                            <FontAwesomeIcon icon={itm.icon} size="sm" />
                                        </div>
                                        <p className='font-bold text-sm'>{itm.title}</p>
                                    </div>
                                    <div className='text-xs text-end'>
                                        {itm.price}
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div> 
                )
            })}
            
        </div>
    </>
  )
}

export default LatestTransaction