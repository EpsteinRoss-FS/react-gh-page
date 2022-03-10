import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './components/Navbar/NavComponent';
import HomeComponent from "./components/Homepage/HomeComponent";
import MediaComponent from "./components/Media/MediaComponent";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import SongsComponent from "./components/Songs/SongsComponent";
import PressKitComponent from "./components/PressKit/PressKitComponent";
import GalleryComponent from "./components/Gallery/GalleryComponent";
import EventsComponent from "./components/Events/EventsComponent";

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
            <Route path="events" element={<EventsComponent />} />
            <Route path="songs" element={<SongsComponent />} />
            <Route path="press-kit" element={<PressKitComponent />} />
            <Route path="gallery" element={<GalleryComponent />} />
        </Routes>
      </section>

    </div>
  );
}

export default App;
