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
      <div className='navbar'>
        <span>
          Welcome, {this.context.user.name}!
        </span>
        <nav>
          <Link
            className='navblock'
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
			  		</Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='navblock' to='/login'>Login</Link>
        {' '}
        <Link className='navblock' to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <div className='headerTop'>
          <img
            src='https://eu4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/330px-Roman_Empire.png'
            alt='Flag of the Roman Republic'
          />
          <h1>
            <Link className='spaceRep-title' to='/'>
              Spaced Repetition
            </Link>
          </h1>
          <div /> {/* place-holder for flexbox */}
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}
