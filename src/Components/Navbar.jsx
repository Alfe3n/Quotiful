import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <div className="flex justify-between w-screen pt-8 pb-10 text-xl text-white font md:text-2xl">
      <Link to="/">
        <p className={`ml-10 md:ml-20 cursor-pointer ${props.home == true ? 'font-extrabold' : 'font-thin'}`}>Home</p>
      </Link>
      <Link to="/bookmarks">
        <p className={`mr-10 md:mr-20 cursor-pointer ${props.bookmark == true ? 'font-extrabold' : 'font-thin'}`}>Bookmarks</p>
      </Link>
    </div>
  )
}

export default Navbar
