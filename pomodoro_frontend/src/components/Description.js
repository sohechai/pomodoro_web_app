import React, { useEffect, useState } from 'react'
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
	}, [settings])

	return (
		<section className='description'>
			<div className='center'>
				{
					settings !== 0 ?
						<Timer settings={settings} />
						:
						<div className='descriptionContenu'>
							<div className='message'>
								Set your timer sessions : (work / break)
							</div>
							<div className='settings' onClick={setTo25}>
								25min / 5min
							</div>
							<div className='settings' onClick={setTo50}>
								50min / 10min
							</div>
						</div>

				}
			</div>
		</section>
	)
}

export default Description