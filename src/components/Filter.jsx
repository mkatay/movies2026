import React from 'react'

export const Filter = ({type,setType}) => {

    return (
        <div className='flex justify-center gap-4'>
            <label>
                <input  type="radio" value="movie" checked={type === "movie"} 
                    onChange={(e) => setType(e.target.value)}  className=' radio radio-info radio-xl'/>
                Movies
            </label>

            <label>
                <input type="radio" value="tv" checked={type === "tv"}  
                    onChange={(e) => setType(e.target.value)} className='radio radio-info radio-xl' />
                TV Shows
            </label>
        </div>
    );
}
  
