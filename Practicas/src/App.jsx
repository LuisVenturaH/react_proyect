import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import './App.css'
import Clock from './Components/Clock'
import Counter from './Components/Counter'
import Writing from './Components/Wrinting'
import MyCheckBox from './Components/MyCheckBox'
import ShowLetter from './Components/ShowLetter'
import NameAge from './Components/NameAge'
import FlipCoin from './Components/FlipCoin'
import TwoAges from './Components/TwoAges'
import Form from './Components/Form'
import FormAnidado from './Components/FormAnidado'
import NodeBox from './Components/NodeBox'
import ChangeBorder from './Components/ChangeBorder'
import RedPointUseEffect from './Components/RedPointerUseEffect'



function App() {
  return (
    <>
    <RedPointUseEffect></RedPointUseEffect>

      <ChangeBorder>
         <NodeBox/>
        </ChangeBorder> 
     

      <ChangeBorder>
          <Clock/>
      </ChangeBorder>

      <ChangeBorder>
          <FlipCoin/>
      </ChangeBorder>

      <ChangeBorder>
        <h1>Haz clic en el botón y me multiplico por 2</h1>
        <Counter/>
      </ChangeBorder>

      <ChangeBorder>
        <Form/>
      </ChangeBorder>

      <ChangeBorder>
        <FormAnidado/>
      </ChangeBorder>

      <ChangeBorder>
        <TwoAges/>
      </ChangeBorder>

      <ChangeBorder>
      <ShowLetter/>
      </ChangeBorder>

      <ChangeBorder>
        <Writing/>
      </ChangeBorder>

      <ChangeBorder>
        <h1>Consentimiento</h1>
        <MyCheckBox/>
      </ChangeBorder>

      <ChangeBorder>
        <NameAge/>
      </ChangeBorder>

    
      
   

    
    
    
    </>
  )
}

export default App
