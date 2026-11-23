import React from 'react'
import { useState } from 'react';
import { getMovies, getSelectedMediaByCateg } from '../utils';
import { useEffect } from 'react';
import { Loading } from '../components/Loading';
import { MediaList } from '../components/MediaList';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';

export const Movies = () => {
const [movies, setMovies] = useState(null)
const [selectedCateg, setSelectedCateg] = useState([])
const [page, setPage] = useState(1)

    console.log(selectedCateg);

    useEffect(() => {
      setPage(1)
      getSelectedMediaByCateg('movie',selectedCateg.join(','),page).then(setMovies)  
      }, [selectedCateg.join(',')])
    
     useEffect(() => {
      getSelectedMediaByCateg('movie',selectedCateg.join(','),page).then(setMovies)  
      window.scrollTo({top: 0, behavior: "smooth"})
      }, [page])

  movies && console.log(movies);
  /*
  useEffect(() => {
    getMovies().then(setMovies)
  }, [])
  */
  return (
    <div>
      <Categories type='movie' {...{setSelectedCateg,selectedCateg}}/>
      {movies ? <MediaList  data={movies} type='movie' /> : <Loading/>}
      <Pagination {...{setPage,page}}/>
    </div>
  )
}

