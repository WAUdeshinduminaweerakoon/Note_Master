
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';

import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Notes from './Components/Notes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    
    setIsAuthenticated(false);
    
  };
  return (
    
    <BrowserRouter>
    <div className="flex flex-col h-screen">
    <Header isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <div className="flex-1 overflow-y-auto bg-emerald-500">
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Notes' element={<Notes/>}></Route>
      </Routes>
    </div>
    <Footer />
  </div>
  </BrowserRouter>
    
    
  
  );
}

export default App;
