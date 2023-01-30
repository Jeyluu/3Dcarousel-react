import React from 'react'
import './App.css'
import Carousel3D from './components/Carousel3D'

function App() {
  const slides = [
    {
      key: 1,
      content: <img src="https://picsum.photos/800/800/?random" alt="1" />,
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/800/800/?random" alt="2" />,
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/600/800/?random" alt="3" />,
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>test</h1>
        <Carousel3D card={slides} offset={200} showArrow={false} />
      </header>
    </div>
  )
}

export default App
