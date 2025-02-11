import React from 'react'

const CalculatorBody = ({ dispatch }) => {
    return (
      <>
        <div>
          <button onClick={() => dispatch({type: 'CLEAR',payload: 'C'})}>C</button>
          <button onClick={() => dispatch({type: 'DELETE',payload: '<'})}>&lt;</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '%'})}>%</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '/'})}>/</button>
        </div>
        <div>
          <button onClick={() => dispatch({type: 'APPEND',payload: '7'})}>7</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '8'})}>8</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '9'})}>9</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '*'})}>*</button>
        </div>
        <div>
          <button onClick={() => dispatch({type: 'APPEND',payload: '4'})}>4</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '5'})}>5</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '6'})}>6</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '-'})}>-</button>
        </div>
        <div>
          <button onClick={() => dispatch({type: 'APPEND',payload: '3'})}>3</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '2'})}>2</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '1'})}>1</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '+'})}>+</button>
        </div>
        <div>
          <button onClick={() => dispatch({type: 'APPEND',payload: '0'})}>0</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '00'})}>00</button>
          <button onClick={() => dispatch({type: 'APPEND',payload: '.'})}>.</button>
          <button onClick={() => dispatch({type: 'CALCULATE',payload: '='})}>=</button>
        </div>
      </>
    );
  };
  
  export default CalculatorBody;