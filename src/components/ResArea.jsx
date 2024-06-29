import React from 'react'
import { CalcContext, useCalc } from '../Context/CalcContext'
import {Textfit} from 'react-textfit'
function ResArea() {
  const {res} = useCalc();

  return (
    <Textfit className='text-white mb-9 h-10'>
      {res }
    </Textfit>
  )
}

export default ResArea