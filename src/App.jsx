import { useState } from 'react'

import './App.css'
import Main from './Components/Acceuil/acceuil'
import Header from './Components/Header/Header'
import Play from './Components/Play/play'

function App() {
  const [play,setPlay] = useState(false)
  const [choix,setChoix] = useState(true)
  const jeu =()=>{
    setPlay(!play)
    setChoix(!choix)
  }
  

  return (
    <>
    <Header score="10"/>
    {choix &&
    <Main event={jeu}/>}
      {play && <Play event={jeu} resultat="YOU WIN"/>}
      
    </>
  )
}

export default App
