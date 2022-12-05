import React from 'react';

const Activity = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div  className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] px-5 border-2 border-white rounded-md translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://images.unsplash.com/photo-1571003123771-bd6a099dd83a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDIyNjc0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' alt='/'></img>
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] px-5 rounded-md border-2 border-white translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://images.unsplash.com/photo-1518650310565-c782d7ff666e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDIyNTQyMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' alt='/'></img>
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] px-5 rounded-md border-2 border-white translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://images.unsplash.com/photo-1536561996889-43a085fcdb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDIyNTU2NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' alt='/'></img>
        </div>
    </div>
  )
}

export default Activity