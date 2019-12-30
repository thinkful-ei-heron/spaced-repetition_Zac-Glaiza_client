import React from 'react'
import LanguageContext from '../../contexts/LanguageContext'

import { Link } from 'react-router-dom'
import Word from '../Word/Word';
import Button from '../../components/Button/Button'

import './Dashboard.css'

export default class Dashboard extends React.Component {
	static contextType = LanguageContext;

	renderWords() {
		return this.context.words.map((word, idx) => {
			return (<Word key={idx} word={word} />)
		})
	}

	render() {
		return (
			<section>
				<h3>Words to practice</h3>
				<p>Total correct answers: {this.context.language.total_score}</p>
				<Button className='btn'>
					<Link to={'/learn'} className='learn'>
						Start practicing
					</Link>
				</Button>
				<ul className='wordList'>
					{this.renderWords()}
				</ul>
			</section>
		)
	}
}