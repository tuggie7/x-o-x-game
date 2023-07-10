import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Board from "./components/Board";
import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";

function App() {

  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,5,6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [changeToggle, setChangeToggle] = useState("X");
  const [scores,setScores] = useState({xScore:0, oScore:0});
  const toggleChange = () => {
    setChangeToggle(changeToggle === "X" ? "O" : "X");
  };

  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return changeToggle;
      } else{ 
        return value;
      }
      
    });

    setBoard(updateBoard);
    toggleChange();

    

    const winner =checkWinner(updateBoard);

    if(winner) {
      if(winner==="O"){
        let {oScore} = scores;
        oScore +=1;
        setScores({...scores,oScore})
      } else {
        let {xScore} = scores;
        xScore +=1;
        setScores({...scores,xScore})
      }
    }
  };

  const checkWinner = (board) => {
    for(let i = 0 ; i < WIN_CONDITIONS.length; i++) {
      const [x,y,z] = WIN_CONDITIONS[i];
      if ([x] && board[x] === board[y] && board[y] === board[z]) {
         
        return board[x];
      }
    }
}

  const resetBoard = () => {
    setBoard(Array(9).fill(null))   
  }


 


  return (
    <div className="App">
      <ScoreBoard scores={scores} changeToggle={changeToggle}/>
      <Board board={board} onClick={handleBoxClick} disabled = {true} />
      <div className="buton">
      <button onClick={resetBoard} className="btn btn-danger">Reset</button>
      </div>
    </div>
  );
}

export default App;
