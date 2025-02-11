import { useState } from 'react'
import './App.css'
import CalculatorBody from './CalculatorBody'

function App() {
  const [input, setInput] = useState('0')

  const handleButtonClick = (value) =>{
    switch (value){
      case 'C':
        setInput('')
        break;
      case '<':
        setInput(input.slice(0,-1))
        break;
      case '=':
        calculateResult(input)
        break
      default:
        setInput((prevValue) => prevValue + value)
        break
    }
  }

  const calculateResult = (value) =>{
    let result = ''
    try{
      const operators = ['+','-','*','/']
      let operator = null
      for(let i=0; i<value.length;i++){
        if(operators.includes(input[i])){
          operator = input[i]
          break;
        }
      }
      if(!operator){
        return setInput(parseFloat(value).toString())
      }

      const [operand1, operand2] = input
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
      
      return setInput(result.toString())      
      
    }catch(error){
      setInput('Error')
    }
  }

  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{input}</h1>
        <CalculatorBody handleButtonClick={handleButtonClick}/>
      </div>
    </div>
  )
}

export default App
