import React from 'react'
import { getTrending } from '../utils'
import { useEffect } from 'react'
import { useState } from 'react'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'


export const Home = () => {
  const [trendings, setTrendings] = useState(null)
  const [page, setPage] = useState(1)
  

  useEffect(() => {
    getTrending(page).then(setTrendings)
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [page])

  return (
    <div>
      {trendings ? <MediaList data={trendings} type={'trending'}/> :<Loading/>}
      <Pagination {...{setPage,page}}/>
    </div>
  )
}
