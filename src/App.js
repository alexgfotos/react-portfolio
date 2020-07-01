import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Lorem from '../src/components/Lorem'
import HideScroll from '../src/components/HideScroll'
import Jumbotron from '../src/components/Jumbotron'
import PortfolioCard from './components/PortfolioCard'
import Portfolio from './components/portfolio'


function App() {
  return (
    <>
      <HideScroll/>
      <Jumbotron/>
      {/* <PortfolioCard/> */}
      {/* <PortfolioCard/> */}
      <Lorem/>
      <Portfolio/>
    
    </>
  );
}

export default App;
