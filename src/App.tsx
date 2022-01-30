import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './components/Navbar/NavComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <section>
        <Routes>
          {/*<Route path="/" element={<Profile />} />*/}
        </Routes>
      </section>

    </div>
  );
}

export default App;
