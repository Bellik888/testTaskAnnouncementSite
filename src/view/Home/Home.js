import { useState } from 'react/cjs/react.development';
import { AnnouncementList } from '../../components/AnnouncementList/AnnouncementList';
import { Filter } from '../../components/Filter/Filter';
export const Home = ({
  announcementList,
  deleteAnnouncement,
  onEditAnnouncement,
}) => {
  const [filter, setFilter] = useState('');

  const onSubmitFilter = filter => {
    setFilter(filter);
  };
  return (
    <>
      <h1>Announcement</h1>
      <Filter onSubmitFilter={onSubmitFilter} />
      <AnnouncementList
        announcementList={announcementList}
        deleteAnnouncement={deleteAnnouncement}
        onEditAnnouncement={onEditAnnouncement}
        filter={filter}
      />
    </>
  );
};
