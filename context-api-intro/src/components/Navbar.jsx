import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import {ThemeContext, ThemeDataContext} from '../context/ThemeContext'

const Navbar = (props) => {
  const data = useContext(ThemeDataContext);
  return (
    <div className='nav'>
      <h1>Md Raza</h1>
      <Navbar2 theme={props.theme} />
    </div>
  )
}

export default Navbar