
import React from 'react';
import './Tabs.css';

function Tabs({ setActiveTab }) {
  return (
    <div className="tabs">
      <button onClick={() => setActiveTab('safe')}>Safe</button>
      <button onClick={() => setActiveTab('fast')}>Fast</button>
      <button onClick={() => setActiveTab('secure')}>Secure</button>
    </div>
  );
}

export default Tabs;
