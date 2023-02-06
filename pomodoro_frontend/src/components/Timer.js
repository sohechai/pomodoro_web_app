import React, { useEffect, useState } from 'react'
import alarm from '../sounds/alarm_clock_sound_effect.mp3'

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
					const audio = new Audio(alarm);
					audio.loop = false;
					audio.play()
					const breakTimer = (settings === 25) ? 4 : 9;
					let minutes = displayMessage ? settings - 1 : breakTimer
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
			<div className="messageTimer">
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