import React from 'react';
import { CategoryList } from '../../dummyData';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="categories-display">
      <h1 className="name">SLUM DATA</h1>
      <h3>Dashboard</h3>

      {/*Categories  */}
      <div className="categories-container">
        <h1>Categories</h1>
        <h3>
          Add Category <span>+</span>
        </h3>
        <ul>
          {CategoryList.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
        <h1>Users</h1>
        <h1>Settings</h1>
      </div>
    </div>
  );
};

export default Sidebar;
