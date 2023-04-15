import {useState} from 'react';

import Board from './Board';



export default function Game() {
    const [history, setHistory] = useState([Array(9).fill('\u2060')])
    const [isX, setIsX] = useState(true);
    const currentState = history[history.length - 1];
    const [currentMove, setCurrenMove] = useState(0);
    const moves = history.map((square, move) => {
        console.log(square, move)
        return (
            <li key={move}><button id='move' onClick={()=>jumpTo(move)}>Go to move: {move}</button></li>
        )
    })
    function jumpTo(move){
        setCurrenMove(move);
        setIsX(move%2===0);
        
    }
    function handlePlay() {
        console.log('handling play since 1993');
    }
    return (
        <div className='game'>
            <div className='game-board'>
                <Board 
                    history={history}
                    saveHistory={setHistory}
                    handlePlay={handlePlay}
                    setIsX={setIsX}
                    isX={isX}
                    current={currentState}
                />
            </div>
            <div className='game-info'>
                <h3>History:</h3>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}