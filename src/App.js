import React from 'react';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Main from './Components/Main';
import "./styles/styles.scss";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
}

export default App;
