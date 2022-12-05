import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700 '>Send us a message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by:-</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src='https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit' alt='/'></img>
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type='text' placeholder='First'></input>
                    <input className='border m-2 p-2' type='text' placeholder='Last'></input>
                    <input className='border m-2 p-2' type='email' placeholder='Email'></input>
                    <input className='border m-2 p-2' type='tel' placeholder='Phone'></input>
                    <input className='border m-2 p-2' type='text' placeholder='Nationality'></input>
                    <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                    <button className='col-span-2 m-2 '>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact