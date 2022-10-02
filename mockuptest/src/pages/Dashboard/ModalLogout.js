import React from 'react'
import Modal from '../../componets/UI/ModaUI'

const ModalLogout = ({handleModal, handleLogout}) => {
  return (
    <Modal  title="LogOut Confirmation">
        <div className='w-full flex flex-col justify-center items-center'>
          <p>Apakah Anda ingin keluar ?</p>
          <div className='flex flex-row justify-between space-x-4 py-4'>
            <button 
              className='bg-blue-500 py-1 px-2 rounded-lg hover:bg-blue-900 hover:text-white'
              onClick={handleModal}
            >
              Cancel
            </button>
            <button 
              className='bg-red-500 py-1 px-2 rounded-lg hover:bg-red-900 hover:text-white'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
    </Modal>
  )
}

export default ModalLogout