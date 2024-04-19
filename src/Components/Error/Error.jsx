import React from 'react'

function Error({error}) {
  return (
    <div>
        <p className='text-red-500  text-xs italic mb-2 text-left'>{error}</p>
    </div>
  )
}

export default Error