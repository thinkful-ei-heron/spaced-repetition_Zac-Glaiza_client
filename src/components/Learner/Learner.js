import React from 'react'
import WordContext from '../../contexts/WordContext'
import Button from '../../components/Button/Button'

import './Learner.css'

export default class Learner extends React.Component {
	static contextType = WordContext;

	render() {
		const { orig, trans, guess, correctCount, incorrectCount, totalScore, mode, submitHandler, nextHandler } = this.context;
		const correctResult = mode===true ? (correctCount ? (correctCount+1) : '') : (correctCount ? correctCount : '');
		const incorrectResult = mode===false ? (incorrectCount ? incorrectCount+1 : '') : (incorrectCount ? incorrectCount : '')
		const mytotalScore = mode ===true ? totalScore+1 : totalScore;

		return (
			<div>
				{mode === null &&
					<div>
						<h2>Translate the word:</h2><span hidden>{orig}</span>
						<h3 className='flashcard'>{orig}</h3>
						<form className='formGuess' onSubmit={submitHandler}>
							<label htmlFor='learn-guess-input'>What's the translation for this word?</label>
							<br />
							<input id='learn-guess-input' name='guess' type='text' required maxLength='24' autoFocus />
							<Button type='submit' className='btn'>
								Submit your answer
							</Button>
						</form>
					</div>}
				{mode === true && <h2>You were correct!</h2>}
				{mode === false && <h2>Good try, but not quite right</h2>}

				{mode !== null &&
					<div className='DisplayFeedback'>
						<p>The correct translation for {orig} is {trans} and you chose {guess}!</p>
						<Button onClick={nextHandler} className='btn'>
							Try Another Word
						</Button>
					</div>
				}

				<section className='DisplayScore'>
					{mode === true
						? <>
							<p className='totScore'>Your total score is: <span className='results'>{mytotalScore}</span></p>
							<p>You have answered this word correctly <span className='results'>{correctResult}</span> times.</p>
						</>
						: <>
							<p className='totScore'>Your total score is: <span className='results'>{mytotalScore}</span></p>
							<p>You have answered this word correctly <span className='results'>{correctResult}</span> times.</p>
						</>
					}
					{mode === false
						? <p>You have answered this word incorrectly <span className='results'>{incorrectResult}</span> times.</p>
						: <p>You have answered this word incorrectly <span className='results'>{incorrectResult}</span> times.</p>
					}
				</section>
			</div>
		)
	}
}

