import { useReducer, useState } from 'react'
import './App.css'
import CalculatorBody from './CalculatorBody'

function App() {  
  let initialState = { input: ''}

  const calculateResult = (value) =>{
    let result = ''
    try{
      const operators = ['+','-','*','/']
      let operator = null
      for(let char of value){
        if(operators.includes(char)){
          operator = char
          break;
        }
      }
      if(!operator){
        return setInput(parseFloat(value).toString())
      }

      const [operand1, operand2] = value
      .split(operator).map(parseFloat)

      switch (operator){
        case '+':
          result = operand1 + operand2
          break;
        case '-':
          result = operand1 - operand2
          break;
        case '*':
          result = operand1 * operand2
          break;
        case '/':
          result = operand1 / operand2
          break
        default:
          throw new Error('Invalid Operator')
      }
      
      return { input: result.toString() }      
      
    }catch(error){
      setInput('Error')
    }
  }
  
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
        return calculateResult(state.input)
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
