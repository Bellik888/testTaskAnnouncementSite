import { Link } from 'react-router-dom';
import s from './Similar.module.css';

//render similar announcement for our choose announcement
export const Similar = ({ title, id }) => {
  const allAnnouncement = JSON.parse(
    window.localStorage.getItem('announcementList'),
  );
  let arrFromTittle = title.toLowerCase().split(' ');

  // check which elements similar to our and return similar word
  let filterArr = allAnnouncement.map((el, index) =>
    el.title
      .toLowerCase()
      .split(' ')
      .map(e => arrFromTittle.includes(e) && el),
  );
  // use array with similar words to create newArray with similar object(use index)
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
