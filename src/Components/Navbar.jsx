import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between w-screen pt-12 pb-10 text-xl text-white font md:text-2xl">
      <p className={'ml-10 md:ml-20 cursor-pointer'}>Home</p>
      <p className={'mr-10 md:mr-20 cursor-pointer'}>Bookmarks</p>
    </div>
  )
}

export default Navbar
