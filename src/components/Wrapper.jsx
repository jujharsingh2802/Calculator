import React from 'react'
import '../App.css'

function Wrapper({
    children
}) {
  return (
    <div id= "Wrapper" className=' bg-black border w-80 mt-16 rounded-xl p-4'>{children}</div>
  )
}

export default Wrapper