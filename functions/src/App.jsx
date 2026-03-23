import React from 'react'

const App = () => {
  const clickme = () => {
    console.log('Clicked');
  }
  
  const typing = () => {
    console.log('Typing');
  }
  return (
    <div>
      <button onClick={function(){
        console.log('Clicked');
      }}>Click</button>
      <button onClick={()=>{
        console.log('Clicked');
      }}>Click Here</button>

      <input onChange={(elem) => {
        console.log(elem.target.value)
      }} type="text" name="" id="" placeholder='Type your name!' />

      <div className='move' onMouseMove={(elem) => {
        console.log(elem.clientX)
      }}></div>

      <div onWheel={() => {
        console.log('Scrolling')
      }} className='page'></div>
    </div>
  )
}

export default App