import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {
  return (
    <Canvas camera ={{
      fov:90,
      position:[2.3,1.5,2.3],
    }}>
      <Experience />
    </Canvas>
  );  
}

export default App
