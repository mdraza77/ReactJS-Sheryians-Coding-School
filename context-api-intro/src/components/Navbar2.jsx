import React from 'react'

const Navbar2 = (props) => {
  return (
    <div className='nav2'>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Contact</h2>
      <h2>Careers</h2>
      <h2>{props.theme}</h2>
    </div>
  )
}

export default Navbar2