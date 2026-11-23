import React from 'react'
import { getSelectedMediaByCateg, getTV } from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loading } from '../components/Loading';
import { MediaList } from '../components/MediaList';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';

export const TVShows = () => {
const [tvs, setTvs] = useState(null)
const [selectedCateg, setSelectedCateg] = useState([])
const [page, setPage] = useState(1)

  tvs && console.log(tvs);
  useEffect(() => {
      setPage(1)
      getSelectedMediaByCateg('tv',selectedCateg.join(','),page).then(setTvs)    
      }, [selectedCateg.join(',')])
  
  useEffect(() => {
      getSelectedMediaByCateg('tv',selectedCateg.join(','),page).then(setTvs)  
      window.scrollTo({top: 0, behavior: "smooth"})
      }, [page])
  
  /*
  useEffect(() => {
    getTV().then(setTvs)
  }, [])
  */
  return (
    <div>
      <Categories type='tv' setSelectedCateg={setSelectedCateg} selectedCateg={selectedCateg}/>
      {tvs ? <MediaList  data={tvs} type='tv' /> : <Loading/>}
        <Pagination {...{setPage,page}}/>
    </div>
  )
}


