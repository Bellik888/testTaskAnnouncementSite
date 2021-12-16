import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import s from './EditPage.module.css';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let todayDate = `${dd}.${mm}.${yyyy}`;

export const EditPage = ({ editorAnnouncement, editedAnnouncement }) => {
  const [title, setTitle] = useState(editorAnnouncement.title);
  const [description, setDescription] = useState(
    editorAnnouncement.description,
  );
  const history = useHistory();
  let editedAnn = {
    title,
    description,
    date: todayDate,
    id: editorAnnouncement.id,
  };

  const isDisabled = () => {
    if (title !== '' && description !== '') {
      return false;
    }
    return true;
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  const completeEdit = () => {
    editedAnnouncement(editedAnn);
    history.push('/');
  };
  return (
    editorAnnouncement && (
      <form className={s.form}>
        <input
          style={{ display: 'block' }}
          id="5"
          type="text"
          value={title ?? editorAnnouncement.title}
          onChange={onChangeTitle}
          className={s.input}
        />
        <textarea
          cols="30"
          rows="10"
          value={description ?? editorAnnouncement.description}
          onChange={onChangeDescription}
          className={s.text}
        ></textarea>
        <button
          disabled={isDisabled()}
          type="button"
          className={s.btn}
          onClick={completeEdit}
        >
          <BsFillCheckCircleFill className={s.icon} />
        </button>
      </form>
    )
  );
};

//BsFillCheckCircleFill
