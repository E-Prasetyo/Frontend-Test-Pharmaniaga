import React from 'react'
import CardContent from './CardHeader'
import ChartBar from './ChartBar'
import ContentTransaction from './ContentTransaction'

const ChartOne ={
  textColor: 'text-red-800',
  bgColor: 'bg-red-200',
  content: [
    {high:'h-1/4', color:'bg-rose-100'},{high:'h-2/3', color:'bg-rose-100'},
    {high:'h-full', color:'bg-red-500'},{high:'h-1/2', color:'bg-rose-100'},
    {high:'h-3/6', color:'bg-rose-100'},{high:'h-3/5', color:'bg-rose-100'},
  ]
} 
  
const ChartTwo = {
  textColor: 'text-blue-800',
  bgColor: 'bg-blue-200',
  content: [
    {high:'h-1/4', color:'bg-cyan-100'},{high:'h-2/3', color:'bg-cyan-100'},
    {high:'h-3/4', color:'bg-cyan-100'},{high:'h-full', color:'bg-blue-500'},
    {high:'h-5/6', color:'bg-cyan-100'},{high:'h-3/5', color:'bg-cyan-100'},
  ]
}
const ChartThree = {
  textColor: 'text-green-800',
  bgColor: 'bg-green-200',
  content: [
    {high:'h-3/6', color:'bg-emerald-100'},{high:'h-2/3', color:'bg-emerald-100'},
    {high:'h-1/5', color:'bg-emerald-100'},{high:'h-full', color:'bg-green-500'},
    {high:'h-3/6', color:'bg-emerald-100'},{high:'h-2/3', color:'bg-emerald-100'},
  ]
}

const Dashboard = () => {

  return (
    <>
      <div className='flex flex-col'>
        <CardContent />
        <div className='border-t-2 border-gray-400 mx-8 mt-6'></div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-8 my-5 gap-4'>
            <ChartBar item={ChartOne} />
            <ChartBar item={ChartTwo} />
            <ChartBar item={ChartThree} />
        </div>
        <div className='border-t-2 border-gray-400 mx-8'></div>
        <ContentTransaction />
      </div>
    </>
    
  )
}

export default Dashboard