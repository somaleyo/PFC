import { useState } from 'react'

import './App.css'
import Main from './Components/Acceuil/acceuil'
import Header from './Components/Header/Header'
import Play from './Components/Play/play'
import paper from "/src/assets/images/icon-paper.svg"
import rock from "/src/assets/images/icon-rock.svg"
import cizo from "/src/assets/images/icon-scissors.svg"
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
    <Main event={jeu} />}
      {play && <Play event={jeu} resultat="YOU WIN"opschoix={rock} opsclass="icon-versus rock-ops" choix={paper} choixclass="paper-versus icon-versus"/>}
      
    </>
  )
}

export default App
