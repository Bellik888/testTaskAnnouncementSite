import { Link } from 'react-router-dom';
import s from './Similar.module.css';

export const Similar = ({ title, id }) => {
  const allAnnouncement = JSON.parse(
    window.localStorage.getItem('announcementList'),
  );
  let arrFromTittle = title.toLowerCase().split(' ');

  let filterArr = allAnnouncement.map((el, index) =>
    el.title
      .toLowerCase()
      .split(' ')
      .map(e => arrFromTittle.includes(e) && el),
  );
  let similar = filterArr
    .map(el => el[0] !== false && el[0])
    .filter(e => e !== false)
    .filter(el => el.id !== id);

  return (
    similar.length !== 0 && (
      <>
        <h3 className={s.title}>Similar announcements</h3>
        <ul className={s.list}>
          {similar.length !== 0 &&
            similar.map(el => (
              <li key={el.id} className={s.item}>
                <Link to={`/announcement/${el.id}`} className={s.link}>
                  <h3 className={s.titleAnn}>{el.title}</h3>
                  <p className={s.date}>{el.date}</p>
                </Link>
              </li>
            ))}
        </ul>
      </>
    )
  );
};
