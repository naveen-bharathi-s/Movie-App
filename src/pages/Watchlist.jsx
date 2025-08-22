import React, { useContext, useState } from 'react'
import Genreslist from '../components/Genreslist'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../components/Moviecard'

const WatchList = () => {
   const {watchlist, genrelist} = useContext(WatchListContext)
   const [search, setsearch] = useState("")
   const [selectedgenre, setselectedgenre] = useState("")
   const filteredMovies = watchlist.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase()))
   .filter((movie) => {
    return !selectedgenre || movie.genre_ids.includes(Number(selectedgenre))
   })
  return (
    <div className='p-4 mt-16'>
      <div className='relative'>
        {/* <label htmlFor="search" className='absolute left-16 md:left-32 lg:left-52 -top-0.5 z-30 opacity-60 cursor-pointer'>
          <FaSearch className='fixed top-20' />
        </label> */}
        <input type="search" id='search' placeholder='Search Movies...'
        onChange={(e) => setsearch(e.target.value)}
          className='w-2/3 border border-gray-900 py-2 px-2 mx-auto rounded outline-none
          bg-gray-900 text-white bg-opacity-60 backdrop-blur-md fixed top-16 
          left-1/2 transform -translate-x-1/2 z-20' />
      </div>

      <div className='flex justify-center mt-12'>
        <Genreslist genrelist={genrelist} setselectedgenre={setselectedgenre} />
      </div>

      <div className='movies-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 z-0'>
        {filteredMovies.map((movie, idx) => {
          return (
            <div key={idx}>
              <Moviecard key={movie.id} movie={movie} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WatchList