import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { WatchListContext } from '../context/WatchListContext'

const Navbar = () => {
    const {watchlist} = useContext(WatchListContext)
  return (
    <div className='flex z-50 px-4 py-3 justify-between items-center 
    mx-auto bg-gray-900 text-white fixed w-full top-0'>
        <Link to="/" className='text-xl font-bold'>Movie App</Link>
        <Link to="/watchlist" className='text-xl'>WatchList({watchlist.length})</Link>
    </div>
  )
}

export default Navbar