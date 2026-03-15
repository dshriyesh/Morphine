import { useEffect, useState } from "react"

const MosaicTile = ({ images, initialIndex = 0, interval = 6000, className = '' }) => {
  const [current, setCurrent] = useState(initialIndex)
  const [next, setNext] = useState((initialIndex + 1) % images.length)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)                          // start fade
      setTimeout(() => {
        setCurrent(next)                       // swap image after fade
        setNext(prev => (prev + 1) % images.length)
        setFading(false)                       // reset fade
      }, 1500)                                 // matches transition duration
    }, interval)
    return () => clearInterval(timer)
  }, [next, interval])

  return (
    <div className={`rounded-md overflow-hidden relative ${className}`}>
      {/* bottom layer — incoming image */}
      <img
        src={images[next]}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* top layer — current image fading out */}
      <img
        src={images[current]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}

export default MosaicTile