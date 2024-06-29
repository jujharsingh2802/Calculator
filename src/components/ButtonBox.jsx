import React from 'react'

function ButtonBox({children}) {
  return (
    <div className='grid grid-cols-4 gap-2'>{children}</div>
  )
}

export default ButtonBox