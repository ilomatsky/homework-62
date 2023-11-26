import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" end activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About Us
      </NavLink>
      <NavLink to="/contacts" activeClassName="active">
        Contacts
      </NavLink>
    </nav>
  );
};

export default NavBar;
