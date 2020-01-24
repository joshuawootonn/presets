import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Emotion from './components/Emotion/Emotion';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant='small'>asdf</Button>
        <Emotion>
          <span role='img' aria-label='crying'>
            😭😭😭
          </span>
        </Emotion>
      </header>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
