import React from 'react'

export default function Word(props) {
	return (
		<div className='word'>
			<h3>{props.word.original} - {props.word.translation}</h3>
	        <p>Correct Answer Count: {props.word.correct_count}</p>
			<p>Incorrect Answer Count: {props.word.incorrect_count}</p>
		</div>
	)
}