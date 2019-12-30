import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Nav.css'

export default class Nav extends React.Component {
	static contextType = UserContext;

	handleLogoutClick = () => {
		this.context.processLogout()
	}

	renderLogoutLink() {
		return (
			<div className='navblock'>
				<span>
					{this.context.user.name}
				</span>
				<nav>
					<Link
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
			<div className='navblock'>
				<Link to='/login'>Login</Link>
				{' '}
				<Link to='/register'>Sign up</Link>
			</div>
		)
	}

	render() {
		return (
			<nav>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink()
					: this.renderLoginLink()}
			</nav>
		)
	}
}