import React from 'react'

export const Loading = () => {
  return (
     <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="w-12 h-12 border-4 border-gray-600 border-t-red-500 rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm tracking-wider">
        Filmek betöltése...
      </p>
    </div>
  )
}

