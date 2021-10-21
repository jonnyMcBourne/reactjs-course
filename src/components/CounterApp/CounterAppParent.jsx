import React, { useState } from 'react'
import { CounterApp } from './CounterApp'
export const CounterAppParent = () => {
    
    const [counter, setCounter] = useState(0);

    const inCreaseCounter =()=>{
      setCounter( counter + 1 );
    }
  
    return (
        <div>
        <CounterApp value={counter} increaseCounter={inCreaseCounter} />
        </div>
    )
}
