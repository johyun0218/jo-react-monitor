import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './c3.css';
import ChartMain from './charts/ChartMain'
import EventPractice from './chart04/EventPractice'
import EventPractive2 from './chart04/EventPractive2'
import IterationSample from './chart06/IterationSample'
import Counter from './chart08/Counter'
import Average from './chart08/Average'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Average />
        {/* <Counter /> */}
        {/* <IterationSample /> */}
        {/* <EventPractice />
        <EventPractive2 /> */}
        <ChartMain></ChartMain>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
