import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import piou from '../images/pomodoro_logo.png'

function Header() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 320,
		bgcolor: '#e4d9d2',
		border: 'none',
		borderRadius: '17px',
		boxShadow: 24,
		p: 4,
		textAlign: 'left',
		fontSize: '16px'
	};

	return (
		<section className='header'>
			<div className='logo'>
				<img alt="piou" src={piou} />
			</div>
			<div className='title'>
				<h3>
					Pomodoro
				</h3>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16" onClick={handleOpen}>
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
					<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
				</svg>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				disableEnforceFocus
			>
				<Box sx={style}>
					The secret to effective time management is...thinking in tomatoes rather than hours? It may seem silly at first, but millions of people swear by the life-changing power to the Pomodoro Technique. (Pomodoro is Italian for tomato. 🍅).

					This popular time management method asks you to alternate pomodoros — focused work sessions — with frequent short breaks to promote sustained concentration and stave off mental fatigue.
					<br />
					<br />
					1 - Pick a task on your to do list ✏️
					<br />
					2 - Set a timer of 25 or 50 minutes ⏰
					<br />
					3 - Work on your task until the time is up 👩‍💻
					<br />
					4 - Take a break ☕
				</Box>
			</Modal>
		</section>
	)
}

export default Header