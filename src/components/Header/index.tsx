import { Link } from 'react-router-dom';
import { logo, nextPages } from '../../assets';

const Header = () => {
  return (
    <>
      <header className=" flex justify-center items-center " id="header">
        <Link to="/" className="z-20">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Link to="/team-builder" className="text-team-builder flex">
          Team Builder
          <img src={nextPages} alt="next" className="header-next" />
        </Link>
      </header>
    </>
  );
};

export default Header;
