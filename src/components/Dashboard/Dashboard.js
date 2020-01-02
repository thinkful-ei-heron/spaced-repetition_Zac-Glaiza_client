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
				<p>Total correct answers: <span className='results1'>{this.context.language.total_score}</span></p>
				<Link to={'/learn'} className='learn'>
					<Button className='btn'>
						Start practicing
					</Button>
				</Link>
				<ul className='wordList'>
					{this.renderWords()}
				</ul>
			</section>
		)
	}
}