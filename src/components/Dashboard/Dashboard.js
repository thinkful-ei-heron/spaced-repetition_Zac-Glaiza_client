import React from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import Word from '../Word/Word';
import './Dashboard.css'

export default class Dashboard extends React.Component {
	static contextType = LanguageContext;

	renderWords() {
		return this.context.words.map((word, idx) => {
			return <Word
				key={idx}
				word={word}
			/>
		})
	}

	render() {
		return (
			<section>
				<h3>Words to Practice</h3>
				<p>Total Score: {this.context.language.total_score}</p>
				{this.renderWords()}
			</section>
		)
	}
}