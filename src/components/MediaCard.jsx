import React from 'react'
import { getVote, img_300 } from '../utils'
import { Rating } from './Rating'
import { MyModal } from './MyModal'
import { useState } from 'react'

export const MediaCard = ({media,type}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = () => {
      setIsOpen(true)
    }

  return (
   <>
      
       <div className="card w-full bg-gray-300  shadow-sm text-gray-800">
            <figure onClick={handleOpenModal}>
                <img src={media.poster_path && img_300+media.poster_path || 'noImage.jpg'} alt={media.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{media.title || media.name }</h2>
                <div className='pt-2 flex justify-between'> 
                    <span>{media.media_type || (type!='trending' && <Rating vote={media.vote_average}/>)}</span> 
                    <span>{media.release_date || media.first_air_date}</span>
                </div>
            </div>
        </div>
        {isOpen && <MyModal {...{isOpen,setIsOpen,media}}/>}
</>

  )
}
