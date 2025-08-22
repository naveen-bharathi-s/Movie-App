import React from 'react'

const Genreslist = ({genrelist, setselectedgenre}) => {
  return (
  
    <select onChange={(e => setselectedgenre(e.target.value))}
    className='p-2 bg-gray-900 bg-opacity-60 text-white backdrop-blur-md border rounded'>
        <option value="">All Genres</option>
       {genrelist.map((genre) => {
        return(
            <option key={genre.id} value={genre.id}>{genre.name}</option>
        )
       })}
        
    </select>
  
  )
}

export default Genreslist