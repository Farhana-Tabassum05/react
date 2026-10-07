import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCardContext = (user) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full py-3 flex flex-col justify-between'>
          <h2 className='rounded-full bg-white h-12 w-12 flex font-semibold text-2xl justify-center items-center mx-3'>{user.id}</h2>
          <div className='bg-linear-180 from-gray-500 w-full'>
            <p className='leading-relaxed text-white font-medium mb-5 px-3 mt-3 capitalize' >{user.intro}</p>
            <div className='flex justify-around gap-10'>
              <button className='bg-black text-white font-medium px-6 py-3 rounded-full'>{user.tag}</button>
              <button className='bg-black text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></button>
            </div>
          </div>
        </div>
  )
}

export default RightCardContext