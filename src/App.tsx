import React from 'react'
import './App.css'
import Carousel3D from './components/Carousel3D'
import Project from './components/Project/Project'

function App() {
  const slides = [
    {
      key: 1,
      content: (
        <Project
          image="https://picsum.photos/800/800/?random"
          title="Project 1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      ),
    },
    {
      key: 2,
      content: (
        <Project
          image="https://picsum.photos/800/800/?random"
          title="Project 2"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      ),
    },
    {
      key: 3,
      content: (
        <Project
          image="https://picsum.photos/800/800/?random"
          title="Project 3"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      ),
    },
    {
      key: 4,
      content: (
        <Project
          image="https://picsum.photos/800/800/?random"
          title="Project 4"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      ),
    },
    {
      key: 5,
      content: (
        <Project
          image="https://picsum.photos/800/800/?random"
          title="Project 5"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      ),
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Carousel3D card={slides} offset={100} showArrow={false} />
      </header>
    </div>
  )
}

export default App
