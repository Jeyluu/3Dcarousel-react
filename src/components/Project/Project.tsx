import { useSpring, animated } from 'react-spring'
import React, { useState } from 'react'

interface ProjectP {
  image: string
  title: string
  description: string
}

function Project(props: ProjectP) {
  const { image, title, description } = props

  const [show, setShown] = useState(false)

  const props3 = useSpring({
    opacity: 1,
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  })
  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={image} alt={`name-${image}`}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </animated.div>
  )
}

export default Project
