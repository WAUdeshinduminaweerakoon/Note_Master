import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    window.location.href = '/'; 
  };

  return (
    <header className='flex items-center justify-between w-full h-10 bg-slate-500'>
      <div className="flex items-center space-x-6">
        <h1>Note Master</h1>
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link>
        <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
        <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
      </div>
    </header>
  );
};

export default Header;



