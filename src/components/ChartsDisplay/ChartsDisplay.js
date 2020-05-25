import React, { Component } from 'react';
import '../ChartsDisplay/ChartsDisplay.css';
import person from '../../images/person.jpg';

class ChartsDisplay extends Component {
  render() {
    return (
      <div className="charts-container">
        <div className="header-info-display">
          <span>
            <h1>Create a new survey</h1>
          </span>
          <span>
            <h1>For you</h1>
          </span>

          <form>
            <input type="text" placeholder="Search " />
          </form>
          <div className="profile-container">
            <img
              style={{
                width: '30px',
                height: '30px'
              }}
              className="profile"
              src={person}
              alt=""
            />
            <span className="profile-name">Luigi Morel</span>
          </div>
        </div>
        <div className="charts-area"></div>
      </div>
    );
  }
}
export default ChartsDisplay;
