import React, { useState } from 'react';
import './App.scss';
import { ReactComponent as Logo } from '../src/assets/logo.svg';
import { ReactComponent as Triangle } from '../src/assets/bg-triangle.svg';
import { ReactComponent as Paper } from '../src/assets/icon-paper.svg';
import { ReactComponent as Scissors } from '../src/assets/icon-scissors.svg';
import { ReactComponent as Rock } from '../src/assets/icon-rock.svg';
import Rules from './components/Rules';
import StartGame from './components/StartGame';

function App() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ gameStarted, setGameStrated ] = useState(false);
  const [ paperIsClicked, setPaperIsClicked ] = useState(false);
  const [ scissorIsClicked, setScissorIsClicked ] = useState(false);
  const [ rockIsClicked, setRockIsClicked ] = useState(false);
  const [ playerScore ] = useState(0);

  if(gameStarted){
    document.getElementById('initial-page').style = 'display: none;';
  }

  return (
    <div className="App">      
      <div id='page'>
        <header className="App-header">
          <div className="Logo">
            <Logo />
          </div> 
          <div className="Score">
            <p>SCORE</p>
            <h1 id='score'>{playerScore}</h1>
            {localStorage.setItem("score", playerScore)}
          </div>
        </header>

      <Rules onClose={() => setModalIsOpen(false)} modalIsOpen={modalIsOpen}/>
      
        <main className="App-main">
          <div className="Choice" id='initial-page'>
            <div className='First-line'>
              <div className='Paper' onClick={() => [setPaperIsClicked(true), setGameStrated(true)]}>
                <Paper />
              </div>
              <div className='Scissors' onClick={() => [setScissorIsClicked(true), setGameStrated(true)]}>
                <Scissors />
              </div>
              <div className='Rock' onClick={() => [setRockIsClicked(true), setGameStrated(true)]}>
                <Rock />
              </div>
            </div>
            <Triangle className="Triangle"/>
          </div>

          <div className='Game'>
            <StartGame gameStarted={gameStarted} paperIsClicked={paperIsClicked} scissorIsClicked={scissorIsClicked} rockIsClicked={rockIsClicked} playerScore={playerScore}/>
          </div>
        </main>

        <footer className="App-footer">
          <button onClick={() => setModalIsOpen(true)}>RULES</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
