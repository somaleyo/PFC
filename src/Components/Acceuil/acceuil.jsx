import './acceuil.css'

export default function Main(props) {
    return(
        <>
            <div id="score">
                <div className="titre">
                    <h1>ROCK</h1>
                    <h1>PAPER</h1>
                    <h1>SCISSORS</h1>
                </div>
                <div className="resultat">
                    <h2>SCORE </h2>
                    <h1 className='score'>{props.score}</h1>
                </div>
            </div>
            <div className="jeu">
                
            </div>
        </>
    )
}