
import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import MainSection from './components/MainSection';
import FastContent from './components/FastContent';
import Slides from './components/Slides';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('safe');

  return (
    <div className="App">
      <Header />
      <Tabs setActiveTab={setActiveTab} />
      {activeTab === 'safe' && (
        <>
          <MainSection />
          <Slides />
        </>
      )}
      {activeTab === 'fast' && <FastContent />}
    
    </div>
  );
}

export default App;
