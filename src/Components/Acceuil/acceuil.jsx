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

    const trojkont =   <img className='triangle' src={triangle} alt="" />

     const papier = <button onClick={props.event} className="paper icon">
                   <img className='' src={paper} alt="" />
                </button>

    const kamien = <button onClick={props.event} className="icon rock">
                    <img className='' src={rock} alt="" />
                </button>   
    const nozyce=  <button onClick={props.event} className="cizo icon">
                    <img className='' src={cizo} alt="" />
                </button>
    
    return(
        <>
            <div className="jeu">
                {trojkont}
                {papier}
                {kamien}
                {nozyce}
                
               
                
               
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
