import React from 'react'
import QRCodeGenerator from '../components/QRCodeGenerator'

const QRCode = () => {
  return (
    <main className='flex justify-center'>
        <div className=' w-1/2 lg:w-2/5'>
       <section className='block'>
       <div>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-300 text-white py-2 px-4 rounded-lg my-4 mx-4 hover:bg-gray-500 cursor-pointer"
        >
          <img src="/leftarrow.svg" alt="backarrow" />
        </button>
        </div>
        <div className='w-screen lg:w-1/2 mt-15'>
        <QRCodeGenerator/>
        </div>
       </section>
    </div>
    </main>
  )
}

export default QRCode