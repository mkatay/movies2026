import React from 'react'
import { MediaCard } from './MediaCard';
import { getSelectedMediaByCateg, getTitle } from '../utils';
import { Categories } from './Categories';
import { useState } from 'react';
import { useEffect } from 'react';


export const MediaList = ({data,type}) => {
    
  return (
    <div> 
      <h2 className='text-center text-gray-300 text-2xl font-bold pb-2'>{getTitle(type)}</h2>
      
      <div className=' grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center'>
          {data && data.map(obj=><MediaCard key={obj.id} media={obj} type={type}/>)}
      </div> 
    </div>
  )
}

