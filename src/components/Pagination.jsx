
import React from "react";

export const Pagination = ({setPage,page,maxPage=10}) => {
    const numbers = [...Array(maxPage>10 ? 10 : maxPage)].map((_, i) => i + 1)
  return (
    <div className="flex justify-center p-4">
      <div className="join">
        {numbers.map(nr=>
           <button key={nr}
                className={`${page ==nr ? "btn-active": ""} join-item btn `}
                onClick={()=>setPage(nr)}
                >
                {nr}
            </button>    
        )}
       
      </div>
    </div>
  );
};
