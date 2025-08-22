import React, { useEffect, useState } from 'react'
import { FaSearch, } from 'react-icons/fa'
import Moviecard from '../components/Moviecard'

// const movies = [
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
//   {
//     poster: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
//     title: "Batman the Evil",
//     release_date: "22-08-2025"
//   },
// ]


const Home = () => {

  // const API_KEY = "f7fa7fb2c17d3f808dceba2fb6f4ba25"
  // const BASE_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])
  const [page,setpage] = useState(1)
  const [search, setsearch] = useState("")

  useEffect(() => {

    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=f7fa7fb2c17d3f808dceba2fb6f4ba25`

    if(search){
       url =  `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f7fa7fb2c17d3f808dceba2fb6f4ba25`
    }

    fetch(url)
    .then((response) => response.json())
    .then((data) => setMovies(data.results))
    .catch(err => console.error(err))
  },[page, search])


  // useEffect(() => {
  //   fetch(
  //     `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  //     {
  //       headers: {
  //         'Origin': 'http://localhost:5173' // Replace with your actual origin if not localhost
  //       }
  //     }
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         // Handle non-200 status codes here, e.g., response.statusText
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setMovies(data.results))
  //     .catch(err => {
  //       console.error("Error fetching movies:", err);
  //       // You might want to display an error message to the user here
  //     });
  // }, [])



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

      <div className='movies-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 z-0'>
        {movies.map((movie, idx) => {
          return (
            <div key={idx}>
              <Moviecard key={movie.id} movie={movie} />
            </div>
          )
        })}
      </div>

      <div className="pagination-container flex justify-between items-center mx-auto mt-4">
        <button className='p-2 bg-gray-700 rounded text-white' 
        disabled={page===1}
        onClick={() => {
            setpage((prev) => prev - 1)
        }}>Previous</button>
        <button className='p-2 bg-gray-700 rounded text-white' onClick={() => {
            setpage((prev) => prev + 1)
        }}>Next</button>

      </div>
    </div>
  )
}

export default Home