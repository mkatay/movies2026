import React from 'react'
import { getMedia} from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loading } from '../components/Loading';
import { MediaList } from '../components/MediaList';
import { Filter } from '../components/Filter';
import { SearchBar } from '../components/SearchBar';
import { Pagination } from '../components/Pagination';

export const SearchMedia = () => {
  const [type, setType] = useState("movie");
  const [media, setMedia] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  
  media && console.log(media);
  
 const handleSearch=()=>{
   getMedia(type,searchText, page).then(setMedia)

 }
 useEffect(() => {
  if(media)
    setMaxPage(Math.ceil(media.length/10))
 }, [media])
   

 useEffect(() => {
  if(!media) return
      getMedia(type,searchText, page).then(setMedia)
      window.scrollTo({top: 0, behavior: "smooth"})
       }, [page])
  
  return (
    <div >
      <Filter type={type} setType={setType}/>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
    
        {media && <MediaList  data={media} type={type} />}

      {media && <Pagination {...{setPage,page,maxPage}}/>}
    </div>
  )
}


