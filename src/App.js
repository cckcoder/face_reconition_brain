import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkFrom from './components/ImageLinkFrom/ImageLinkFrom'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkFrom />
      {/*
      <FaceRecognition />
      */}
    </div>
  );
}

export default App;
