import React from 'react';
import {  
  Link 
} from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-900 p-4 ">
    <div className="flex items-center justify-start flex-wrap">
      <div className="block">
        <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-200">Split Expenses</span></Link>
      </div>
      <nav className="block">
        <Link to="/"><span className="inline-block pl-16 text-gray-200 hover:text-gray-500">Home</span></Link>
        <Link to="/dashboard"><span className="inline-block pl-16 text-gray-200 hover:text-gray-500">DashBoard</span></Link>
        {/* <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">About</span></Link>
        <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Contact</span></Link>
        <Link to="/"><span className="inline-block px-4 py-2 leading-none border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900">Login</span></Link> */}
      </nav>
    </div>
  </header>
);
export default Header;