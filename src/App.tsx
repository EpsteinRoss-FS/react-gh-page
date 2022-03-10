import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './components/Navbar/NavComponent';
import HomeComponent from "./components/Homepage/HomeComponent";
import MediaComponent from "./components/Media/MediaComponent";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <section>
        <Routes>
          {/*<Route path="/" element={<Profile />} />*/}
            <Route path="/" element={<HomeComponent />} />
            <Route path="home" element={<HomeComponent />} />
            <Route path="media" element={<MediaComponent />} />
        </Routes>
      </section>

    </div>
  );
}

export default App;
