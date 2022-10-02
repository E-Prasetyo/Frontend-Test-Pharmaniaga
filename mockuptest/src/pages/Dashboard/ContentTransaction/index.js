import React from 'react'
import LatestTransaction from './LatestTransaction'
import UpdateTransaction from './UpdateTransaction'

const Transaction = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mx-8 my-3 gap-1'>
        <LatestTransaction />
        <UpdateTransaction />
    </div>
  )
}

export default Transaction