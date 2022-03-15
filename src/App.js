import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ArtworkDetailsContainer from './components/ArtworkDetailsContainer';
import ArtworksContainer from './components/ArtworksContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ArtworksContainer />} />
          <Route exact path="/ArtworkDetailsContainer" element={<ArtworkDetailsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
