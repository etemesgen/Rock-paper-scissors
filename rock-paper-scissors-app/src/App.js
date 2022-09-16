import React, { useState } from 'react';
import './App.scss';
import { ReactComponent as Logo } from '../src/assets/logo.svg';
import { ReactComponent as Triangle } from '../src/assets/bg-triangle.svg';
import { ReactComponent as Paper } from '../src/assets/icon-paper.svg';
import { ReactComponent as Scissors } from '../src/assets/icon-scissors.svg';
import { ReactComponent as Rock } from '../src/assets/icon-rock.svg';
import Rules from './components/Rules';

function App() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  return (
    <div className="App">
      <Rules onClose={() => setModalIsOpen(false)} modalIsOpen={modalIsOpen}/>
      
      <div id='page'>
        <header className="App-header">
          <div className="Logo">
            <Logo />
          </div> 
          <div className="Score">
            <p>SCORE</p>
            <h1>12</h1>
          </div>
        </header>

        <main className="App-main">
          <div className="Choice">
            <Triangle />
            <Paper />
            <Scissors />
            <Rock />
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
