import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ArtworksContainer from './components/ArtworksContainer';
import ArtworkDetailsContainer from './components/ArtworkDetailsContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ArtworksContainer />} />
          <Route exact path="/artworkdetails/:id" element={<ArtworkDetailsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
