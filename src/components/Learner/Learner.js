import React from 'react'

import Button from '../../components/Button/Button'

import './Learner.css'

export default function Learner(props) {
	const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = props.word;

	return (
		<div>
			<h3>{nextWord}</h3>
			<form className='formGuess'>
				<label htmlFor='learn-guess-input'>What's the translation for this word?</label>
				<br />
				<input id='learn-guess-input' name='learn-guess-input' type='text' required maxLength='24' autoFocus />
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

