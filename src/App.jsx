import { useState } from 'react'

import './App.css'
import Main from './Components/Acceuil/acceuil'
import Header from './Components/Header/Header'
import Play from './Components/Play/play'
import paper from "/src/assets/images/icon-paper.svg"
import rock from "/src/assets/images/icon-rock.svg"
import cizo from "/src/assets/images/icon-scissors.svg"

function App() {
  // État pour contrôler l'affichage des composants
  const [play, setPlay] = useState(false)
  const [choix, setChoix] = useState(true)
  
  // État pour stocker le choix de l'utilisateur et de l'ordinateur
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState("")
  const [score, setScore] = useState(0)
  
  // Images et classes correspondantes
  const choices = [
    { name: "paper", image: paper, class: "paper-versus icon-versus", opsClass: "icon-versus paper-ops" },
    { name: "rock", image: rock, class: "rock-versus icon-versus", opsClass: "icon-versus rock-ops" },
    { name: "scissors", image: cizo, class: "cizo-versus icon-versus", opsClass: "icon-versus cizo-ops" }
  ]

  // Fonction pour déterminer le résultat du jeu
  const determineWinner = (user, computer) => {
    if (user === computer) return "IT'S A TIE";
    
    if (
      (user === "paper" && computer === "rock") ||
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper")
    ) {
      setScore(prevScore => prevScore + 1);
      return "YOU WIN";
    } else {
      setScore(prevScore => Math.max( prevScore - 1));
      return "YOU LOSE";
    }
  };

  // Fonction appelée lorsque l'utilisateur fait un choix
  const handleUserChoice = (choice) => {
    // Choix de l'utilisateur
    setUserChoice(choice);
    
    // Choix aléatoire de l'ordinateur
    const randomIndex = Math.floor(Math.random() * 3);
    const computerSelection = choices[randomIndex];
    setComputerChoice(computerSelection);
    
    // Déterminer le résultat
    const gameResult = determineWinner(choice.name, computerSelection.name);
    setResult(gameResult);
    
    // Changer d'écran
    setPlay(true);
    setChoix(false);
  };

  // Fonction pour retourner à l'écran principal
  const playAgain = () => {
    setPlay(false);
    setChoix(true);
  };

  return (
    <>
      <Header score={score} />  
      
      {choix && 
        <Main onChoiceSelected={handleUserChoice} choices={choices} />
      }
      
      {play && 
        <Play 
          event={playAgain} 
          resultat={result}
          opschoix={computerChoice.image} 
          opsclass={computerChoice.opsClass} 
          choix={userChoice.image} 
          choixclass={userChoice.class}
        />
      }
    </>
  )
}

export default App