import React from 'react'
import { CalcContext, useCalc } from '../Context/CalcContext'
import {Textfit} from 'react-textfit'
function Screen() {
  const {calc} = useCalc();

  return (
    <Textfit className='text-white mb-9 h-24'>
      {calc}
    </Textfit>
  )
}

export default Screen