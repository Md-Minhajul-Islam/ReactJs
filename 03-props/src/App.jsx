import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card
        name="Minhaj"
        bio="Software Developer"
        img="https://images.unsplash.com/photo-1761669973922-3e4107cf1136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
      />
      <Card
        name="Jabir"
        bio="Software Engineer"
        img="https://plus.unsplash.com/premium_photo-1759773084661-a535bfcedf73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzNXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
      />
    </div>
  );
}

export default App