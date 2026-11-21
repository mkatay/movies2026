import React from 'react'
import { getCategories } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'

export const Categories = ({type,selectedCateg,setSelectedCateg}) => {
    const [categories, setCategories] = useState(null)
    console.log('ok');
    
categories && console.log('kategóriák:',categories);

     
    useEffect(() => {
        getCategories(type).then(setCategories)
      }, [])

const handleChange=(id) => {
    setSelectedCateg(prev =>prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id])
}

  return (
    <div className='flex justify-center flex-wrap'>
        {categories && categories.map(obj=>
            <fieldset key={obj.id} className="fieldset bg-gray-700 border-gray-500 rounded-box w-8 border p-1">
                <label className="label">
                    <input type="checkbox"  className="checkbox-sm" 
                        checked={selectedCateg.includes(obj.id)} 
                        onChange={()=>handleChange(obj.id)}/>
                   {obj.name}
                </label>
            </fieldset>
                        )}
    </div>
  )
}

