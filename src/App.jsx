import { useReducer, useState } from 'react'
import './App.css'
import CalculatorBody from './CalculatorBody'
import CalculateResult from './CalculateResult'

function App() {  
  let initialState = { input: ''}
  
  const calculatorReducer = (state, action) =>{
    switch(action.type){

      case 'CLEAR':
        return { input: ''}
      
      case 'DELETE':
        return { input: state.input.slice(0,-1)}

      case 'APPEND':{
        return {input: state.input + action.payload}
      }

      case 'CALCULATE':{
        /**
         * here calculate result acts as a pure function
         * hence it works in react aswell
         */
        return CalculateResult(state.input)
      }

      default:
        return state
    }
  }

  // const [input, setInput] = useState('0')
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{state.input}</h1>
        <CalculatorBody dispatch={dispatch}/>
      </div>
    </div>
  )
}

export default App
