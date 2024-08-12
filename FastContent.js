
import React from 'react';
import './FastContent.css';

function FastContent() {
  return (
    <div className="fast-content">
      <h1>The <span className="highlight">fast</span> way to do things online</h1>
      <div className="slides-container">
        <div className="slide">
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
        </div>
        
      </div>
    </div>
  );
}

export default FastContent;
