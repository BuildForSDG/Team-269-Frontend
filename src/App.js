import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/index';
import axios from 'axios';

axios.defaults.baseURL = 'https://b4sdg-team269.herokuapp.com/api/v1';

function App() {
  return (
    <div className="LandingPage">
      <LandingPage />
    </div>
  );
}

export default App;
