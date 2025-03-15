import React, { useEffect, useState } from 'react'
import QRScanner from '../components/QRScanner'
import { useLocation } from 'react-router-dom'

const Scanner = () => {
    const location = useLocation()
    const {item} = location.state || {}
    
  return (
    <main className='min-h-screen  flex justify-center mt-10'>
        <div className='block w-full md:w-1/3 lg:w-1/3'>
        <div>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-300 text-white py-2 px-4 rounded-lg mb-4 hover:bg-gray-500 cursor-pointer"
        >
          <img src="/leftarrow.svg" alt="backarrow" />
        </button>
        </div>
        <div className='w-full lg:w-full md:w-full flex justify-center'>
            <QRScanner
            email={item.email}
            image={item.image}
            title={item.title}
            borrowEmail={item.borrowEmail}
            price={item.price}
            />
        </div>
        </div>
    </main>
  )
}

export default Scanner