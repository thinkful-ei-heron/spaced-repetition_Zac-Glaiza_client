import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header>
      <img
        src='https://eu4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/330px-Roman_Empire.png'
        alt='Flag of the Roman Republic'
        height='100px'
        width='auto'
      />
      <h1>
        <Link className='spaceRep-title' to='/'>
          Spaced Repetition
          </Link>
      </h1>
      <div /> {/* place-holder for flexbox */}
    </header>
  );
}
