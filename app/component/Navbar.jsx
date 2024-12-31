import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between container mx-auto py-3 lg:px-0 px-4 max-w-3xl'>
        <h1 className='font-bold text-2xl'>Todo</h1>
        <button className='p-2 bg-indigo-600 text-white'>AddTopic</button>
    </nav>
  )
}

export default Navbar