import {UlHeader, LiHeader, Link, NavHeader} from './Header.styled'

const Header = () => {

  return (
    <header>
      <NavHeader >
        <UlHeader >
          <LiHeader >
            <Link to="/">Home</Link>
          </LiHeader>
          <LiHeader >
            <Link to="/movies">Movies</Link>
          </LiHeader>
        </UlHeader>
      </NavHeader>
    </header>
  );
};

export default Header;