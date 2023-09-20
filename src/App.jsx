import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './componente/Card1'

function App() {

  return (
    <>
     <Card1
      min = {1}
      max = {60}
     > </Card1>
    </>
  )
}

export default App
