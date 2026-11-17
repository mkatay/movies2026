import React from 'react'
import { getTrending } from '../utils'
import { useEffect } from 'react'
import { useState } from 'react'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'


export const Home = () => {
  const [trendings, setTrendings] = useState(null)

  useEffect(() => {
    getTrending().then(setTrendings)
  }, [])

  return (
    <div>
      {trendings ? <MediaList data={trendings} type={'trending'}/> :<Loading/>}
    </div>
  )
}
