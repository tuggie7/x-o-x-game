import React from 'react'
import "./ScoreBoard.css"
const ScoreBoard = ({scores,changeToggle}) => {
    const{xScore,oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className='xScore'>X - {xScore}</span>
        <span className='oScore'>O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard