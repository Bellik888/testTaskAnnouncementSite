import s from './AnnouncementList.module.css';
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// render list of all announcements

export const AnnouncementList = ({
  announcementList,
  deleteAnnouncement,
  onEditAnnouncement,
  filter,
}) => {
  return (
    <>
      <ul className={s.list}>
        {announcementList.length !== 0 &&
          announcementList.map(({ title, description, date, id }) =>
            filter === '' ? (
              <li key={title} className={s.item}>
                <Link to={`/announcement/${id}`} className={s.link}>
                  <div className={s.textWrapper}>
                    <h2 className={s.titleAnn}>{title}</h2>
                    <p className={s.date}>{date}</p>
                  </div>
                </Link>
                <div className={s.btnWrapper}>
                  <button
                    type="button"
                    onClick={() => deleteAnnouncement(id)}
                    className={s.btn}
                  >
                    {' '}
                    <BsTrashFill className={s.icon} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onEditAnnouncement({ title, description, date, id })
                    }
                    className={s.btn}
                  >
                    <BsFillPencilFill className={s.icon} />
                  </button>
                </div>
              </li>
            ) : (
              title.toLowerCase().includes(filter.toLowerCase()) && (
                <li key={title} className={s.item}>
                  <Link to={`/announcement/${id}`} className={s.link}>
                    <div className={s.textWrapper}>
                      <p className={s.titleAnn}>{title}</p>
                      <p className={s.date}>{date}</p>
                    </div>
                  </Link>
                  <div className={s.btnWrapper}>
                    <button
                      type="button"
                      onClick={() => deleteAnnouncement(id)}
                      className={s.btn}
                    >
                      {' '}
                      <BsTrashFill className={s.icon} />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onEditAnnouncement({ title, description, date, id })
                      }
                      className={s.btn}
                    >
                      <BsFillPencilFill className={s.icon} />
                    </button>
                  </div>
                </li>
              )
            ),
          )}
      </ul>
    </>
  );
};

//BsTrashFill
