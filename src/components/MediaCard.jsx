import React from 'react'
import { img_300 } from '../utils'

export const MediaCard = ({media}) => {
  return (
   <>
       {/* <div>{media.title}</div>
       <div>{media.original_title}</div> 
       <img src={img_300+media.poster_path} alt={media.title} />*/}
       <div className="card w-full bg-gray-300  shadow-sm text-gray-800">
            <figure>
                <img src={img_300+media.poster_path} alt={media.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{media.title || media.name }</h2>
                <p className='pt-2 flex justify-between'> 
                    <span>{media.media_type}</span> 
                    <span>{media.release_date || media.first_air_date}</span>
                </p>
            </div>
        </div>
</>

  )
}
