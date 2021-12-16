import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

export const EditPage = ({ editorAnnouncement, editedAnnouncement }) => {
  const [title, setTitle] = useState(editorAnnouncement.title);
  const [description, setDescription] = useState(
    editorAnnouncement.description,
  );
  const history = useHistory();
  let editedAnn = {
    title,
    description,
    date: editorAnnouncement.date,
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
      <form>
        <input
          style={{ display: 'block' }}
          id="5"
          type="text"
          value={title ?? editorAnnouncement.title}
          onChange={onChangeTitle}
        />
        <textarea
          cols="30"
          rows="10"
          value={description ?? editorAnnouncement.description}
          onChange={onChangeDescription}
        ></textarea>
        <button disabled={isDisabled()} type="button" onClick={completeEdit}>
          Complete
        </button>
      </form>
    )
  );
};
