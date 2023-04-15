import { useState } from "react"

function Square({value, onSquareClick}) {
    return (
        <button id="square" onClick={onSquareClick} >{value}</button>
    )
}


export default function Board(props) { 
    const [squares, setSquares] = useState(Array(9).fill('\u2060'));
    const [winner, setWinner] = useState(null);

    function reset() {
        props.setIsX(true);
        setSquares(Array(9).fill('\u2060'))
        setWinner(null);
        props.saveHistory([Array(9).fill('\u2060')])
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          const z = squares[a];
          if ((z === 'X'| z==='O') && squares[a] === squares[b] && squares[a] === squares[c]) {
            setWinner(z)
          }
        }
    }
    function handleClick(i) {
        if (winner==='X' | winner==='O'){return;}
        const nextSquares = squares.slice();
        if (!(nextSquares[i] === 'X' | nextSquares[i] === 'O')){
            nextSquares[i] = props.isX? 'X':'O'
            setSquares(nextSquares);
            props.setIsX(prevState => !prevState);
            const hist = props.history.slice();
            hist.push(nextSquares)
            props.saveHistory(hist);
            console.log(props.history, 'history');
            calculateWinner(nextSquares);
        }
    }
    return (
        <div className="container">
            <div>{winner? `Winner is: ${winner}`: ''}</div>
            <div>{!winner? `Next player is: ${props.isX? 'X': 'O'}`: ''}</div>
            <div className="board-row">
                <Square 
                    value={squares[0]} 
                    onSquareClick={() => handleClick(0)} 
                />
                <Square 
                    value={squares[1]} 
                    onSquareClick={() => handleClick(1)} 
                />
                <Square 
                    value={squares[2]} 
                    onSquareClick={() => handleClick(2)} 
                />
            </div>
            <div className="board-row">
                <Square 
                    value={squares[3]} 
                    onSquareClick={() => handleClick(3)} 
                />
                <Square 
                    value={squares[4]} 
                    onSquareClick={() => handleClick(4)} 
                />
                <Square 
                    value={squares[5]} 
                    onSquareClick={() => handleClick(5)} 
                />
            </div>
            <div className="board-row">
                <Square 
                    value={squares[6]} 
                    onSquareClick={() => handleClick(6)} 
                />
                <Square 
                    value={squares[7]} 
                    onSquareClick={() => handleClick(7)} 
                />
                <Square 
                    value={squares[8]} 
                    onSquareClick={() => handleClick(8)} 
                />
            </div>
            <button id="reset" onClick={reset}>Reset</button>
        </ div>
    )
}