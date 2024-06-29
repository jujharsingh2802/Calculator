import { useContext, useState } from 'react'
import Wrapper from './components/Wrapper'
import './App.css'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider, { useCalc } from './Context/CalcContext'
import ResArea from './components/ResArea'

function App() {
  const {calc,setCalc} = useCalc();
  const btnValues = [
    ["C","+-","DEL","/"],
    ["7","8","9","*"],
    ["4","5","6","-"],
    ["1","2","3","+"],
    ["0",".","="]
  ]

  return (
    <CalcProvider>
      <Wrapper>
        <Screen/>
        <ResArea/>
        <ButtonBox>
          {btnValues.flat().map((btn,i) => (
            <Button
              value = {btn}
              key={i}
              
            />
          ))} 
          
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}

export default App
