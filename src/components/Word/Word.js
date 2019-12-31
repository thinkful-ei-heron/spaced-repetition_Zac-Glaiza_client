import React from 'react'

import './Word.css'

export default function Word(props) {
	const { word } = props;
	
	return (
		<li className='word'>
			<h4>{word.original}</h4>
			<h5>{word.translation}</h5>
			<span>
				<div>Correct answer count: {word.correct_count}</div>
				<div>Incorrect answer count: {word.incorrect_count}</div>
			</span>
				
		</li>
	)
}