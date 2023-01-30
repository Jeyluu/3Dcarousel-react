import Carousel from 'react-spring-3d-carousel'
import { useState, useEffect } from 'react'
import { config } from 'react-spring'

interface Carousel3DP {
  card: {
    key: number
    content: JSX.Element
  }[]
  offset: number
  showArrow: boolean
}

function Carousel3D(props: Carousel3DP) {
  const { card, offset, showArrow } = props

  const table = card.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  })

  const [showArrows, setShowArrows] = useState(false)
  const [offsetRadius, setOffsetRadius] = useState(4)
  const [goToSlide, setGoToSlide] = useState(0)
  const [cards] = useState(table)

  useEffect(() => {
    setOffsetRadius(offset)
    setShowArrows(showArrow)
  }, [offset, showArrow, showArrows])

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  )
}

export default Carousel3D
