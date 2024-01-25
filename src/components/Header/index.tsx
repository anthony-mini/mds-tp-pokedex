import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-6" id="header">
        <Link to="/">
          <h1 className="text-3xl font-bold">Welcome to React Courses !</h1>
        </Link>
      </header>
    </>
  );
};

export default Header;
