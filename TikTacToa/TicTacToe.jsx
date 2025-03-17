import { useRef, useState } from 'react';

import Circle_Nean from './assets/Circle_Nean.png';
import Cross_Nean from './assets/Cross_Nean.png';

export default function TicTacToe() {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [playerName, setPlayerName] = useState("X");
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
   const [message,setMessage] =useState( " "+"Turn");
    const switchPlayer = (e, num) => {
        if (lock || data[num] !== "") {
            return 1;
        }

        const newData = [...data];
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${Cross_Nean}' className="cross" alt='X' />`;
            newData[num] = "X";
            setPlayerName("O");
        } else {
            e.target.innerHTML = `<img src='${Circle_Nean}' className="circle" alt='O' />`;
            newData[num] = "O";
            setPlayerName("X");
        }

        setData(newData);
        setCount(count + 1);
        CheckWinner(newData);
    };

    const CheckWinner = (newData) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
                won(newData[a]);
                
                
                return;
            }
        }

        if (!newData.includes("")) {
            setLock(true);
            setMessage("It's a draw!")
            setPlayerName("");
           
        }
    };

    const won = (winner) => {
        setLock(true);
        setPlayerName(winner)
        setMessage("Wins !")
       
  
    };

    const resetGame = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setPlayerName("X");
        setCount(0);
        setLock(false);
        setMessage(" "+"Turn")
        const cells = document.querySelectorAll('.boxes');
        cells.forEach(cell => cell.innerHTML = "");
    };

    

    return (
        <>
            <div className="container">
                <h1>Tic Tac Toe</h1>
                <p className="Information_message"> 
                    <span className='Hightlited_Text'>{playerName}</span> <span>
                        {message}</span></p>
                <div className="board">
                    <div className="row1">
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 0) }}></div>
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 1) }}></div>
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 2) }}></div>
                    </div>
                    <div className="row2">
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 3) }}></div>
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 4) }}></div>
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 5) }}></div>
                    </div>
                    <div className="row3">
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 6) }}></div>
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 7) }}></div>
                        <div className="boxes" onClick={(e) => { switchPlayer(e, 8) }}></div>
                    </div>
                </div>
                <button className="NewGame_Button" onClick={resetGame}>New Game</button>
            </div>
        </>
    );
}
