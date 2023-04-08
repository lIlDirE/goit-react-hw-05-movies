import { UlHeader, LiHeader, Link, NavHeader } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <NavHeader>
        <UlHeader>
          <LiHeader>
            <Link to="/">Home</Link>
          </LiHeader>
          <LiHeader>
            <Link to="/movies">Movies</Link>
          </LiHeader>
        </UlHeader>
      </NavHeader>
    </header>
  );
};
