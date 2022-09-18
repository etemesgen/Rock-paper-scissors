import React from 'react';
import { ReactComponent as Paper } from '../assets/icon-paper.svg';
import { ReactComponent as Scissors } from '../assets/icon-scissors.svg';
import { ReactComponent as Rock } from '../assets/icon-rock.svg';

const StartGame = props => {

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
      </div>
    </div>

    {(() => {
      if ((props.paperIsClicked && generateChoice() === 'Rock') 
      || (props.rockIsClicked && generateChoice() === 'Scissors') 
      || (props.scissorIsClicked && generateChoice() === 'Paper')
      ) {
        return (
          <div className='Result'>
            {
              localStorage.setItem("score", props.playerScore + 1)
            }
            {
              document.getElementById('score').innerHTML = localStorage.getItem('score')
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
            <h1>DRAW</h1>
            <button onClick={restartGame}>PLAY AGAIN</button>
          </div>
        )
      } 
      else {
        return (
          <div className='Result'>
            <h1>YOU LOSE</h1>
            <button onClick={restartGame}>PLAY AGAIN</button>
          </div>
        )
      }
    })()}

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
      </div>
    </div>
  </div>
}

export default StartGame;