import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faDroplet, faMoneyBill, faBolt, faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons'

const data= [
    {
        date: "Today",
        content:[
            { 
                title: "Water Bill", price:"-$280", 
                icon: faDroplet, color:"bg-blue-500", 
                income:false, success:false
            },
        ]
    },
    {
        date: "Tomorrow",
        content:[
            {
                title: "Income:Salary Oct", price:"+$1200", 
                icon: faMoneyBill,color:"bg-rose-500", 
                income:true, success:true
            },
            {
                title: "Electric Bill", price:"-$480", 
                icon: faBolt, color:"bg-cyan-500", 
                income:false, success:true
            },
            {
                title: "Income:Jane transfers", price:"+$500", 
                icon: faFileInvoiceDollar,color:"bg-orange-500", 
                income:true, success:false
            },
            {
                title: "Income:Jane transfers", price:"+$500", 
                icon: faFileInvoiceDollar,color:"bg-orange-500", 
                income:true, success:true
            }
        ]
    }

]

const UpdateTransaction = () => {
  return (
    <div className='rounded-md p-4'>
        <div  className='flex flex-row justify-between items-center'>
            <div className='font-bold text-xs'>Latest Transactions</div>
            <div className='text-xs text-gray-400'>
                View All
            </div>
        </div>
        {data?.map((item,i)=>{
            return(
                <div key={i} className='my-2 space-y-2'>
                    <div className='text-slate-400 font-bold text-[0.5rem]'>
                        {item.date}
                    </div>
                    {item?.content.map((itm,idx)=>{
                        return(
                            <div key={idx} className='flex flex-row justify-between items-center'>
                                <div className='w-full flex flex-row items-center space-x-3'>
                                    <div className={`${itm.color} px-2 py-1 rounded-md`}>
                                        <FontAwesomeIcon icon={itm.icon} size="sm" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-bold text-sm'>{itm.title}</p>
                                        <p className='font-bold text-gray-400 text-[0.5rem]'>
                                            {itm.success ? "Unsuccessfully":"Successfully"}
                                        </p>
                                    </div>
                                </div>
                                <div className={`text-xs text-end ${itm.income ? '':'text-red-500'}`}>
                                    {itm.price}
                                </div>
                            </div>
                        )
                    })}
                    
                </div> 
            )
        })}
        
    </div>
  )
}

export default UpdateTransaction