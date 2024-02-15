import { Link } from 'react-router-dom';
import { logo } from '../../assets/index';

const Header = () => {
  return (
    <>
      <header className=" flex justify-center items-center " id="header">
        <Link to="/" className="z-20">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </header>
    </>
  );
};

export default Header;
