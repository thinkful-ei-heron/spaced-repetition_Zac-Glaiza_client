import React from 'react'

import './Word.css'

export default function Word(props) {
	const { word } = props;
	
	return (
		<li className='word'>
			<h4>{word.original}</h4>
			<h5>{word.translation}</h5>
			<span>
				<div className='cor-count'>Correct answer count: <span className='results rst'>{word.correct_count}</span></div>
				<div className='cor-count'>Incorrect answer count: <span className='results rst1'>{word.incorrect_count}</span></div>
			</span>
				
		</li>
	)
}