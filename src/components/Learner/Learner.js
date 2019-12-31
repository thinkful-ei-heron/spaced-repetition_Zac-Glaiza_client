import React from 'react'
import WordContext from '../../contexts/WordContext'

import Button from '../../components/Button/Button'

import './Learner.css'

export default class Learner extends React.Component {
	state = {
		mode: 'guess',
		error: null,
	}

	static contextType = WordContext;

	render() {
		const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = this.context;

		return (
			<div>
				<h2>{nextWord}</h2>
				<form className='formGuess' onSubmit={this.context.submitHandler}>
					<label htmlFor='learn-guess-input'>What's the translation for this word?</label>
					<br />
					<input id='learn-guess-input' name='guess' type='text' required maxLength='24' autoFocus />
					<Button type='submit' className='btn'>
						Submit your answer
				</Button>
				</form>
				<p>Your total score is: {totalScore}</p>
				<p>You have answered this word correctly {wordCorrectCount} times.</p>
				<p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
			</div>
		)
	}
}

