import s from './AnnouncementList.module.css';

export const AnnouncementList = ({
  announcementList,
  deleteAnnouncement,
  onEditAnnouncement,
}) => {
  return (
    <ul className={s.list}>
      {announcementList.length !== 0 &&
        announcementList.map(({ title, description, date, id }) => (
          <li key={title} className={s.item}>
            <p className={s.list}>{title}</p>
            <p className={s.list}>{description}</p>
            <p className={s.list}>{date}</p>
            <button type="button" onClick={() => deleteAnnouncement(id)}>
              {' '}
              delete
            </button>
            <button
              type="button"
              onClick={() =>
                onEditAnnouncement({ title, description, date, id })
              }
            >
              edit
            </button>
          </li>
        ))}
    </ul>
  );
};
