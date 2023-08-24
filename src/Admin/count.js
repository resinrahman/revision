import React, { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0);
  
  const addition = () => {
    setCount(prevState => prevState + 1)
    }
  return (
    <div>
      <button onClick={addition}>Add</button>
      <div>{count}</div>
    </div>
  )
}

export default Count