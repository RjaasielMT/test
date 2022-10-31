import React from 'react';
import BannerImage from './components/BannerImage';
import './App.css';
import AlbumMaker from './components/AlbumMaker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to my photojournal</h1>
        </div>
        <h3>Rebeca Meneses</h3>
        <AlbumMaker />
      </header>
    </div>
  );
}

export default App;
