import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <ul>
      <NavLink to="/new">New</NavLink>
      <NavLink exact to="/">
        Home
      </NavLink>
      {/* <NavLink to='/edit'>EditPage</NavLink> */}
    </ul>
  );
};
