import React from 'react'
import Todo from './Todo'

const TaskList = ({ tasksData, handleCheckbox }) => {

	return (
		<div className='list'>
			{
				tasksData.map(item => {
					return (
						<Todo key={item.id} task={item} handleCheckbox={handleCheckbox} />
					)
				})}
		</div>
	)
}

export default TaskList