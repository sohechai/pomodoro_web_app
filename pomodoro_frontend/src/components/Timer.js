import React, { useEffect, useState } from 'react'

function Timer({ settings }) {
	const [minutes, setMinutes] = useState(settings)
	const [seconds, setSeconds] = useState(0)
	const [displayMessage, setDisplayMessage] = useState(false)
	const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

	
	useEffect(() => {
		let interval = setInterval(() => {
			clearInterval(interval)

			if (seconds === 0) {
				if (minutes !== 0) {
					setSeconds(59)
					setMinutes(minutes - 1)
				} else {
					const breakTimer = (settings === 25) ? 4 : 9;
					let minutes = displayMessage ? 24 : breakTimer
					let seconds = 59

					setSeconds(seconds)
					setMinutes(minutes)
					setDisplayMessage(!displayMessage)
				}
			} else {
				setSeconds(seconds - 1)
			}
		}, 1000)
	}, [seconds])


	return (
		<section className='timer'>
			<div className="message">
				{
					displayMessage ?
					<div className='message'>Take a break ! Starting again in :</div>
					:
					<div className='message'>Keep working hard ! You will take a break in :</div>
				}
			</div>
			<div className="clock">
				<div className='clockCase'>{timerMinutes}</div>
				<span> : </span>
				<div className='clockCase'>{timerSeconds}</div>
			</div>
		</section>
	)
}

export default Timer