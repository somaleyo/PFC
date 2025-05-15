import './acceuil.css'

import triangle from "/src/assets/images/bg-triangle.svg"
import paper from "/src/assets/images/icon-paper.svg"
import rock from "/src/assets/images/icon-rock.svg"
import cizo from "/src/assets/images/icon-scissors.svg"
import rules from "/src/assets/images/image-rules.svg"
import close from "/src/assets/images/icon-close.svg"
import { useState } from 'react'

export default function Main(props) {
    const [open, setOpen] = useState(false)
    
    const handleClick = () => {
        setOpen(!open)
    }
    
    // Options du jeu
    const choices = props.choices || [
        { name: "paper", image: paper, class: "paper-versus icon-versus", opsClass: "icon-versus paper-ops" },
        { name: "rock", image: rock, class: "rock-versus icon-versus", opsClass: "icon-versus rock-ops" },
        { name: "scissors", image: cizo, class: "cizo-versus icon-versus", opsClass: "icon-versus cizo-ops" }
    ];
    
    // Fonction qui transmet le choix de l'utilisateur à App.jsx
    const handleChoiceClick = (choice) => {
        if (props.onChoiceSelected) {
            props.onChoiceSelected(choice);
        }
    };
    
    return(
        <>
            <div className="jeu">
                <img className='triangle' src={triangle} alt="" />
                
                <button className="paper icon" onClick={() => handleChoiceClick(choices[0])}>
                    <img className='home-icone' src={paper} alt="" />
                </button>
                
                <button className="cizo icon" onClick={() => handleChoiceClick(choices[2])}>
                    <img className='home-icone' src={cizo} alt="" />
                </button>
                
                <button className="icon rock" onClick={() => handleChoiceClick(choices[1])}>
                    <img className='home-icone' src={rock} alt="" />
                </button>
            </div>
            
            <button className="modal-regle" onClick={handleClick}>
                RULES
            </button>
            
            {open && (
                <div className="modal-bg" onClick={handleClick}>
                    <div className="regle" onClick={(e) => e.stopPropagation()}>
                        <div className="top-regle">
                            <h1 className="rules-titre">RULES</h1>
                            <img onClick={handleClick} className='close' src={close} alt="" />
                        </div>
                        <img className='regle-img' src={rules} alt="" />
                    </div>
                </div>
            )}
        </>
    )
}