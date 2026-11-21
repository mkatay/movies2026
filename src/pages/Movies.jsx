import React from 'react'
import { useState } from 'react';
import { getMovies, getSelectedMediaByCateg } from '../utils';
import { useEffect } from 'react';
import { Loading } from '../components/Loading';
import { MediaList } from '../components/MediaList';
import { Categories } from '../components/Categories';

export const Movies = () => {
const [movies, setMovies] = useState(null)
const [selectedCateg, setSelectedCateg] = useState([])

    console.log(selectedCateg);

    useEffect(() => {
      getSelectedMediaByCateg('movie',selectedCateg.join(',')).then(setMovies)    
    }, [selectedCateg.join(',')])


  movies && console.log(movies);
  /*
  useEffect(() => {
    getMovies().then(setMovies)
  }, [])
  */
  return (
    <div>
      <Categories type='movie' setSelectedCateg={setSelectedCateg} selectedCateg={selectedCateg}/>
      {movies ? <MediaList  data={movies} type='movie' /> : <Loading/>}
    </div>
  )
}

