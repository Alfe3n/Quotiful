import React from 'react'
import Navbar from '../Components/Navbar'
function Notfound() {
  return (
    <div className=" items-center h-screen bg-violet flex flex-col">
      <Navbar />
      <h1 className="mt-20 text-2xl font-extrabold  text-red md:text-6xl">Page Not Found!</h1>
    </div>
  )
}

export default Notfound
