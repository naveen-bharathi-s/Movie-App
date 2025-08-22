import React, { useContext } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'
// import {Home} from "../pages/Home"


const Moviecard = ({movie}) => {
    const {toggleWatchlist, watchlist} = useContext(WatchListContext)
    // console.log("watchlist", watchlist)
   
    const inWatchList = watchlist.some((m) => m.id == movie.id) 
  return (
    <div className='bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer text-white text-center relative transform hover:-translate-y-2 hover:animate-pulse'>
        <img className='w-full h-80 object-contain rounded-sm' 
        // src={`https://encrypted-tbn0.gstatic.com/images?&q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s`} alt={movie.title} />
         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />  
        <h2 className='text-lg font-bold mt-2'>{movie.title}</h2>
        <p className='text-sm text-gray-400'>{movie.release_date}</p>
        <button className='absolute top-2 right-2 text-red-500 text-xl' onClick={() => toggleWatchlist(movie)}>
            { inWatchList ?<FaHeart />: <FaRegHeart /> }
        </button>
    </div>
  )
}

export default Moviecard