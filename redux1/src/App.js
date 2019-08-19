import React from 'react';
import './App.css';
import CountReduxButton from './ex2/countReduxButton';
import CountReduxDisplay from './ex2/CountReduxDisplay';
import ControlPanel from './component/ControlPanel';

function App() {
  return (
    <div className="App">
     <CountReduxDisplay></CountReduxDisplay>
    <CountReduxButton></CountReduxButton>
    <ControlPanel></ControlPanel>
    </div>
  );
}

export default App;
