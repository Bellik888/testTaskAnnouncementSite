import { useParams } from 'react-router-dom';
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import s from './Details.module.css';

import { Similar } from '../../components/Similar/Similar';

export const Details = ({ onEditAnnouncement, deleteAnnouncement }) => {
  const { announcementId } = useParams();
  const history = useHistory();
  const allAnnouncement = JSON.parse(
    window.localStorage.getItem('announcementList'),
  );

  let announcement =
    allAnnouncement &&
    allAnnouncement.filter(el => el.id === announcementId)[0];

  let { title, description, date, id } = announcement;

  const deleteThis = id => {
    deleteAnnouncement(id);
    history.push('/');
  };

  return (
    announcement && (
      <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{description}</p>
        <p className={s.date}>{date}</p>
        <div className={s.btnWrapper}>
          <button
            type="button"
            onClick={() => onEditAnnouncement({ title, description, date, id })}
            className={s.btn}
          >
            <BsFillPencilFill className={s.icon} />
          </button>
          <button
            type="button"
            onClick={() => deleteThis(id)}
            className={s.btn}
          >
            {' '}
            <BsTrashFill className={s.icon} />
          </button>
        </div>
        <Similar title={title} id={id} />
      </div>
    )
  );
};
