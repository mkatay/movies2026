import React from 'react'
import { Filter } from '../components/Filter'
import { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { getMedia } from '../utils'
import { MediaList } from '../components/MediaList'
import { Pagination } from '../components/Pagination'
import { useEffect } from 'react'

export const SearchMedia = () => {
    const [type, setType] = useState('movie')
    const [searchText, setSearchText] = useState('')
    const [media, setMedia] = useState(null)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    //console.log(media, media.length,maxPage);
    
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
    <div className='min-h-screen'>
      <Filter type={type} setType={setType}/>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
      {media && <MediaList data={media} type={type}/>}
      {media && media.length>0 && <Pagination {...{page,setPage,maxPage}}/>}
    </div>
  )
}


