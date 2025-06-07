import { useState } from "react"

export const TicTac = () => {
    return (
        <div style={{textAlign: 'center', marginLeft: "50%", marginTop: "48px"}}>
         <Board />
        </div>
       
    )
}


export const Board = () => {
 
    const [squares, setMoves] = useState(Array(9).fill(""));
    const [currentMove, setCurrentMove] = useState(0)
    const isXNextMove = currentMove % 2;
    const [winner, setWinner ] = useState("")


    const handleClick = (i) => {
        if (squares[i] == "") {
       squares[i] = isXNextMove ? 'X' : 'O';
       setCurrentMove((move)=> move +1);
       checkWinner()
        }
        
    }

    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          winningCombos.forEach(value => {
             let Xwins = value.every((val) => squares[val] == "X");
             if(Xwins);{
                setWinner("X")
                return ;
             }
            
          })

    } 
    return (
        <>
    <div style={{display: "flex", flexDirection: "column"}}> 
      <div>
        <Square value={squares[0]}  onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]}  onSquareClick={() => handleClick(2)}/>
      </div>

      <div>
         <Square value={squares[3]}   onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]}  onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]}  onSquareClick={() => handleClick(5)}/>
      </div>

      <div>
         <Square value={squares[6]}  onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]}  onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]}  onSquareClick={() => handleClick(8)}/>
      </div>
       
    </div>

    <div>
        winner is {winner}
    </div>
    </>
    )
}


export const Square = ({value, onSquareClick}) => {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}