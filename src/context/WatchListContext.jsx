import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext()

export const WatchListProvider = ({children}) => {
    const [watchlist, setWatchlist] = useState([])

    const [genrelist, setgenrelist] = useState([])

    useEffect(() => {
    
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=f7fa7fb2c17d3f808dceba2fb6f4ba25`
    
        fetch(url)
        .then((response) => response.json())
        .then((data) => setgenrelist(data.genres || []))
        .catch(err => console.error(err))
      },[])

    const toggleWatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id)

        if(index === -1){
            setWatchlist([...watchlist, movie])
        }else{
            setWatchlist([...watchlist.slice(0, index),...watchlist.slice(index+1)])
        }
    }
    console.log("watchlist", watchlist)

    return(
        <WatchListContext.Provider value={{watchlist, toggleWatchlist, genrelist}}>
            {children}
        </WatchListContext.Provider>
    )
}