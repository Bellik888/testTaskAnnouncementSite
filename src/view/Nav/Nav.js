import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

export const Nav = () => {
  return (
    <ul className={s.list}>
      <NavLink exact to="/" className={s.link} activeClassName={s.active}>
        Home
      </NavLink>
      <NavLink to="/new" className={s.link} activeClassName={s.active}>
        Add
      </NavLink>
      {/* <NavLink to="/announcement/:announcementId">Details</NavLink> */}
    </ul>
  );
};
