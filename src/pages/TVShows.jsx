import React from 'react'
import { getSelectedMediaByCateg, getTV } from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loading } from '../components/Loading';
import { MediaList } from '../components/MediaList';
import { Categories } from '../components/Categories';

export const TVShows = () => {
const [tvs, setTvs] = useState(null)
const [selectedCateg, setSelectedCateg] = useState([])

  tvs && console.log(tvs);
  useEffect(() => {
        getSelectedMediaByCateg('tv',selectedCateg.join(',')).then(setTvs)    
      }, [selectedCateg.join(',')])
  
  
  /*
  useEffect(() => {
    getTV().then(setTvs)
  }, [])
  */
  return (
    <div>
      <Categories type='tv' setSelectedCateg={setSelectedCateg} selectedCateg={selectedCateg}/>
      {tvs ? <MediaList  data={tvs} type='tv' /> : <Loading/>}
    </div>
  )
}


