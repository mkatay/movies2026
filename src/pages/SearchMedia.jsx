import React from 'react'
import { getMedia} from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loading } from '../components/Loading';
import { MediaList } from '../components/MediaList';
import { Filter } from '../components/Filter';
import { SearchBar } from '../components/SearchBar';

export const SearchMedia = () => {
  const [type, setType] = useState("movie");
  const [media, setMedia] = useState(null)
  const [searchText, setSearchText] = useState('')
  
 const handleSearch=()=>{
   getMedia(type,searchText).then(setMedia)
 }
   
  
  return (
    <div className='min-h-screen'>
      <Filter type={type} setType={setType}/>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
      {media && <MediaList  data={media} type={type} />}
    </div>
  )
}


