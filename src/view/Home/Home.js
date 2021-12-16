import { AnnouncementList } from '../../components/AnnouncementList/AnnouncementList';

export const Home = ({
  announcementList,
  deleteAnnouncement,
  onEditAnnouncement,
}) => {
  return (
    <AnnouncementList
      announcementList={announcementList}
      deleteAnnouncement={deleteAnnouncement}
      onEditAnnouncement={onEditAnnouncement}
    />
  );
};
