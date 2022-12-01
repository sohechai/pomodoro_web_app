import React, { useEffect, useState } from 'react'
import piou from '../images/pomodoro_logo.png'
import Timer from './Timer'

function Description() {
	const [settings, setSettings] = useState(0);
	const setTo25 = () => {
		setSettings(25);
	}

	const setTo50 = () => {
		setSettings(50);
	}

	useEffect(() => {
		console.log(settings);
	}, [settings])

	return (
		<section className='description'>
			<img alt="piou" src={piou} />
			<div className='center'>
			{
				settings !== 0 ?
					<Timer settings={settings} />
					:
					<div>
						<div className='message'>
							Choose your timer sessions :
						</div>
						<div className='settings' onClick={setTo25}>
							25 / 5
						</div>
						<div className='settings' onClick={setTo50}>
							50 / 10
						</div>
					</div>

			}
			</div>
		</section>
	)
}

export default Description