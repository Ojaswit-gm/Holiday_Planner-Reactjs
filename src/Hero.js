import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-[70%]'>
        <img src='https://images.unsplash.com/photo-1561571994-3c61c554181a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIxNzEwMzk2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit' alt='/' 
        className='w-full h-full object-cover'></img>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Exclusive Trip</h1>
                <h2 className='text-3xl py-4 italic'>Add to your Wishlist</h2>
                <p>Nature is a great way to relieve stress and take care of your mental health. Go for a hike or swim in the ocean whenever you can, and the world automatically seems a better place to be! 
                    A vacation is what you take when you can no longer take what you've been taking.
                </p>
            </div>
        </div>
        
    </div>
    
  )
}

export default Hero