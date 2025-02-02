import React from 'react'
import { TaskType } from '../types/TaskType'

interface taskProps {
  task : TaskType
}

const TaskCard: React.FC<taskProps> = ({task}) => {
  return (
    <div>TaskCard</div>
  )
}

export default TaskCard