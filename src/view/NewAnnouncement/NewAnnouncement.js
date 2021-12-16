import { Form } from '../../components/Form/Form';
import s from './NewAnnouncement.module.css';
export const NewAnnouncement = ({ addNewAnnouncement }) => {
  return (
    <div className={s.container}>
      <Form addNewAnnouncement={addNewAnnouncement} />
    </div>
  );
};
