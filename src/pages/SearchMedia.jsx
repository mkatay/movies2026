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

  const handleSearch=()=>{
      setMedia(null)
      if(searchText.trim().length==0) return
        console.log('ok');
        getMedia(type,searchText,page).then((data)=>{
          setMedia(data.results)
          setMaxPage(data.total_pages)
        })
        

  }

   useEffect(() => {
       getMedia(type,searchText,page).then((data)=>{
            setMedia(data.results)
            setMaxPage(data.total_pages)
          })
    }, [page])
    
  return (
    <div >
      <Filter type={type} setType={setType}/>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
      {media && <MediaList  data={media} type={type} />}
      {media && media.length>0 &&  <Pagination {...{setPage,page,maxPage}}/>}
    </div>
  )
}


