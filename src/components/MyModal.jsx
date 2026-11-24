import React from 'react'
import { MdClose } from "react-icons/md";
import { getCredits, getTrailer, img_500 } from '../utils';
import { useEffect } from 'react';
import { useState } from 'react';
import { TfiYoutube } from "react-icons/tfi";
import { Carousel } from './Carousel';


export const MyModal = ({isOpen,setIsOpen,media,type}) => {
    const [trailer, setTrailer] = useState(null)
    const [credits, setCredits] = useState(null)

    //console.log(media);

    useEffect(() => {
        getTrailer(media.media_type || type,media.id).then(setTrailer)   
        getCredits(media.media_type || type,media.id).then(setCredits)
    }, [])

trailer && console.log(trailer[0]);
credits && console.log(credits);


  return (
  
        <dialog  className={`modal ${isOpen ? 'modal-open' : ''}  ` }>
            <div className="modal-box flex flex-col items-center w-fit max-w-200 relative  pt-4 text-gray-800">
                <div className='p-4 flex flex-col items-center text-[12px] sm:text-[16px]'>
                    <img className='w-full' src={img_500+media.backdrop_path} alt={media.title} />
                    <h3 className=' text-center'>
                        <span className='font-bold'>{media.original_title} </span>
                        <span >({media.release_date || media.first_air_date})</span> </h3>
                    <p className='pt-2 indent-4 text-justify'>{media.overview}</p>
                </div>

                {credits && <Carousel credits={credits.slice(0,8)}/>}

                {trailer && trailer[0] && <a className="link link-info text-3xl w-full text-left" href={`https://www.youtube.com/watch?v=${trailer[0].key}`} ><TfiYoutube/></a>}
                
           
                <div className="modal-action absolute top-0 right-1">
                    <button className="btn p-2" onClick={()=>setIsOpen(false)}><MdClose/></button>
                </div>
            </div>
        </dialog>

  )
}

