import './acceuil.css'
import triangle from "/src/assets/images/bg-triangle.svg"

import paper from "/src/assets/images/icon-paper.svg"
import rock from "/src/assets/images/icon-rock.svg"
import cizo from "/src/assets/images/icon-scissors.svg"
import rules from "/src/assets/images/image-rules.svg"
import close from "/src/assets/images/icon-close.svg"

export default function Main() {
    return(
        <>
           
            <div className="jeu">
                <img className='triangle' src={triangle} alt="" />
               
                <button className="paper icon">
                   <img className='' src={paper} alt="" />
                </button>
                <button className="cizo icon">
                    <img className='' src={cizo} alt="" />
                </button>
                
            <button className="icon rock">
                <img className='' src={rock} alt="" />
            </button> 
            </div>
            <button className="modal-regle">
                RULES
            </button>
            <div className="regle">
                <div className="top-regle">
                    <h1 className="rules-titre">RULES</h1>
                    <img className='close' src={close} alt="" />
                </div>
                <img className='regle-img' src={rules} alt="" />

            </div>
        </>
    )
}