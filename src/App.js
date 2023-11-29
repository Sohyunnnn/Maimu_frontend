import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import { useEffect } from 'react';

const App = () => {

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
