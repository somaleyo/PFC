
import './play.css'

export default function Play(props) {
    
    return(
    <>
        <div className="play-container">
             <div className='pick'>
                <h2 className='anonce'>YOU PICKED</h2>
                <h2 className='anonce'>THE HOUSE PICKED</h2>
            </div>
            <div className="choix">
                <button className={props.choixclass}>
                    <img className='' src={props.choix} alt="" />
                </button>
                <div className="result">
                    <h1 className='you'>{props.resultat} </h1>
                    <button onClick={props.event} className="restart">
                        PLAY AGAIN
                    </button>
                </div>
                <div className="choix-ops">
                    <button className={props.opsclass}>
                        <img src={props.opschoix} alt="" />
                    </button>
                </div>
               
            </div>
        </div>

        
    </> 

    )
}