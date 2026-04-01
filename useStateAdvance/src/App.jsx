import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([10, 20, 30, 40, 50])

  const btnClicked = () => {
    const newNum = [...num]
    newNum.push(60)
    setNum(newNum)
  }
  return (
    <div>
      <h1 className='text-green-500 text-2xl font-bold'>{num}</h1>
      <button className='p-2 border rounded' onClick={btnClicked}>Change</button>
    </div>
  )
}

export default App