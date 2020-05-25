import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ChartsDisplay from './components/ChartsDisplay/ChartsDisplay';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="charts">
        <ChartsDisplay />
      </div>
    </div>
  );
}

export default App;
