import React from 'react'

const App = () => {
  const formHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form action="" onSubmit={(e) => {
        formHandler(e)
        console.log('Submitted')
      }}>
        <input className='px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Enter Your Name'/>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App