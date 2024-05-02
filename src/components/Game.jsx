import Board from "./Board"
import { useState } from "react";
const Game = () => {

    const [history, setHistory ] = useState([Array(9).fill(null)]);
    const [xisNext, setXisNext] = useState(true);
    const [currentMove , setCurrentMove ]= useState(0)

    const currentSquares = history[currentMove];
    function handlePlay(nextSquares){
        setXisNext(!xisNext)
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares]
        setHistory([...history,nextSquares])
        setCurrentMove(nextHistory.length-1)
    }

    function jumpTo(move){
        setCurrentMove(move)
        setXisNext(move % 2 == 0)
    }

    const moves = history.map((squares,move)=>{
        let description
        if(move >0 ){
            description = `Go to move => ${move}`
        }
        else {
            description = `Please Start the game`
        }
        return(
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    })

  return (
    <>
    <div>
        <Board xisNext={xisNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
    <div>
        <ol>{moves}</ol>
    </div>
    </>
  )
}

export default Game