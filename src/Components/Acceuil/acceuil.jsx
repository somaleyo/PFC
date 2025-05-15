import './acceuil.css'
import triangle from "/src/assets/images/bg-triangle.svg"

import paper from "/src/assets/images/icon-paper.svg"
import rock from "/src/assets/images/icon-rock.svg"
import cizo from "/src/assets/images/icon-scissors.svg"


export default function Main() {
    return(
        <>
           
            <div className="jeu">
                <img className='triangle' src={triangle} alt="" />
                <img className='triangle' src={paper} alt="" />
                <img className='triangle' src={cizo} alt="" />
                <img className='triangle' src={rock} alt="" />
            </div>
        </>
    )
}