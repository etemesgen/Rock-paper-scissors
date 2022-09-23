import React, { useState } from 'react';
import { ReactComponent as Paper } from '../assets/icon-paper.svg';
import { ReactComponent as Scissors } from '../assets/icon-scissors.svg';
import { ReactComponent as Rock } from '../assets/icon-rock.svg';

const StartGame = props => {
  const [isActive, setIsActive] = useState(false);

  if(!props.gameStarted){
    return null
  } 

  const number = Math.floor(Math.random() * 3);

  function generateChoice(){
    if(number === 1){
      return 'Paper';
    } else if(number === 2){
      return 'Scissors';
    } else if(number === 0){
      return 'Rock';
    } else {
      return null;
    }
  }

  function restartGame(){
    window.location.reload(false);
  }

  let score = parseInt(sessionStorage.getItem("score"));

  function saveScoreWin(){
    sessionStorage.setItem('score', score + 1);
  }

  function getScore(){
    if(sessionStorage.getItem('score') !== null){
      document.getElementById('score').innerHTML = sessionStorage.getItem('score');
    } else {
      document.getElementById('score').innerHTML = 0;
    }
  }

  return <div className='StartGame'>
    <div className="Player">
      <p>YOU PICKED</p>
      <br />
      <div className="Player-choice">
        { props.paperIsClicked ? 
          <div className='Paper' id='choice'>
            <Paper />
          </div>
          :
          null
        }
        { props.scissorIsClicked ? 
          <div className='Scissors' id='choice'>
            <Scissors />
          </div>
          :
          null
        }
        { props.rockIsClicked ? 
          <div className='Rock-game' id='choice'>
            <Rock />
          </div>
          :
          null
        }
        <div className={isActive ? "circle circle1" : ''}></div>
        <div className={isActive ? "circle circle2" : ''}></div>
        <div className={isActive ? "circle circle3" : ''}></div>
      </div>
    </div>

    {(() => {
      if ((props.paperIsClicked && generateChoice() === 'Rock') 
      || (props.rockIsClicked && generateChoice() === 'Scissors') 
      || (props.scissorIsClicked && generateChoice() === 'Paper') ||
      (setIsActive(true))
      ) {
        return (
          <div className='Result'>
            {
              saveScoreWin()
            }
            <h1>YOU WIN</h1>
            <button onClick={restartGame}>PLAY AGAIN</button>
          </div>
        )
      } 
      else if ((props.paperIsClicked && generateChoice() === 'Paper') 
      || (props.rockIsClicked && generateChoice() === 'Rock')
      || (props.scissorIsClicked && generateChoice() === 'Scissors')) {
        return (
          <div className='Result'>
            {
              sessionStorage.setItem('score', 0)
            }
            <h1>DRAW</h1>
            <button onClick={restartGame}>PLAY AGAIN</button>
          </div>
        )
      } 
      else {
        return (
          <div className='Result'>
            {
              sessionStorage.setItem('score', 0)
            }
            <h1>YOU LOSE</h1>
            <button onClick={restartGame}>PLAY AGAIN</button>
          </div>
        )
      }      
    })()}

    {
      getScore()
    }

    <div className="Opponent">
      <p>THE HOUSE PICKED</p>
      <div className="Opponent-choice">
        {(() => {
          if (number === 1) {
            return (
              <div className='Paper' id='choice'>
                <Paper />
              </div>
            )
          } else if (number === 2) {
            return (
              <div className='Scissors' id='choice'>
                <Scissors />
              </div>
            )
          } else if (number === 0){
            return (
              <div className='Rock-game' id='choice'>
                <Rock />
              </div>
            )
          } else {
            return (
              null
            )
          }
        })()}
        <div className={!isActive ? "circle1-1 circle1" : ''}></div>
        <div className={!isActive ? "circle1-1 circle2" : ''}></div>
        <div className={!isActive ? "circle1-1 circle3" : ''}></div>
      </div>
    </div>
  </div>
}

export default StartGame;