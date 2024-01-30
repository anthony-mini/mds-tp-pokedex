import { Link } from 'react-router-dom';
import { logo, pokeball } from '../../assets/index';

const Header = () => {
  return (
    <>
      <header
        className="fixed w-full bg-gray-600 py-6 px-4 shadow-lg flex justify-center items-center relative"
        id="header">
        <img
          src={pokeball}
          alt="pokeball"
          className="absolute z-10 w-100 opacity-70"></img>
        <Link to="/" className="z-20">
          <img src={logo} alt="logo" className="w-80" />
        </Link>
      </header>
    </>
  );
};

export default Header;
