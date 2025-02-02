import React from 'react'
import Lane from './Lane';

const Container: React.FC = () => {
  return (
    <main className='min-h-[90vh] max-h-[90vh] grid grid-cols-1 lg:grid-cols-3 overflow-x-hidden'>
        <Lane name='todo'/>
        <Lane name='doing'/>
        <Lane name='done'/>
    </main>
  )
}

export default Container