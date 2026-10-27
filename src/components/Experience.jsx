import { Suspense, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'
import { Office } from './Office'

// @react-three/fiber 9.8 reconnects events to the <Canvas> div whenever the Canvas
// re-renders, which silently unhooks ScrollControls' scroll listener. Hand the
// events back to the scroll container whenever that happens.
const KeepScrollConnected = () => {
  const scroll = useScroll()
  const events = useThree((state) => state.events)

  useEffect(() => {
    if (events.connected !== scroll.el) events.connect?.(scroll.el)
  }, [events, scroll.el])

  return null
}

export const Experience = () => {
  return (
    <>
    <ambientLight intensity={2} />
      <OrbitControls enableZoom={false}/>
      <ScrollControls pages={3} damping={0.25}>
        <KeepScrollConnected />
        <Suspense fallback={null}>
          <Office />
        </Suspense>
      </ScrollControls>
    </>
  )
}
