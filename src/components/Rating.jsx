import React from 'react'

export const Rating= ({vote}) => {
  return (
    <div className="flex items-center gap-2">
    <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
           <div key={star} className="mask mask-star bg-orange-400"   aria-label={`${star} star`} aria-current={star==Math.round(vote / 2) ? "true" : "false"}></div>
        ))}
    </div>
    <span>{Math.round(vote / 2)} / 5</span>
</div>
  )
}

