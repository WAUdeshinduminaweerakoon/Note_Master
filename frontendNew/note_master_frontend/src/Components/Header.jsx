
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Image/log.png'

const Header = ({ isAuthenticated, onSignOut }) => {
  const handleSignOut = () => {
    
    onSignOut();
  };

  return (
    <header className='flex items-center justify-between w-full h-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 '>
      
      <div className="flex items-center m-10 ">
        <Link to="/">
        <img src={logo} alt="Logo" className="w-auto h-12 sm:h-10 md:h-15 lg:h-18 xl:h-22" />
        </Link>
        <Link to = '/'>
        <h1 className='m-4 text-1xl md:text-2xl lg:text-3xl xl:text-4xl'>Note Master</h1>
        </Link>
      </div>
      <div className="flex items-center m-10 space-x-6"> 
        {isAuthenticated ? (
          <button onClick={handleSignOut} className="text-white hover:text-gray-300">Sign Out</button>
        ) : (
          <>
            <Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link>
            <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

