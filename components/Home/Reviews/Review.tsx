import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
        {/*  text content */}
        <div>
            <h1 className='text-white text-2xl font-semibold'>What Our Customers Say</h1>
            <p className='text-gray-200 mt-6'>We value our customers' feedback and strive to provide the best service possible. Here's what some of them have to say about their experiences with us.</p>

            {/* ratings */}
            <div className='mt-6 flex items-center space-x-6 '>
              <div >
                <p className='text-2xl font-bold text-white'>4.88</p>``
                <p className='text-white mb-2'>Overall rating</p>
                <div className='flex items-center'>
                  <FaStar className='text-white '/>
                  <FaStar className='text-white '/>
                  <FaStar className='text-white '/>
                  <FaStar className='text-white '/>
                  <FaStar className='text-white '/>
                </div>
                
                
                </div>
            </div>



        </div>
        {/* slider */}

          <ReviewSlider />
          
        </div>
        </div>

    
  )
}

export default Review
