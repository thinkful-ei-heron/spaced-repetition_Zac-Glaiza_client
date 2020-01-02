import React from 'react'
import WordContext from '../../contexts/WordContext'

import Button from '../../components/Button/Button'

import './Learner.css'

export default class Learner extends React.Component {
	static contextType = WordContext;

	render() {
		const { orig, trans, guess, correctCount, incorrectCount, totalScore, mode, submitHandler, nextHandler } = this.context;

		return (
			<div>
				{mode === 'guess' &&
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
				{mode === 'pass' && <h2>You were correct!</h2>}
				{mode === 'fail' && <h2>Good try, but not quite right</h2>}

				{mode !== 'guess' &&
					<div>
						<p>The correct translation for {orig} is {trans} and you chose {guess}!</p>
						<Button onClick={nextHandler} className='btn'>
							Try Another Word
						</Button>
					</div>
				}

				<section className='DisplayScore'>
					{mode === 'pass'
						? <>
							<p>Your total score is: <span className='results'>{totalScore + 1}</span></p>
							<p>You have answered this word correctly <span className='results'>{correctCount + 1}</span> times.</p>
						</>
						: <>
							<p>Your total score is: <span className='results'>{totalScore}</span></p>
							<p>You have answered this word correctly <span className='results'>{correctCount}</span> times.</p>
						</>
					}
					{mode === 'fail'
						? <p>You have answered this word incorrectly <span className='results'>{incorrectCount + 1}</span> times.</p>
						: <p>You have answered this word incorrectly <span className='results'>{incorrectCount}</span> times.</p>
					}
				</section>
			</div>
		)
	}
}

