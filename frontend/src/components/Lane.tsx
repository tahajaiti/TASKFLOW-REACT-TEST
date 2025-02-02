import React from 'react'

interface laneProps {
    name: string
}

const Lane: React.FC<laneProps> = ({name}) => {
  return (
    <div>Lane</div>
  )
}

export default Lane