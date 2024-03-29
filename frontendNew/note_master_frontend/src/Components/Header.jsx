// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, onSignOut }) => {
  const handleSignOut = () => {
    
    onSignOut();
  };

  return (
    <header className='flex items-center justify-between w-full h-12 bg-slate-500 '>
      <div className="flex items-center m-10 space-x-6">
        <h1 className='m-10 text-4xl'>Note Master</h1>
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

