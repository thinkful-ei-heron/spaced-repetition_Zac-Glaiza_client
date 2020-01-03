import React from 'react'
import WordContext from '../../contexts/WordContext'
import Button from '../../components/Button/Button'

import './Learner.css'

export default class Learner extends React.Component {
	static contextType = WordContext;

	render() {
		const { orig, trans, guess, correctCount, incorrectCount, totalScore, mode, submitHandler, nextHandler } = this.context;
		const correctResult = mode === true ? correctCount + 1 : correctCount
		const incorrectResult = mode === false ? incorrectCount + 1 : incorrectCount
		const mytotalScore = mode === true ? totalScore + 1 : totalScore;

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
				{mode === true && <h2 className='correctMsg'>You were correct!</h2>}
				{mode === false && <h2 className='wrongMsg'>Good try, but not quite right</h2>}

				{mode !== null &&
					<div className='DisplayFeedback'>
						{mode === false
							? <p>The correct translation for <span className='orig'>{orig}</span> is <span className='trans'>{trans}</span> and you chose <span className='guess'>{guess}</span>!</p>
							: <p>The correct translation for <span className='orig'>{orig}</span> is <span className='trans2'>{trans}</span> and you chose <span className='guess2'>{guess}</span>!</p>
						}
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

