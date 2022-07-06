import React from 'react'

function NavBar(props) {
  return (
    <nav className='navbar'>
          <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        {/* <h2>{props.text}</h2> */}
    </nav>
    
  )
}

export default NavBar