import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

export default class Header extends React.Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <nav className='navbar'>
        <div className='welcome'>
          Welcome back, <span className='username'>{this.context.user.name}! </span>
        </div>
        <Link
          className='navblock'
          onClick={this.handleLogoutClick}
          to='/login'>
          Log out
			  		</Link>
      </nav>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='navblock' to='/login'>Log in</Link>
        {' '}
        <Link className='navblock' to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <div className='headerTop'>
          {/* <Link to='/'> */}

        {/* </Link> */}

        <Link className='spaceRep-title' to='/'>
          <img
            src='https://eu4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/330px-Roman_Empire.png'
            alt='Flag of the Roman Republic'
          />
          <h1 className='space-title'>Spaced Repetition</h1>

        </Link>
        {/* //   </h1> */}
        </div>
        {
          TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
        }
      </header >
    );
  }
}
